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
import CustomGetFunction from "../../../services/CustomGetFunction";

const PandingMaster = () => {

  const {data} = CustomGetFunction('api/affiliate-register-lists?sortColumn=updated_at&sortDirection=desc&limit=30&status=master',[]);


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
              
                data.length !==0 && data.map((master,index)=>(
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
