import React, { useState } from "react";


import classes from "./CancelMasterDetail.module.css";
import {  useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Card from "../../../../components/UI/Card";
import SuperMasterDesc from "../../../SuperMaster/SuperMasterCard/SuperMasterDetail/SuperMasterDesc/SuperMasterDesc";
import { getMethod } from "../../../../services/api-services";
import { logoutHandler } from "../../../../components/Sidebar/Sidebar";
const CancelMasterDetail = () => {
  const [cancelMaster,setCancelMaster] = useState([]);
 
  
  // Enjoyment

  
  const {id} = useParams();
 
 

  const fetchMasterDetail = async()=>{
    try{
      const {data} = await axios.request(getMethod(`api/affiliate-register-lists/${id}`));
      setCancelMaster(data.data);

    }catch(error){
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
    }
  }
  useEffect(()=>{
    fetchMasterDetail();
    return ()=>setCancelMaster([]);
  },[id]);

  
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Cancel Master Form Detail</h1>
        </div>
        <div className={classes["card-body"]}>
          <SuperMasterDesc userInfo={cancelMaster} />
        </div>
      </Card>
    </div>
  );
};

export default CancelMasterDetail;
