import React, { useState } from "react";

import Button from "@mui/material/Button";
import classes from "./PendingAgentDetail.module.css";
import {  useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from "../../../../components/UI/Card";
import PendingAgentDesc from "./PendingAgentDesc/PendingAgentDesc";
import { getMethod, PostMethod } from "../../../../services/api-services";
import { logoutHandler } from "../../../../components/Sidebar/Sidebar";
import PageTitleCard from "../../../../components/UI/PageTitleCard/PageTitleCard";
import { MenuItem, Select, TextField } from "@mui/material";
import CustomGetFunction from "../../../../services/CustomGetFunction";
const PendingAgentDetail = () => {
  const [age,setAge] = useState();
  const [pendingMaster,setPendingMaster] = useState([]);
  const [real_name,setReal_Name] = useState("");
  const [payment_type,setPayment_Type] = useState("");
  const [payment_name,setPayment_Name] = useState("");
  const [transition_id,setTransition_id] = useState("");
  const [amount,setAmount] = useState("");
  const  [currency,setCurrency] = useState("");
  const alertToast = (message) =>message;
  // Enjoyment
  const [username,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [deposit_percent,setDeposite_percent] = useState("");
  const [withdraw_percent,setWidthDraw_percent] = useState("");
  const [superMaster,setSuperMaster] =  useState("");
  // Crypto

  const supMaster = [{id:"1",name:"J-me"},{id:"2",name:"Mr.Harry Potter"},{id:"3",name:"Mr.Willson"}];
  // console.log(pendingMaster)
  const {id} = useParams();
  const submitHandler = async(e)=>{
    e.preventDefault();
    // if(!real_name ||!payment_name||!payment_type||!transition_id||!amount||!currency||!username||!password||!deposit_percent ||!withdraw_percent){
    //   alertToast(toast.warning("Please Fill All the Field"));
    //   return;
    // }
    // else{
      try{
        
        const url = `api/affiliate-register-lists/deposit-pending/${id}`;
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
          alertToast(toast.success(response.data.message));
          return;
        }
        if(response.data.status === "error"){
          alertToast(toast.error(response.data.message))
        }
      }catch(error){
        if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
        logoutHandler();
        }
      }
   
    // }
  }
  const {data} = CustomGetFunction(`api/affiliate-register-lists/${id}`,[id]);
 
 
  
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Pending Agent Form Detail</h1>
        </div>
        <div className={classes["card-body"]}>
          <PendingAgentDesc data={data} />
        </div>
      </Card>
          <form>
          <Card>
          <div className={classes["card-header"]}>
            <h1 className={classes["card-title"]}>Enjoyment</h1>
          </div>
          <div className={classes["card-body"]}>
            <div>
              <div>
                <form action="" style={{ width: "500px" }}>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">User Name </label>:
                    <p>
                      &nbsp;&nbsp;
                      {/* <input type="text" /> */}
                      <TextField
                        id="standard-basic"
                        label="User Name"
                        onChange={(e)=>setUserName(e.target.value)}
                        sx={{ width: 200 }}
                        variant="standard"
                        value={username}
                      />
                    </p>
                  </div>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">Password </label>:
                    <p>
                      &nbsp;&nbsp;
                  
                        <TextField
                        onChange={(e)=>setPassword(e.target.value)}
                        label="Password" 
                        sx={{ width: 200 }}
                        value={password}  
                         variant="standard" />
                     
                    </p>
                  </div>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">Deposite percentage </label>:
                    <p>
                      &nbsp;&nbsp;
                      <TextField
                        id="standard-basic"
                        onChange={(e)=>setDeposite_percent(e.target.value)}
                        label="Deposite Percentage"
                        sx={{width:200}}
                        variant="standard"
                        value={deposit_percent}
                      />
                    </p>
                  </div>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">Withdraw Percentage</label>:
                    <p>
                      &nbsp;&nbsp;
                      <TextField
                        id="standard-basic"
                        onChange={(e)=>setWidthDraw_percent(e.target.value)}
                        label="Withdraw Percentage"
                        sx={{ width: 200 }}
                        variant="standard"
                        value={withdraw_percent}
                      />
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Card>
       
          <div className={classes["card-column"]}>
        <div className={classes["btn-container"]}>
        <Button type="submit" onClick={(e)=>{submitHandler(e)}} variant="contained">Submit</Button>
      </div>
      </div>
        </form>
    </div>
  );
};

export default PendingAgentDetail;
