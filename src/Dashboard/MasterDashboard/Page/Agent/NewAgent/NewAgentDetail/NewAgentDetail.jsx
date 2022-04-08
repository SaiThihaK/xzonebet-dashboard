import React from 'react'
import EnjoymentForm from '../../../../../../components/UI/EnjoymentForm/EnjoymentForm'
import PageTitleCard from '../../../../../../components/UI/PageTitleCard/PageTitleCard'
import PendingAgentDesc from '../../../../../../pages/Agent/PendingAgent/PendingAgentDetail/PendingAgentDesc/PendingAgentDesc'
import classes from "./NewAgentDetail.module.css"
import CustomGetFunction from '../../../../../../services/CustomGetFunction'
import Card from '../../../../../../components/UI/Card'
import { Grid } from '@mui/material'

const NewAgentDetail = () => {
  let id = 1004;
  const {data} = CustomGetFunction(`api/affiliate-register-lists/${id}`,[id]);
  return (
   <PageTitleCard title="New Agent Form">
     <Grid container spacing={1} style={{padding:30}}>
    <Grid item xs={6}><PendingAgentDesc userInfo={data} /></Grid>
    <Grid item xs={6}><EnjoymentForm /></Grid>
     </Grid>
   </PageTitleCard>
  )
}

export default NewAgentDetail