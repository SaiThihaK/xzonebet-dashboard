import React, { useState } from 'react'
import EnjoymentForm from '../../../../../../components/UI/EnjoymentForm/EnjoymentForm'
import PageTitleCard from '../../../../../../components/UI/PageTitleCard/PageTitleCard'
import PendingAgentDesc from '../../../../../../pages/Agent/PendingAgent/PendingAgentDetail/PendingAgentDesc/PendingAgentDesc'
import classes from "./NewAgentDetail.module.css"
import CustomGetFunction from '../../../../../../services/CustomGetFunction'
import Card from '../../../../../../components/UI/Card'
import { Button, Grid } from '@mui/material'
import { useParams } from 'react-router-dom'

const NewAgentDetail = () => {
const [name,setName] = useState("");
const [password,setPassword] = useState("");
const [deposit,setDeposit] = useState("");
const [withDraw,setWithDraw] = useState("")
const {id} = useParams();
  const {data} = CustomGetFunction(`api/agents/${id}`,[id]);
  
  const submitHandler = ()=>{
    
  } 
  return (
   <PageTitleCard title="New Agent Form">
     <Grid container spacing={1} style={{padding:30}}>
    <Grid item xs={6}><PendingAgentDesc userInfo={data} /></Grid>
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
      <Button variant="contained" onClick={submitHandler}>Submit</Button>
     </div>
   </PageTitleCard>
  )
}

export default NewAgentDetail