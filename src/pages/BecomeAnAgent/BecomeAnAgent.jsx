import React, { useEffect, useState } from "react";
import Card from "../../components/UI/Card";
import Grid from "@mui/material/Grid";
import AgentCard from "./AgentCard/AgentCard";
import classes from "./BecomeAnAgent.module.css";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMethod } from "../../services/api-services";
import { logoutHandler } from "../../components/Sidebar/Sidebar";
const BecomeAnAgent = () => {
  const [pending,setPending] = useState([]);
  const [num,setNum] = useState(0);
  const FetchpendingMaster = async()=>{
    try{
      const {data} = await axios.request(getMethod('api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=pending'));
      setPending(data.data);

    }catch(error){
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
    }
  }
 const alertToast = (message) =>toast(message);
  useEffect(()=>{
    FetchpendingMaster();
    return ()=>setPending([]);
  },[num])
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Become Agent List</h1>
        </div>
        <div className={classes["card-body"]}>
          
          <ToastContainer />
          <Grid container spacing={3}>
             {pending.length !==0 ? pending.map((user)=>(<AgentCard 
             key={user.id} user={user} num={num} setNum={setNum} alertToast={alertToast} />)) 
             :<div
              className={classes["loading-container"]}
              ><CircularProgress size={100} thickness={1}/></div>}
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default BecomeAnAgent;