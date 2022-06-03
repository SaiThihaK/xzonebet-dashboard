import React, { useState } from "react";

import classes from "./CompleteAgentDetail.module.css";
import {  useNavigate, useParams } from "react-router-dom";


import { Button, Grid } from "@mui/material";
import Card from "../../../../components/UI/Card";
import CustomGetFunction from "../../../../services/CustomGetFunction";
import CompleteMasterDesc from "../../../Master/CompleteMaster/CompleteMasterDetail/CompleteMasterDesc/CompleteMasterDesc";
import AgentCard from "../../../../components/AgentCard/AgentCard";
import Nodata from "../../../../components/Nodata/Nodata";
const CompleteAgentDetail = () => {
  const [age, setAge] = React.useState("");
  const [completeMaster,setCompleteMaster] = useState([]);
  const {id} = useParams();
  const navigate = useNavigate();
  // Enjoyment
  // console.log(id);
 const {data} = CustomGetFunction(`api/agents/${id}`,[id]);
 console.log("agentDetail",data);
 
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Complete Agent Form Detail</h1>
        </div>
        <div className={classes["card-body"]}>
          {/* <CompleteAgentDesc userInfo={data} />  */}
          <CompleteMasterDesc userInfo={data} />
        </div>
      </Card>
      <>
      {
        data?.downlines?.length !==0 ? (
          <div className={classes["list"]}>
            <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Users </h1>
        </div>
            <Grid container spacing={1}>
              {
                data?.downlines?.map((agent,index)=>(
                  <Grid item xs={6} key={index}>
                  <AgentCard data={agent} route={`/dashboard/account/user/user-detail/${agent.user_id}`}/>
                  </Grid>
                ))
              }
            </Grid>
          </div>
        ):(<Nodata/>)
      }
</>
      <div className={classes["btn-container"]}>
        <Button variant="contained" onClick={()=>navigate("/dashboard/account/agent/complete-agent/transition-table")} color="primary">Transition History</Button>
      </div>
    </div>
  );
};

export default CompleteAgentDetail;