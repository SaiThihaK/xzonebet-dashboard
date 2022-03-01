import React from "react";
import Card from '../../../components/UI/Card';
import Grid from "@mui/material/Grid";
import classes from './CancelMaster.module.css';
import { useState, useEffect   } from "react";
import axios from "axios";

import MasterCard from "../../../components/MasterCard/MasterCard";

const CancelMaster = () => {
  const [cancelMasters,setCancelMaster] = useState([]);
  const fetchCancelMaster = async()=>{
    const {data} = await axios.get('https://lapi.xzonebet.com/api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=deposit-rejet&form_type=master');
    setCancelMaster(data.data);
  };
 console.log(cancelMasters);
  useEffect(()=>{
   fetchCancelMaster();
   return ()=>setCancelMaster([]);
  },[]);
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Cancel Master</h1>
        </div>
        <div className={classes["card-body"]}>
          <Grid container spacing={3}>
           {cancelMasters.length !==0 && cancelMasters.map((cancelMaster)=>
           (<MasterCard key={cancelMaster?.id} user ={cancelMaster} />)
           )}
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default CancelMaster;