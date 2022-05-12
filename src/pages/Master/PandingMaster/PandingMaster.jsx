import React from "react";
import Card from '../../../components/UI/Card';
import Grid from "@mui/material/Grid";
import 'react-toastify/dist/ReactToastify.css';
import classes from './PandingMaster.module.css';

import { ToastContainer } from "react-toastify";
import CustomGetFunction from "../../../services/CustomGetFunction";
import { pendingMasterApi } from "../../../services/api-collection";
import CustomLoading from "../../../components/CustomLoading/CustomLoading";
import MemberCard from "../../../components/MemberCard/MemberCard";
import Nodata from "../../../components/Nodata/Nodata"
const PandingMaster = () => {

  const {data,loading} = CustomGetFunction(pendingMasterApi,[]);


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
            loading ?(<div>
              {
                data.length !== 0 ? (<Grid container spacing={5}>
                  {
                  
                    data.length !==0 && data.map((master,index)=>(
                     <Grid item xs={6} key={index}>
                        <MemberCard partner={master} path={"/dashboard/account/master/panding-master/detail/"} />
                       </Grid>
                     
                    ))
                  }
                </Grid>) : (<Nodata />)
              }
              </div>):(<CustomLoading />)
          }
          
         
        </div>
      </Card>
    </div>
  );
};

export default PandingMaster;
