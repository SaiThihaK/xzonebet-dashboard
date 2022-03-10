import React, { useState } from "react";

import classes from "./ConfirmMasterDetail.module.css";
import {  useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import ComfirmMasterDesc from "./ComfirmMasterDesc/ConfirmMasterDesc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from "../../../../components/UI/Card";
import { getMethod } from "../../../../services/api-services";

const ConfirmMasterDetail = () => {
  const [age, setAge] = React.useState("");
  const [confirmMaster,setConfirmMaster] = useState([]);
  const {id} = useParams();
  const alertToast = (message) => toast(message);
  // Enjoyment
 

  const fetchMasterDetail = async()=>{
    const {data} = await axios.request(getMethod(`/api/affiliate-register-lists/${id}`));
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
          <h1 className={classes["card-title"]}>Confirm Master Form Detail</h1>
        </div>
        <div className={classes["card-body"]}>
          <ComfirmMasterDesc userInfo={confirmMaster} alertToast={alertToast} />
        </div>
      </Card>
    </div>
  );
};

export default ConfirmMasterDetail;