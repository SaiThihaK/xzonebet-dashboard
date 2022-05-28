import React from "react";
import Card from '../../../components/UI/Card';
import Grid from "@mui/material/Grid";
import classes from './CompleteAgent.module.css';
import { useState, useEffect   } from "react";
import axios from "axios";
import MasterCard from "../../../components/MasterCard/MasterCard";
import { getMethod } from "../../../services/api-services";
import { logoutHandler } from "../../../components/Sidebar/Sidebar";
import MemberCard from "../../../components/MemberCard/MemberCard";
import CustomGetFunction from "../../../services/CustomGetFunction";
import CustomLoading from "../../../components/CustomLoading/CustomLoading";
import AgentCard from "../../../components/AgentCard/AgentCard";
import Nodata from "../../../components/Nodata/Nodata";
const CompleteAgent = () => {

  const {data:agents,loading} = CustomGetFunction('api/agents?sortColumn=id&sortDirection=desc&limit=30&agent_level=agent',[]);
  console.log('agnets',agents)
  const data =[
    {
    id:1004,
    name:"Zaw Zaw",
    email:"zawzaw@email.com"
    },
    {
      id:1006,
      name:"Yike",
      email:"yike@email.com"
    }
];
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Complete Agents</h1>
        </div>
        {
          loading ? ( <div className={classes["card-body"]}>
          {/* <Grid container spacing={3}>
           {completeMasters.length !==0 && completeMasters.map((completeMaster)=>
           (<MasterCard key={completeMaster?.id} user={completeMaster} path="/account/agent/complete-agent/detail/" />)
           )}
          </Grid> */}
          {/* <Grid container spacing={5}>
            {
              data.length  !==0 && data.map((master,index)=>(
                <Grid item xs={6} key={index}>
                  <MemberCard partner={master} path={`/dashboard/account/agent/complete-agent/detail/${master.id}`} />
                </Grid>
  ))
            }
          </Grid> */}
        {
          agents.length !==0 ? (<Grid container spacing={4}>
            {
            agents?.length !==0 && agents?.map((agent,index)=>(
               <Grid item xs={6} key={index}>
                 <AgentCard data={agent} route={`/dashboard/account/agent/complete-agent/detail/${agent.id}`}/>
                 </Grid>
              ))
            }
          </Grid>):(<Nodata />)
        }


        </div>):(<CustomLoading />)
        }
       
      </Card>
    </div>
  );
};

export default CompleteAgent;