import React, { useState } from "react";
import classes from "./CancelAgentDetail.module.css";
import {  useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Card from "../../../../components/UI/Card";
import SuperMasterDesc from "../../../SuperMaster/SuperMasterCard/SuperMasterDetail/SuperMasterDesc/SuperMasterDesc";
import { getMethod } from "../../../../services/api-services";
import { logoutHandler } from "../../../../components/Sidebar/Sidebar";
import CustomGetFunction from "../../../../services/CustomGetFunction";
const CancelAgentDetail = () => {
  const [age, setAge] = React.useState("");
  const [cancelMaster,setCancelMaster] = useState([]);
 
  


  
  const {id} = useParams();
  // console.log(id);
 
 
 const {data} = CustomGetFunction(`api/affiliate-register-lists/${id}`,[id]);
 
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Cancel Agent Form Detail</h1>
        </div>
        <div className={classes["card-body"]}>
          <SuperMasterDesc userInfo={data} />
        </div>
      </Card>
    </div>
  );
};

export default CancelAgentDetail;
