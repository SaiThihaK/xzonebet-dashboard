import React from "react";
import Card from '../../../components/UI/Card';
import Grid from "@mui/material/Grid";
import classes from './CompleteAgent.module.css';
import { useState, useEffect   } from "react";
import axios from "axios";
import MasterCard from "../../../components/MasterCard/MasterCard";


const CompleteAgent = () => {
  const [completeMasters,setCompleteMasters] = useState([]);
  const fetchCompleteMaster = async()=>{
    const {data} = await axios.get('https://lapi.xzonebet.com/api/affiliate-register-lists?sortColumn=updated_at&sortDirection=desc&limit=30&status=complete&form_type=agent');
    setCompleteMasters(data.data);
  };
 console.log(completeMasters);
  useEffect(()=>{
   fetchCompleteMaster();
   return ()=>setCompleteMasters([]);
  },[]);
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Complete Agents</h1>
        </div>
        <div className={classes["card-body"]}>
          <Grid container spacing={3}>
           {completeMasters.length !==0 && completeMasters.map((completeMaster)=>
           (<MasterCard key={completeMaster?.id} user={completeMaster} path="/account/agent/complete-agent/detail/" />)
           )}
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default CompleteAgent;