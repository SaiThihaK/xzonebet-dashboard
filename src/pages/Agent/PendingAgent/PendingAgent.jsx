import React from "react";
import Card from '../../../components/UI/Card';
import Grid from "@mui/material/Grid";
import classes from './PendingAgent.module.css';
import { useState, useEffect   } from "react";
import axios from "axios";
import PendingAgentCard from "./PendingAgentCard/PendingAgentCard";
import { getMethod } from "../../../services/api-services";
import { logoutHandler } from "../../../components/Sidebar/Sidebar";

const PendingAgent = () => {
  const [pendingMasters,setPendingMaster] = useState([]);
  
  const fetchPending = async()=>{
    try{
      const pending = await axios.request(getMethod('/api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=agent'));
      // console.log(pending)
      setPendingMaster(pending.data.data);

    }catch(error){
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
    }
  };
//  console.log(pendingMasters);
 
  useEffect(()=>{
   fetchPending();
   return ()=>setPendingMaster([]);
  },[]);
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Pending Agents</h1>
        </div>
        <div className={classes["card-body"]}>
          <Grid container spacing={3}>
           {pendingMasters.length !==0 && pendingMasters.map((pendingMaster)=>
           (
             <PendingAgentCard key={pendingMaster?.id} user={pendingMaster} path={"/account/agent/pending-agent/detail/"} />)
           )}
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default PendingAgent;