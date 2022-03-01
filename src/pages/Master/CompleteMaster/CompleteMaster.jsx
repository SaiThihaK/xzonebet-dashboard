import React from "react";
import Card from '../../../components/UI/Card';
import Grid from "@mui/material/Grid";

import classes from './CompleteMaster.module.css';
import { useState, useEffect   } from "react";
import axios from "axios";
import CompleteMasterCard from "./CompleteMasterCard/CompleteMasterCard";

const CompleteMaster = () => {
  const [completeMasters,setCompleteMasters] = useState([]);
  const fetchCompleteMaster = async()=>{
    const {data} = await axios.get('https://lapi.xzonebet.com/api/affiliate-register-lists?sortColumn=updated_at&sortDirection=desc&limit=30&status=complete&form_type=master');
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
          <h1 className={classes["card-title"]}>Complete Master</h1>
        </div>
        <div className={classes["card-body"]}>
          <Grid container spacing={3}>
           {completeMasters.length !==0 && completeMasters.map((completeMaster)=>
           (<CompleteMasterCard key={completeMaster?.id} completeMaster ={completeMaster} />)
           )}
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default CompleteMaster;