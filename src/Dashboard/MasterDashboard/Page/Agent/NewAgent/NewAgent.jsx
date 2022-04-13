import { Grid } from '@mui/material'
import React from 'react'
import MemberCard from '../../../../../components/MemberCard/MemberCard'
import PageTitleCard from '../../../../../components/UI/PageTitleCard/PageTitleCard'
import CustomGetFunction from '../../../../../services/CustomGetFunction'
import classes from "./NewAgent.module.css"

const NewAgent = () => {
  const {data} = CustomGetFunction("api/agents?sortColumn=id&sortDirection=desc&limit=30&agent_level=agent",[]);
    
    
  return (
    <PageTitleCard title="New Agents">
     <div className={classes["card-body"]}>
     {
            <Grid container spacing={5}>
              {
              
              data?.length !==0 && data?.map((agent,index)=>(
                 <Grid item xs={6} key={index}>
                    <MemberCard partner={agent} path={"/new-agent/detail/"} />
                   </Grid>
                 
                ))
              }
            </Grid>
          }
     </div>
    </PageTitleCard>
  )
}

export default NewAgent