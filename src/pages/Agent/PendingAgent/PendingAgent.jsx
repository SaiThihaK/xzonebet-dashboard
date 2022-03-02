import React from "react";
import Card from '../../../components/UI/Card';
import Grid from "@mui/material/Grid";

import classes from './PendingAgent.module.css';
import { useState, useEffect   } from "react";
import axios from "axios";
import MasterCard from "../../../components/MasterCard/MasterCard";

const PendingAgent = () => {
  const [pendingMasters,setPendingMaster] = useState([]);
  const fetchPendingMaster = async()=>{
    const {data} = await axios.get('https://lapi.xzonebet.com/api/affiliate-register-lists?sortColumn=updated_at&sortDirection=desc&limit=30&status=agent');
    setPendingMaster(data.data);
  };
 console.log(pendingMasters);
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
           (<MasterCard key={pendingMaster?.id} user={pendingMaster} path={"/account/agent/pending-agent/detail/"} />)
           )}
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default PendingAgent;