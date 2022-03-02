import React, { useState } from "react";

import classes from "./ConfirmAgentDetail.module.css";
import {  useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from "../../../../components/UI/Card";
import ConfirmAgentDesc from "./ConfirmAgentDesc/ConfirmAgentDesc";

const ConfirmAgentDetail = () => {
  const [age, setAge] = React.useState("");
  const [confirmMaster,setConfirmMaster] = useState([]);
  const {id} = useParams();
  const alertToast = (message) => toast(message);
  // Enjoyment
 

  const fetchMasterDetail = async()=>{
    const {data} = await axios.get(`https://lapi.xzonebet.com/api/affiliate-register-lists/${id}`);
    setConfirmMaster(data.data);
  }
  useEffect(()=>{
    fetchMasterDetail();
    return ()=>setConfirmMaster([]);
  },[id]);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className={classes["soccer-setting-container"]}>
      <ToastContainer />
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Confirm Agent Form Detail</h1>
        </div>
        <div className={classes["card-body"]}>
          <ConfirmAgentDesc userInfo={confirmMaster} alertToast={alertToast} />
        </div>
      </Card>
    </div>
  );
};

export default ConfirmAgentDetail;