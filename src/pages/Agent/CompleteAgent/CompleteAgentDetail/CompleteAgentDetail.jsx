import React, { useState } from "react";

import classes from "./CompleteAgentDetail.module.css";
import {  useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import { Button } from "@mui/material";
import Card from "../../../../components/UI/Card";
import CompleteAgentDesc from "./CompleteAgentDesc/CompleteAgentDesc";
import { getMethod } from "../../../../services/api-services";
import { logoutHandler } from "../../../../components/Sidebar/Sidebar";
import CustomGetFunction from "../../../../services/CustomGetFunction";
const CompleteAgentDetail = () => {
  const [age, setAge] = React.useState("");
  const [completeMaster,setCompleteMaster] = useState([]);
  const {id} = useParams();
  const navigate = useNavigate();
  // Enjoyment
  // console.log(id);
 const {data} = CustomGetFunction(`api/affiliate-register-lists/${id}`,[id]);
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Complete Agent Form Detail</h1>
        </div>
        <div className={classes["card-body"]}>
          <CompleteAgentDesc userInfo={data} /> 
        </div>
      </Card>
      <div className={classes["btn-container"]}>
        <Button variant="contained" onClick={()=>navigate("/account/agent/complete-agent/transition-table")} color="primary">Transition Table</Button>
      </div>
    </div>
  );
};

export default CompleteAgentDetail;