import React, { useState } from "react";


import classes from "./CancelMasterDetail.module.css";
import {  useParams } from "react-router-dom";
import { useEffect } from "react";
import Card from "../../../../components/UI/Card";
import SuperMasterDesc from "../../../SuperMaster/SuperMasterCard/SuperMasterDetail/SuperMasterDesc/SuperMasterDesc";
import { getMethod } from "../../../../services/api-services";
import { logoutHandler } from "../../../../components/Sidebar/Sidebar";
import { AccountDetail } from "../../../../services/api-collection";
import CustomGetFunction from "../../../../services/CustomGetFunction";
const CancelMasterDetail = () => {
  const [cancelMaster,setCancelMaster] = useState([]);
 
  
  // Enjoyment

  
  const {id} = useParams();
  const {data} = CustomGetFunction(AccountDetail+id,[id]);
   
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Cancel Master Form Detail</h1>
        </div>
        <div className={classes["card-body"]}>
          <SuperMasterDesc userInfo={data} />
        </div>
      </Card>
    </div>
  );
};

export default CancelMasterDetail;
