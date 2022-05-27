import { Grid } from '@mui/material'
import React from 'react'
import AgentCard from '../../../../../components/AgentCard/AgentCard'
import MemberCard from '../../../../../components/MemberCard/MemberCard'
import PageTitleCard from '../../../../../components/UI/PageTitleCard/PageTitleCard'
import CustomGetFunction from '../../../../../services/CustomGetFunction'
import classes from "./NewAgent.module.css"
import CustomLoading from "../../../../../components/CustomLoading/CustomLoading"
import Nodata from '../../../../../components/Nodata/Nodata'
const NewAgent = () => {
  const {data,loading} = CustomGetFunction("api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&form_type=agent&status=pending",[]);
  console.log("pending Agent",data)
    
  return (
    <PageTitleCard title="New Agents">
      {
        loading ?( <div className={classes["card-body"]}>
          {/* {
            data.length !==0 ? (<Grid container>
              {
              
              data?.length !==0 && data?.map((agent,index)=>(
                 <Grid item xs={4} key={index}>
                   <AgentCard data={agent} route="/dashboard/new-agent/detail/3"/>
                   </Grid>
                 
                ))
              }
            </Grid>):(<Nodata />)
          } */}
          {
            data.length !==0 ?(    <Grid container spacing={5}>
              {
                data.length  !==0 && data.map((master,index)=>(
                  <Grid item xs={6} key={index}>
                    <MemberCard partner={master} path={"/dashboard/account/agent/confirm-agent/detail/"} />
                  </Grid>
    ))
              }
            </Grid>):(<Nodata />)
          }
              
        </div>):(<CustomLoading />)
      }
    
    </PageTitleCard>
  )
}

export default NewAgent