import React from "react";
import Card from '../../../components/UI/Card';
import Grid from "@mui/material/Grid";
import PandingMasterCard from "./PandingMasterCard/PandingMasterCard";
import classes from './PandingMaster.module.css';
import { useState, useEffect   } from "react";
import axios from "axios";

const PandingMaster = () => {
  const [pendingMasters,setPendingMaster] = useState([]);
  const fetchPendingMaster = async()=>{
    const {data} = await axios.get('https://lapi.xzonebet.com/api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=3&status=pending');
    setPendingMaster(data.data);
  };
 console.log(pendingMasters);
  useEffect(()=>{
   fetchPendingMaster();
   return ()=>setPendingMaster([]);
  },[]);
  console.log(pendingMasters);
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Panding Master</h1>
        </div>
        <div className={classes["card-body"]}>
          <Grid container spacing={3}>
           {pendingMasters.length !==0 && pendingMasters.map((pendingMaster)=>
           (<PandingMasterCard key={pendingMaster?.id} pendingMaster ={pendingMaster} />)
           )}
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default PandingMaster;
