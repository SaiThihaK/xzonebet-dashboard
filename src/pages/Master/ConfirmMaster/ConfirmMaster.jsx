import React from "react";
import Card from '../../../components/UI/Card';
import Grid from "@mui/material/Grid";
import classes from './ConfirmMaster.module.css';
import { useState, useEffect   } from "react";
import axios from "axios";
import MasterCard from "../../../components/MasterCard/MasterCard";
import { getMethod } from "../../../services/api-services";
import { logoutHandler } from "../../../components/Sidebar/Sidebar";
import MemberCard from "../../../components/MemberCard/MemberCard";
import { confirmMasterApi } from "../../../services/api-collection";

const ConfirmMaster = () => {
  const [confirmMasters,setConfirmMasters] = useState([]);
  const fetchConfirmMaster = async()=>{
    try{
      const {data} = await axios.request(getMethod(confirmMasterApi));
      if(data.status==="success"){
        setConfirmMasters(data.data);
        return;
      }

    }catch(error){
      console.log(error);
      console.log(error.response.data.message)
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
    }
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
          {/* <Grid container spacing={3}>
           {confirmMasters.length !==0 && confirmMasters.map((confirmMaster)=>
           (<MasterCard key={confirmMaster?.id} user={confirmMaster} path="/account/master/confirm-master/detail/" />)
           )}
          </Grid> */}
          <Grid container spacing={5}>
            {
              confirmMasters.length !==0 && confirmMasters.map((master,index)=>(
                <Grid item xs={6} key={index}>
                  <MemberCard partner={master} path={"/account/master/confirm-master/detail/"} />
                </Grid>
  ))
            }
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default ConfirmMaster;