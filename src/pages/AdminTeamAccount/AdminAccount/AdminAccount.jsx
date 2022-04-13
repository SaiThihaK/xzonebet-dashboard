import { Grid } from '@mui/material'
import React from 'react'
import MemberCard from '../../../components/MemberCard/MemberCard'
import Card from '../../../components/UI/Card'
import PageTitleCard from '../../../components/UI/PageTitleCard/PageTitleCard'
import classes from "./AdminAccount.module.css"


const AdminAccount = () => {
    const fakeArr = [...Array(10)];
  return (
    <PageTitleCard title="Admin Team Accounts">
        <div className={classes["member-container"]}>
        <Grid container spacing={3}>
     {
         fakeArr
         .map((member,index)=>(
            <Grid item xs={4} key={index}>
             <MemberCard />
            </Grid>
         ))
     }
     </Grid>
        </div>
  
    </PageTitleCard>
  )
}

export default AdminAccount