import { Grid } from '@mui/material'
import React from 'react'
import MemberCard from '../../../../../components/MemberCard/MemberCard'
import PageTitleCard from '../../../../../components/UI/PageTitleCard/PageTitleCard'
import classes from "./NewAgent.module.css"

const NewAgent = () => {
    const employeeData = [
        {name:" J-me"},
        {name:"Node Samurai"},
        {name:"Hacker Wa Tote"},
        {name:"Swal Sone Ya Ye Yint Ko "}
      ]
    
  return (
    <PageTitleCard title="New Agents">
     <div className='card-body'>
     {
            <Grid container spacing={5}>
              {
              
              employeeData?.length !==0 && employeeData?.map((agent,index)=>(
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