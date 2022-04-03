import React from "react";
import Card from '../../../components/UI/Card';
import Grid from "@mui/material/Grid";
import 'react-toastify/dist/ReactToastify.css';
import classes from './PandingMaster.module.css';
import { useState, useEffect   } from "react";
import axios from "axios";
import MasterCard from "../../../components/MasterCard/MasterCard";
import { getMethod } from "../../../services/api-services";
import { logoutHandler } from "../../../components/Sidebar/Sidebar";
import { ToastContainer } from "react-toastify";
import MemberCard from "../../../components/MemberCard/MemberCard";

const PandingMaster = () => {
  const [pendingMasters,setPendingMaster] = useState([]);
  const fetchPendingMaster = async()=>{
    try{
      const {data} = await axios.request(getMethod('api/affiliate-register-lists?sortColumn=updated_at&sortDirection=desc&limit=30&status=master'));
      if(data.status==="success"){
        setPendingMaster(data.data);
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
//  console.log(pendingMasters);
  useEffect(()=>{
   fetchPendingMaster();
   return ()=>setPendingMaster([]);
  },[]);
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <ToastContainer />
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Pending Masters</h1>
        </div>
        <div className={classes["card-body"]}>
          {/* <Grid container spacing={3}>
           {pendingMasters.length !==0 && pendingMasters.map((pendingMaster)=>
           (<MasterCard key={pendingMaster?.id} user={pendingMaster} path={"/account/master/panding-master/detail/"} />)
           )}
          </Grid> */}
          {
            <Grid container spacing={5}>
              {
              
                pendingMasters.length !==0 && pendingMasters.map((master,index)=>(
                 <Grid item xs={6} key={index}>
                    <MemberCard partner={master} path={"/account/master/panding-master/detail/"} />
                   </Grid>
                 
                ))
              }
            </Grid>
          }
        </div>
      </Card>
    </div>
  );
};

export default PandingMaster;
