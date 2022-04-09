import React, { useEffect, useState } from "react";
import Card from "../../components/UI/Card";
import Grid from "@mui/material/Grid";
import classes from "./BecomeAnAgent.module.css";
import 'react-toastify/dist/ReactToastify.css';
import TableGetFunction from "../../services/TableGetFunction"
import MemberCard from "../../components/MemberCard/MemberCard";
const BecomeAnAgent = () => {



  const {data} = TableGetFunction("api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=pending",[])

  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Become an Partner </h1>
        </div>
        <div className={classes["card-body"]}>
          
          
          {/* <Grid container spacing={3}>
             {pending.length !==0 ? pending.map((user)=>(<AgentCard 
             key={user.id} user={user} num={num} setNum={setNum}  />)) 
             :<div
              className={classes["loading-container"]}
              ><CircularProgress size={100} thickness={1}/></div>}
          </Grid> */}
             {
            <Grid container spacing={5}>
              {
              
                data.length !==0 && data.map((master,index)=>(
                 <Grid item xs={6} key={index}>
                    <MemberCard partner={master} path={"/become-an-agent/detail/"} />
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

export default BecomeAnAgent;