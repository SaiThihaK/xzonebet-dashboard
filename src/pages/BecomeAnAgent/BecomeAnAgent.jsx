import React from "react";
import Card from "../../components/UI/Card";
import Grid from "@mui/material/Grid";
import classes from "./BecomeAnAgent.module.css";
import TableGetFunction from "../../services/TableGetFunction"
import MemberCard from "../../components/MemberCard/MemberCard";
import { become_an_Partner } from "../../services/api-collection";
import CustomLoading from "../../components/CustomLoading/CustomLoading";
import Nodata from "../../components/Nodata/Nodata";
const BecomeAnAgent = () => {
 const type = localStorage.getItem("type");
 const {data,loading} = TableGetFunction(become_an_Partner,[]);
 console.log("supMaster become an Partner",data)
 
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Become an Partner </h1>
        </div>
        {
          loading ? ( <div className={classes["card-body"]}>
          {
            data.length !==0 ? (  <Grid container spacing={5}>
              {
              
                data.length !==0 && data.map((master,index)=>(
                 <Grid item xs={6} key={index}>
                    <MemberCard partner={master} path={"/dashboard/become-an-agent/detail/"} status />
                   </Grid>
                 
                ))
              }
            </Grid>):(<Nodata />)
          }
          
        </div>):(<CustomLoading />)
        }
       
      </Card>
    </div>
  );
};

export default BecomeAnAgent;