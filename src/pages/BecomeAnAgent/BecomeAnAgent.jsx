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
const BecomeAnAgent = () => {
  const [pending,setPending] = useState([]);
  const [num,setNum] = useState(0);
  const FetchpendingMaster = async()=>{
    const {data} = await axios.request(getMethod('/api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=pending'));
    setPending(data.data);
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
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <ToastContainer />
          </div>
          <Grid container spacing={3}>
             {pending.length !==0 ? pending.map((user)=>(<AgentCard 
             key={user.id} user={user} num={num} setNum={setNum} alertToast={alertToast} />)) 
      
             :<div
             style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",marginTop:30}} 
              ><CircularProgress size={100} thickness={1}/></div>}
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default BecomeAnAgent;