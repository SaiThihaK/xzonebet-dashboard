import React, { useState } from "react";
import classes from "./CompleteMasterDetail.module.css";
import {  useNavigate, useParams } from "react-router-dom";
import CompleteMasterDesc from "./CompleteMasterDesc/CompleteMasterDesc";
import { Button } from "@mui/material";
import Card from "../../../../components/UI/Card";
import {AccountDetail} from "../../../../services/api-collection"
import CustomGetFunction from "../../../../services/CustomGetFunction";
const CompleteMasterDetail = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  // Enjoyment

  const {data} = CustomGetFunction(AccountDetail+id,[id])
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Complete Master Form Detail </h1>
        </div>
        <div className={classes["card-body"]}>
          <CompleteMasterDesc userInfo={data} />
        </div>
      </Card>
      <div className={classes["btn-container"]}>
        <Button variant="contained" onClick={()=>navigate("/dashboard/account/master/complete-master/agent-table")} color="primary">Agent Table</Button>
        {/* <Button variant="contained" onClick={()=>navigate("/dashboard/account/master/complete-master/transition-table")} color="primary">Transition Table</Button> */}
      </div>
    </div>
  );
};

export default CompleteMasterDetail;