import React from "react";
import Card from '../../../components/UI/Card';
import Grid from "@mui/material/Grid";
import classes from './ConfirmMaster.module.css';
import { useState, useEffect   } from "react";
import axios from "axios";
import MasterCard from "../../../components/MasterCard/MasterCard";
import { getMethod } from "../../../services/api-services";
import { logoutHandler } from "../../../components/Sidebar/Sidebar";
import MemberCard from "../../../components/MemberCard/MemberCard";
import { confirmMasterApi } from "../../../services/api-collection";
import CustomGetFunction from "../../../services/CustomGetFunction"
import CustomLoading from "../../../components/CustomLoading/CustomLoading";
import Nodata from "../../../components/Nodata/Nodata"
const ConfirmMaster = () => {
 
  const {data,loading} = CustomGetFunction(confirmMasterApi,[]);
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Confirm Masters</h1>
        </div>
        <div className={classes["card-body"]}>
          {/* <Grid container spacing={3}>
           {confirmMasters.length !==0 && confirmMasters.map((confirmMaster)=>
           (<MasterCard key={confirmMaster?.id} user={confirmMaster} path="/account/master/confirm-master/detail/" />)
           )}
          </Grid> */}
          {
            loading ? ( 
            <div>
            {
              data.length !==0 ? (<Grid container spacing={5}>
                {
                  data.length !==0 &&
                           data.map((master,index)=>(
                            <Grid item xs={6} key={index}>
                              <MemberCard partner={master} path={"/dashboard/account/master/confirm-master/detail/"} />
                            </Grid>
              ))
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

export default ConfirmMaster;