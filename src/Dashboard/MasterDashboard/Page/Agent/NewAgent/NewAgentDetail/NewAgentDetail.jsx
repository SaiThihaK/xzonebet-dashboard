import React, { useState } from 'react'
import EnjoymentForm from '../../../../../../components/UI/EnjoymentForm/EnjoymentForm'
import PageTitleCard from '../../../../../../components/UI/PageTitleCard/PageTitleCard'
import PendingAgentDesc from '../../../../../../pages/Agent/PendingAgent/PendingAgentDetail/PendingAgentDesc/PendingAgentDesc'
import classes from "./NewAgentDetail.module.css"
import CustomGetFunction from '../../../../../../services/CustomGetFunction'
import Card from '../../../../../../components/UI/Card'
import { Button, Grid } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { PostMethod } from '../../../../../../services/api-services'
import { toast } from 'react-toastify'
import axios from 'axios'
import MasterDepositCancel from '../../../../../../components/UI/Modal/MasterDepositCancel/MasterDepositCancel'

const NewAgentDetail = () => {
const [name,setName] = useState("");
const [password,setPassword] = useState("");
const [deposit,setDeposit] = useState("");
const [withDraw,setWithDraw] = useState("");
const [masterId,setMasterId] = useState("");
const [open,setOpen] = useState(false);
const [num,setNum] = useState(1);
const handleOpen = ()=>setOpen(true);
const handleClose = ()=>setOpen(false);
const {id} = useParams();
const navigate = useNavigate();
  const {data} = CustomGetFunction(`api/agents/${id}`,[id]);
  const AlertToast = msg=>msg;
  const submitHandler = async()=>{
    console.log("username",name);
    console.log("masterId",masterId);
    console.log("password",password);
    console.log("deposit",deposit);
    console.log("withDraw",withDraw)
    try{
 const response = await axios.request(PostMethod(`api/affiliate-register-lists/confirm-as-agent/${id}`,{
   username:name,
  //  master id:masterId,
   password:password,
   deposit_percent:deposit,
   withdraw_percent:withDraw,
 }));

 if(response.data.status==="success"){
   AlertToast(toast.success(response.data.message))
   setName("");
   setMasterId("");
   setPassword("");
   setDeposit("");
   setWithDraw("");
   navigate("/master/agent/new-agent")
   return;
 }
 if(response.data.status==="error"){
   AlertToast(toast.error(response.data.message))
   return;
 }
    }catch(error){
    AlertToast(toast.error(error.response.data.message))
    }
  } 

 
  return (
   <PageTitleCard title="New Agent Form">
     <Grid container spacing={1} style={{padding:30}}>
    <Grid item xs={6}><PendingAgentDesc userInfo={data} masterId={masterId} setMasterId={setMasterId} /></Grid>
    <Grid item xs={6}><EnjoymentForm
    name={name}
    setName={setName}
    password={password}
    setPassword={setPassword}
    deposit = {deposit}
    setDeposit = {setDeposit}
    withDraw= {withDraw}
    setWithDraw = {setWithDraw}
    
    /></Grid>
     </Grid>
     <div className={classes["btn-container"]}>
      <Button variant="contained" className={classes["btn"]} onClick={submitHandler}>Submit</Button>
      <Button  variant="contained" className={classes["btn"]} color="error"
      onClick={handleOpen}
      >Reject</Button>
     </div>
     <MasterDepositCancel open={open} handleClose={handleClose} setNum={setNum} id={id} num={num} route="/dashboard/master/agent/new-agent"  />
   </PageTitleCard>
  )
}

export default NewAgentDetail