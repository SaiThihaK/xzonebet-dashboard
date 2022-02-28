import React, { useState } from "react";
import Card from "../../../../../components/UI/Card";
import SuperMasterDesc from "../../../../SuperMaster/SuperMasterCard/SuperMasterDetail/SuperMasterDesc/SuperMasterDesc";
import classes from "./CompleteMasterDetail.module.css";
import {  useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const CompleteMasterDetail = () => {
  const [age, setAge] = React.useState("");
  const [completeMaster,setCompleteMaster] = useState([]);
  const {id} = useParams();
  // Enjoyment
 

  const fetchMasterDetail = async()=>{
    const {data} = await axios.get(`https://lapi.xzonebet.com/api/affiliate-register-lists/${id}`);
    setCompleteMaster(data.data);
  }
  useEffect(()=>{
    fetchMasterDetail();
    return ()=>setCompleteMaster([]);
  },[id]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Complete Master Form Detail</h1>
        </div>
        <div className={classes["card-body"]}>
          <SuperMasterDesc userInfo={completeMaster} />
        </div>
      </Card>
    </div>
  );
};

export default CompleteMasterDetail;