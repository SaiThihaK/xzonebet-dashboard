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

const PendingAffiliateAgent = () => {
    
    const {data} = CustomGetFunction("api/affiliate-register-lists?sortColumn=updated_at&sortDirection=desc&limit=30&status=affiliate-agent",[]);
   
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Pending Affiliate Agents</h1>
        </div>
        <div className={classes["card-body"]}>
          {/* <Grid container spacing={3}>
           {data.length !==0 && data.map((pendingMaster)=>
           (<MasterCard key={pendingMaster?.id} user={pendingMaster} path={"/account/affiliate-agent/pending-affiliate-agent/detail/"} />)
           )}
          </Grid> */}
           {
            <Grid container spacing={5}>
              {
              
                data.length !==0 && data.map((master,index)=>(
                 <Grid item xs={6} key={index}>
                    <MemberCard partner={master} path={"/dashboard/account/affiliate-agent/pending-affiliate-agent/detail/"} />
                   </Grid>
                 
                ))
              }
            </Grid>
          }
        </div>
      </Card>
    </div>
  );
}

export default PendingAffiliateAgent;