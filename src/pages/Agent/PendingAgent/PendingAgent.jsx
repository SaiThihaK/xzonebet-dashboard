import React from "react";
import Card from '../../../components/UI/Card';
import Grid from "@mui/material/Grid";
import classes from './PendingAgent.module.css';
import { useState, useEffect } from "react";
import axios from "axios";
import PendingAgentCard from "./PendingAgentCard/PendingAgentCard";
import { getMethod } from "../../../services/api-services";
import { logoutHandler } from "../../../components/Sidebar/Sidebar";
import MemberCard from "../../../components/MemberCard/MemberCard";
import CustomGetFunction from "../../../services/CustomGetFunction";

const PendingAgent = () => {

  const { data } = CustomGetFunction('api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=agent', [])

  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Pending Agents</h1>
        </div>
        <div className={classes["card-body"]}>
          {/* <Grid container spacing={3}>
           {pendingMasters.length !==0 && pendingMasters.map((pendingMaster)=>
           (
             <PendingAgentCard key={pendingMaster?.id} user={pendingMaster} path={"/account/agent/pending-agent/detail/"} />)
           )}
          </Grid> */}
          <Grid container spacing={5}>
            {
              data.length !== 0 && data.map((master, index) => (
                <Grid item xs={6} key={index}>
                  <MemberCard partner={master} path={"/dashboard/account/agent/pending-agent/detail/"} />
                </Grid>
              ))
            }
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default PendingAgent;