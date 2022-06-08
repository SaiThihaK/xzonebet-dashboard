import React, { useState } from "react";
import classes from "./CompleteMasterDetail.module.css";
import {  useNavigate, useParams } from "react-router-dom";
import CompleteMasterDesc from "./CompleteMasterDesc/CompleteMasterDesc";
import {Grid} from "@mui/material"
import Card from "../../../../components/UI/Card";
import CustomGetFunction from "../../../../services/CustomGetFunction";
import PageTitleCard from "../../../../components/UI/PageTitleCard/PageTitleCard"
import AgentCard from "../../../../components/AgentCard/AgentCard"
import Nodata from "../../../../components/Nodata/Nodata"
const CompleteMasterDetail = () => {
  const {id} = useParams();
  // Enjoyment
  const [render,setRender] = useState(false);
  const {data} = CustomGetFunction(`api/agents/${id}`,[id,render]);
  console.log(data);
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Complete Master Form Detail </h1>
        </div>
        <div className={classes["card-body"]}>
          <CompleteMasterDesc userInfo={data} setRender={setRender} render={render} />
        </div>
      </Card>
      <>
      {
        data?.downlines?.length !==0 ? (
          <div className={classes["list"]}>
            <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Agents </h1>
        </div>
            <Grid container spacing={1}>
              {
                data?.downlines?.map((agent,index)=>(
                  <Grid item xs={6} key={index}>
                  <AgentCard data={agent} route={`/dashboard/account/agent/complete-agent/detail/${agent.id}`}/>
                  </Grid>
                ))
              }
            </Grid>
          </div>
        ):(<Nodata />)
      }
</>
      {/* <div className={classes["btn-container"]}>
        <Button variant="contained" onClick={()=>navigate("/dashboard/account/master/complete-master/agent-table")} color="primary">Agent Table</Button>
        <Button variant="contained" onClick={()=>navigate("/dashboard/account/master/complete-master/transition-table")} color="primary">Transition Table</Button>
      </div> */}
    </div>
  );
};

export default CompleteMasterDetail;