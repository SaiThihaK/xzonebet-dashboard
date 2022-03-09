import React from "react";
import Card from '../../../components/UI/Card';
import Grid from "@mui/material/Grid";
import classes from './ConfirmMaster.module.css';
import { useState, useEffect   } from "react";
import axios from "axios";
import MasterCard from "../../../components/MasterCard/MasterCard";
import { getMethod } from "../../../services/api-services";

const ConfirmMaster = () => {
  const [confirmMasters,setConfirmMasters] = useState([]);
  const fetchConfirmMaster = async()=>{
    const {data} = await axios.request(getMethod(`/api/affiliate-register-lists?sortColumn=updated_at&sortDirection=desc&limit=30&status=deposit-confirm&form_type=master`));
    setConfirmMasters(data.data);
  };
  useEffect(()=>{
   fetchConfirmMaster();
   return ()=>setConfirmMasters([]);
  },[]);
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Confirm Masters</h1>
        </div>
        <div className={classes["card-body"]}>
          <Grid container spacing={3}>
           {confirmMasters.length !==0 && confirmMasters.map((confirmMaster)=>
           (<MasterCard key={confirmMaster?.id} user={confirmMaster} path="/account/master/confirm-master/detail/" />)
           )}
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default ConfirmMaster;