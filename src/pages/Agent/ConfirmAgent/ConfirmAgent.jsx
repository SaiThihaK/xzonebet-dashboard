import React from "react";
import Card from '../../../components/UI/Card';
import Grid from "@mui/material/Grid";
import classes from './ConfirmAgent.module.css';
import { useState, useEffect   } from "react";
import axios from "axios";
import MasterCard from "../../../components/MasterCard/MasterCard";

const ConfirmAgent = () => {
  const [confirmMasters,setConfirmMasters] = useState([]);
  const fetchConfirmMaster = async()=>{
    const {data} = await axios.get('https://lapi.xzonebet.com/api/affiliate-register-lists?sortColumn=updated_at&sortDirection=desc&limit=30&status=deposit-confirm&form_type=agent');
    setConfirmMasters(data.data);
  };
  
  console.log(confirmMasters)


  useEffect(()=>{
   fetchConfirmMaster();
   return ()=>setConfirmMasters([]);
  },[]);
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Confirm Agents</h1>
        </div>
        <div className={classes["card-body"]}>
          <Grid container spacing={3}>
           {confirmMasters.length !==0 && confirmMasters.map((confirmMaster)=>
           (<MasterCard key={confirmMaster?.id} user={confirmMaster} path="/account/agent/confirm-agent/detail/" />)
           )}
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default ConfirmAgent;