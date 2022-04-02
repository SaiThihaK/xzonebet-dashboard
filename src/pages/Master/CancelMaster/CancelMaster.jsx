import React from "react";
import Card from '../../../components/UI/Card';
import Grid from "@mui/material/Grid";
import classes from './CancelMaster.module.css';
import { useState, useEffect   } from "react";
import axios from "axios";

import MasterCard from "../../../components/MasterCard/MasterCard";
import { getMethod } from "../../../services/api-services";
import { logoutHandler } from "../../../components/Sidebar/Sidebar";
import MemberCard from "../../../components/MemberCard/MemberCard";

const CancelMaster = () => {
  const [cancelMasters,setCancelMaster] = useState([]);
  const fetchCancelMaster = async()=>{
    try{
      const {data} = await axios.request(getMethod('api/affiliate-register-lists?sortColumn=updated_at&sortDirection=desc&limit=30&status=deposit-rejet&form_type=master'));
      setCancelMaster(data.data);

    }catch(error){
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
    }
  };
//  console.log(cancelMasters);
  useEffect(()=>{
   fetchCancelMaster();
   return ()=>setCancelMaster([]);
  },[]);
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Cancel Masters</h1>
        </div>
        <div className={classes["card-body"]}>
          {/* <Grid container spacing={3}>
           {cancelMasters.length !==0 && cancelMasters.map((cancelMaster)=>
           (<MasterCard key={cancelMaster?.id} user ={cancelMaster} path="/account/master/cancel-master/detail/"/>)
           )}
          </Grid> */}
           <Grid container spacing={5}>
            {
              cancelMasters.length  !==0 && cancelMasters.map((master,index)=>(
                <Grid item xs={6} key={index}>
                  <MemberCard partner={master} path={"/account/master/cancel-master/detail/"} />
                </Grid>
  ))
            }
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default CancelMaster;