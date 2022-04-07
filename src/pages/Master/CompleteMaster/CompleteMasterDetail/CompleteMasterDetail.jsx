import React, { useState } from "react";

import classes from "./CompleteMasterDetail.module.css";
import {  useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import CompleteMasterDesc from "./CompleteMasterDesc/CompleteMasterDesc";
import { Button } from "@mui/material";
import Card from "../../../../components/UI/Card";
import { getMethod } from "../../../../services/api-services";
import { logoutHandler } from "../../../../components/Sidebar/Sidebar";
import CustomGetFunction from "../../../../services/CustomGetFunction";
const CompleteMasterDetail = () => {
  const [age, setAge] = React.useState("");
  const [completeMaster,setCompleteMaster] = useState([]);
  const {id} = useParams();
  const navigate = useNavigate();
  // Enjoyment

  const {data} = CustomGetFunction(`api/affiliate-register-lists/${id}`)
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Complete Master Form Detail</h1>
        </div>
        <div className={classes["card-body"]}>
          <CompleteMasterDesc userInfo={data} />
        </div>
      </Card>
      <div className={classes["btn-container"]}>
        <Button variant="contained" onClick={()=>navigate("/account/master/complete-master/agent-table")} color="primary">Agent Table</Button>
        <Button variant="contained" onClick={()=>navigate("/account/master/complete-master/transition-table")} color="primary">Transition Table</Button>
      </div>
    </div>
  );
};

export default CompleteMasterDetail;