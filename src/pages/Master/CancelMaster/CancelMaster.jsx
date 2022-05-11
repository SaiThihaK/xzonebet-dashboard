import React from "react";
import Card from '../../../components/UI/Card';
import Grid from "@mui/material/Grid";
import classes from './CancelMaster.module.css';
import MemberCard from "../../../components/MemberCard/MemberCard";
import CustomGetFunction from "../../../services/CustomGetFunction";
import { cancelMasterApi } from "../../../services/api-collection";

const CancelMaster = () => {

  const {data} = CustomGetFunction(cancelMasterApi,[]);

 
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
              data.length  !==0 && data.map((master,index)=>(
                <Grid item xs={6} key={index}>
                  <MemberCard partner={master} path={"/dashboard/account/master/cancel-master/detail/"} />
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