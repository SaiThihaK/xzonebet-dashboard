import React, { useState } from "react";
import Card from "../../../../../components/UI/Card";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SuperMasterDesc from "../../../../SuperMaster/SuperMasterCard/SuperMasterDetail/SuperMasterDesc/SuperMasterDesc";
import classes from "./PandingMasterDetail.module.css";
import {  useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const PandingMasterDetail = () => {
  const [age, setAge] = React.useState("");
  const [pendingMaster,setPendingMaster] = useState([]);
  const [real_name,setReal_Name] = useState("");
  const [payment_type,setPayment_Type] = useState("");
  const [payment_name,setPayment_Name] = useState("");
  const [transition_id,setTransition_id] = useState("");
  const [amount,setAmount] = useState("");
  const  [currency,setCurrency] = useState("");
  
  // Enjoyment
  const [username,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [deposit_percent,setDeposite_percent] = useState("");
  const [withdraw_percent,setWidthDraw_percent] = useState("");
  
  const {id} = useParams();
  console.log({
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
  });
  const submitHandler = async(e)=>{
    e.preventDefault();
    if(!real_name ||!payment_name||!payment_type||!transition_id||!amount||!currency||!username||!password||!deposit_percent ||!withdraw_percent){
      return
    }
    else{
      try{
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const url = `https://lapi.xzonebet.com/api/affiliate-register-lists/deposit-pending/${id}`;
        const response = axios.post(
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
        );
        console.log(response);
        return;
      }catch(error){
        console.log(error);
        return;
      }
   
    }
  }

  const fetchMasterDetail = async()=>{
    const {data} = await axios.get(`https://lapi.xzonebet.com/api/affiliate-register-lists/${id}`);
    setPendingMaster(data.data);
  }
  useEffect(()=>{
    fetchMasterDetail();
    return ()=>setPendingMaster([]);
  },[id]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Pending Master Form Detail</h1>
        </div>
        <div className={classes["card-body"]}>
          <SuperMasterDesc userInfo={pendingMaster} />
        </div>
      </Card>
      <div style={{marginTop: '20px'}}>
          <form>
          <div className={classes["card-column"]}>
        <Card>
          <div className={classes["card-header"]}>
            <h1 className={classes["card-title"]}>Initial Deposite Detail</h1>
          </div>
          <div className={classes["card-body"]}>
            <div>
              <div>
                <form action="" style={{ width: "400px" }}>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">Name </label>:
                    <p>
                      &nbsp;&nbsp;
                      {/* <input type="text" /> */}
                      <TextField
                        id="standard-basic"
                        label="Name"
                        onChange={(e)=>setReal_Name(e.target.value)}
                        sx={{ width: 200 }}
                        variant="standard"
                      />
                    </p>
                  </div>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">Payment Type </label>:
                    <p>
                      &nbsp;&nbsp;
                      <FormControl variant="standard" sx={{ minWidth: 200 }}>
                        <TextField 
                        label="Crypto Currency" 
                        onChange={(e)=>setPayment_Type(e.target.value)}
                        sx={{ width: 200 }}  
                         variant="standard" />
                      </FormControl>
                    </p>
                  </div>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">Payment  Name </label>:
                    <p>
                      &nbsp;&nbsp;
                      <TextField
                        id="standard-basic"
                        label="Payment Name"
                        onChange={(e)=>setPayment_Name(e.target.value)}
                        sx={{width:200}}
                        variant="standard"
                      />
                    </p>
                  </div>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">Transition ID</label>:
                    <p>
                      &nbsp;&nbsp;
                      <TextField
                        id="standard-basic"
                        onChange={(e)=>setTransition_id(e.target.value)}
                        label="Transition"
                        sx={{ width: 200 }}
                        variant="standard"
                      />
                    </p>
                  </div>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">Amount </label>:
                    <p>
                      &nbsp;&nbsp;
                      <TextField
                        id="standard-basic"
                        onChange={(e)=>setAmount(e.target.value)}
                        label="Amount"
                        sx={{ width: 200 }}
                        variant="standard"
                      />
                    </p>
                  </div>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">Currency </label>:
                    <p>
                      &nbsp;&nbsp;
                      <FormControl variant="standard" sx={{ minWidth: 200 }}>
                      <TextField
                        id="standard-basic"
                        onChange={(e)=>setCurrency(e.target.value)}
                        label="Currency"
                        sx={{ width: 200 }}
                        variant="standard"
                      />
                      </FormControl>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Card>
        {/* Enjoyment detail form */}
        <Card>
          <div className={classes["card-header"]}>
            <h1 className={classes["card-title"]}>Enjoyment</h1>
          </div>
          <div className={classes["card-body"]}>
            <div>
              <div>
                <form action="" style={{ width: "400px" }}>
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
                      />
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Card>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:20}}>
        <Button type="submit" onClick={(e)=>{submitHandler(e)}} variant="contained">Submit</Button>
      </div>
      </div>
        </form>
      </div>
    </div>
  );
};

export default PandingMasterDetail;
