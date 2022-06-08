import React from "react";
import Card from '../../../components/UI/Card';
import Grid from "@mui/material/Grid";
import classes from './CompleteMaster.module.css';
import { useState, useEffect   } from "react";
import axios from "axios";
import MasterCard from "../../../components/MasterCard/MasterCard";
import { getMethod } from "../../../services/api-services";
import { logoutHandler } from "../../../components/Sidebar/Sidebar";
import MemberCard from "../../../components/MemberCard/MemberCard";
import CustomGetFunction from "../../../services/CustomGetFunction";
import { completeMasterApi } from "../../../services/api-collection";
import CustomLoading from "../../../components/CustomLoading/CustomLoading";
import Nodata from "../../../components/Nodata/Nodata";

const CompleteMaster = () => {
  
  const {data,loading} = CustomGetFunction(`api/agents?sortColumn=id&sortDirection=desc&limit=30&agent_level=master`,[]);

  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Complete Masters</h1>
        </div>
        <div className={classes["card-body"]}>
          {/* <Grid container spacing={3}>
           {data.length !==0 && data.map((completeMaster)=>
           (<MasterCard key={completeMaster?.id} user={completeMaster} path="/account/master/complete-master/detail/" />)
           )}
          </Grid> */}

          {
            loading ? (
              <div>
                {
                  data.length !==0 ?(<Grid container spacing={5}>
                    {
                      data.length  !==0 &&
                      data.map((master,index)=>(
                        <Grid item xs={6} key={index}>
                          <MemberCard partner={master} path={"/dashboard/account/master/complete-master/detail/"} />
                        </Grid>)) 
                    }
                  </Grid>):(<Nodata />)                
                }
                </div>
            ):(<CustomLoading />)
          }
           
        </div>
      </Card>
    </div>
  );
};

export default CompleteMaster;