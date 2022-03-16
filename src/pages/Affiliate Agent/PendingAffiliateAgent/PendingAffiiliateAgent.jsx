import React from "react";
import Card from '../../../components/UI/Card';
import Grid from "@mui/material/Grid";
import classes from './PendingAffiliateAgent.module.css';
import { useState, useEffect   } from "react";
import axios from "axios";
import { getMethod } from "../../../services/api-services";
import MasterCard from "../../../components/MasterCard/MasterCard";

const PendingAffiliateAgent = () => {
    const [pendingMasters,setPendingMaster] = useState([]);
    const fetchPendingMaster = async()=>{
      const {data} = await axios.request(getMethod('/api/affiliate-register-lists?sortColumn=updated_at&sortDirection=desc&limit=30&status=affiliate-agent'));
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
          <h1 className={classes["card-title"]}>Pending Affiliate Agents</h1>
        </div>
        <div className={classes["card-body"]}>
          <Grid container spacing={3}>
           {pendingMasters.length !==0 && pendingMasters.map((pendingMaster)=>
           (<MasterCard key={pendingMaster?.id} user={pendingMaster} path={"/account/affiliate-agent/pending-affiliate-agent/detail/"} />)
           )}
          </Grid>
        </div>
      </Card>
    </div>
  );
}

export default PendingAffiliateAgent;