import React from "react";
import Card from '../../../components/UI/Card';
import Grid from "@mui/material/Grid";
import classes from './PendingAgent.module.css';
import { useState, useEffect   } from "react";
import axios from "axios";
import PendingAgentCard from "./PendingAgentCard/PendingAgentCard";
import { getMethod } from "../../../services/api-services";

const PendingAgent = () => {
  const [pendingMasters,setPendingMaster] = useState([]);
  
  const fetchPendingMaster = async()=>{
    const {data} = await axios.request(getMethod(`/affiliate-register-lists?sortColumn=updated_at&sortDirection=desc&limit=30&status=agent`));
    setPendingMaster(data.data);
  };
//  console.log(pendingMasters);
 
  useEffect(()=>{
   fetchPendingMaster();
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