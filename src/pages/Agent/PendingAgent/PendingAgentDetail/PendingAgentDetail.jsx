import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import classes from "./PendingAgentDetail.module.css";
import {  useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InputLabel, MenuItem, Select } from "@mui/material";
import SuperMasterDesc from "../../../SuperMaster/SuperMasterCard/SuperMasterDetail/SuperMasterDesc/SuperMasterDesc";
import Card from "../../../../components/UI/Card";
import PendingAgentDesc from "./PendingAgentDesc/PendingAgentDesc";
import { getMethod, PostMethod } from "../../../../services/api-services";
const PendingAgentDetail = () => {
  const [age,setAge] = useState();
  const [pendingMaster,setPendingMaster] = useState([]);
  const [real_name,setReal_Name] = useState("");
  const [payment_type,setPayment_Type] = useState("");
  const [payment_name,setPayment_Name] = useState("");
  const [transition_id,setTransition_id] = useState("");
  const [amount,setAmount] = useState("");
  const  [currency,setCurrency] = useState("");
  const alertToast = (message) =>toast(message);
  // Enjoyment
  const [username,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [deposit_percent,setDeposite_percent] = useState("");
  const [withdraw_percent,setWidthDraw_percent] = useState("");
  // Crypto
  const [coin,setCoin] = useState([]);
 
  
  const {id} = useParams();
  const submitHandler = async(e)=>{
    e.preventDefault();
    if(!real_name ||!payment_name||!payment_type||!transition_id||!amount||!currency||!username||!password||!deposit_percent ||!withdraw_percent){
      alertToast("Please Fill All the Field")
      return;
    }
    else{
      try{
        
        const url = `/api/affiliate-register-lists/deposit-pending/${id}`;
        const response = await axios.request(PostMethod(
          url,
          {
            real_name,
            payment_name,
            payment_type,
            transition_id,
            amount,
            currency,
            username,
            password,
            deposit_percent,
            withdraw_percent
          },
        ));
        // console.log(response.data.status);
        if(response.data.status === "success"){
          alertToast(response.data.message);
          return;
        }
        return;
      }catch(error){
        console.log(error);
        return;
      }
   
    }
  }

  const fetchMasterDetail = async()=>{
    const {data} = await axios.request(getMethod(`/api/affiliate-register-lists/${id}`));
    setPendingMaster(data.data);
  }
  useEffect(()=>{
    fetchMasterDetail();
    // fetchCrypto();
    return ()=>setPendingMaster([]);
  },[id]);
   
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // const fetchCrypto = async()=>{
  //   const {data} = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false");
  //   setCoin(data);
  // }
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Pending Agent Form Detail</h1>
        </div>
        <div className={classes["card-body"]}>
          <PendingAgentDesc userInfo={pendingMaster} />
        </div>
      </Card>
      <div style={{marginTop: '20px'}}>
          <form>
          <ToastContainer />
          <div className={classes["card-column"]}>
        
        {/* Enjoyment detail form */}
        
        <div style={{display:"flex",justifyContent:"flex-end",marginTop:20}}>
        <Button type="submit" onClick={(e)=>{submitHandler(e)}} variant="contained">Submit</Button>
      </div>
      </div>
        </form>
      </div>
    </div>
  );
};

export default PendingAgentDetail;
