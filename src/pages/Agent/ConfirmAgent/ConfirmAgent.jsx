import React from "react";
import Card from '../../../components/UI/Card';
import Grid from "@mui/material/Grid";
import classes from './ConfirmAgent.module.css';
import { useState, useEffect   } from "react";
import axios from "axios";
import MasterCard from "../../../components/MasterCard/MasterCard";
import { getMethod } from "../../../services/api-services";
import { logoutHandler } from "../../../components/Sidebar/Sidebar";
import MemberCard from "../../../components/MemberCard/MemberCard";
import CustomGetFunction from "../../../services/CustomGetFunction";

const ConfirmAgent = () => {
  const {data} = CustomGetFunction("api/affiliate-register-lists?sortColumn=updated_at&sortDirection=desc&limit=30&status=deposit-confirm&form_type=agent",[])
 
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Confirm Agents</h1>
        </div>
        <div className={classes["card-body"]}>
          {/* <Grid container spacing={3}>
           {confirmMasters.length !==0 && confirmMasters.map((confirmMaster)=>
           (<MasterCard key={confirmMaster?.id} user={confirmMaster} path="/account/agent/confirm-agent/detail/" />)
           )}
          </Grid> */}
           <Grid container spacing={5}>
            {
              data.length  !==0 && data.map((master,index)=>(
                <Grid item xs={6} key={index}>
                  <MemberCard partner={master} path={"/account/agent/confirm-agent/detail/"} />
                </Grid>
  ))
            }
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default ConfirmAgent;