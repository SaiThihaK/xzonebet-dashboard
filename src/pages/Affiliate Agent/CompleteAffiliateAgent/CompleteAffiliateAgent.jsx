import { Grid } from '@mui/material';
import React from 'react'
import MemberCard from '../../../components/MemberCard/MemberCard';
import PageTitleCard from '../../../components/UI/PageTitleCard/PageTitleCard'
import CustomGetFunction from '../../../services/CustomGetFunction'
import classes from "./CompleteAffiliateAgent.module.css"
const CompleteAffiliateAgent = () => {
 const {data} = CustomGetFunction(`api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=complete&form_type=affiliate-agent`,[]);
  return (
    <PageTitleCard title="Complete Affiliate Agents">
 <div className={classes["card-body"]}>
          {/* <Grid container spacing={3}>
           {data.length !==0 && data.map((pendingMaster)=>
           (<MasterCard key={pendingMaster?.id} user={pendingMaster} path={"/account/affiliate-agent/pending-affiliate-agent/detail/"} />)
           )}
          </Grid> */}
           {
            <Grid container spacing={5}>
              {
              
                data.length !==0 && data.map((master,index)=>(
                 <Grid item xs={6} key={index}>
                    <MemberCard partner={master} path={"/dashboard/account/affiliate-agent/pending-affiliate-agent/detail/"} />
                   </Grid>
                 
                ))
              }
            </Grid>
          }
        </div>
    </PageTitleCard>
  )
}

export default CompleteAffiliateAgent