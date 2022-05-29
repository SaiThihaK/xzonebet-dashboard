import React from "react";
import Card from '../../../components/UI/Card';
import Grid from "@mui/material/Grid";
import classes from './PendingAffiliateAgent.module.css';
import { useState, useEffect   } from "react";
import axios from "axios";
import { getMethod } from "../../../services/api-services";
import MasterCard from "../../../components/MasterCard/MasterCard";
import { logoutHandler } from "../../../components/Sidebar/Sidebar";
import CustomGetFunction from "../../../services/CustomGetFunction";
import MemberCard from "../../../components/MemberCard/MemberCard";
import CustomLoading from "../../../components/CustomLoading/CustomLoading"
import Nodata from "../../../components/Nodata/Nodata"
const PendingAffiliateAgent = () => {
    
    const {data,loading} = CustomGetFunction("api/affiliate-register-lists?sortColumn=updated_at&sortDirection=desc&limit=30&status=accept-affiliate",[]);
   
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Pending Affiliate Agents</h1>
        </div>
        {
          loading ? ( <div className={classes["card-body"]}>
          {
             data.length !== 0 ? ( <>
              <Grid container spacing={5}>
                {
                
                  data.length !==0 && data.map((master,index)=>(
                   <Grid item xs={6} key={index}>
                      <MemberCard partner={master} path={"/dashboard/account/affiliate-agent/pending-affiliate-agent/detail/"} />
                     </Grid>
                   
                  ))
                }
              </Grid>
              </>) :(<Nodata />)
           }
           
        </div>):(<CustomLoading />)
        }
      </Card>
    </div>
  );
}

export default PendingAffiliateAgent;