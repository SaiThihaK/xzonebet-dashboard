import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import classes from "./PandingMasterDetail.module.css";
import {  useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InputLabel, MenuItem, Select } from "@mui/material";
import SuperMasterDesc from "../../../SuperMaster/SuperMasterCard/SuperMasterDetail/SuperMasterDesc/SuperMasterDesc";
import Card from "../../../../components/UI/Card";
import { getMethod, PostMethod } from "../../../../services/api-services";
import { logoutHandler } from "../../../../components/Sidebar/Sidebar";
import CustomGetFunction from "../../../../services/CustomGetFunction";
const PandingMasterDetail = () => {
  const [age,setAge] = useState();

  const [real_name,setReal_Name] = useState("");
  const [payment_name,setPayment_Name] = useState("");
  const [transition_id,setTransition_id] = useState("");
  const [amount,setAmount] = useState("");
  const  [currency,setCurrency] = useState("");
  const alertToast = (toast,message) =>toast(message);
  // Enjoyment
  const [superMaster,setSuperMaster] = useState("");
  const [username,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [deposit_percent,setDeposite_percent] = useState("");
  const [withdraw_percent,setWidthDraw_percent] = useState("");
  // Crypto
 const navigate = useNavigate();
  
  const {id} = useParams();
  const submitHandler = async(e)=>{
    e.preventDefault();
    if(!real_name ||!payment_name||!transition_id||!amount||!currency||!username||!password||!deposit_percent ||!withdraw_percent){
      alertToast(toast.warning,"Please Fill All the Field")
      return;
    }
    else{
      try{
        const url = `api/affiliate-register-lists/deposit-pending/${id}`;
        const response = await axios.request(PostMethod(
          url,
          {
            real_name,
            payment_name,
            payment_type:"crypto",
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
          setReal_Name("");
          setPayment_Name("");
          setTransition_id("");
          setAmount("");
          setSuperMaster("");
          setUserName("");
          setPassword("");
          setDeposite_percent("");
          setWidthDraw_percent("");
          navigate("/account/master/panding-master")
          alertToast(toast.success(response.data.message));
          return;
        }
        if(response.data.status === "error"){
          alertToast(toast.error(response.data.message));
          return;
        }
        return;
      }catch(error){
        if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
        logoutHandler();
        return;
        }
      }
    }
  }
 const {data} = CustomGetFunction(`api/affiliate-register-lists/${id}`,[id]);
  
  const supMaster = [{id:"1",name:"J-me"},{id:"2",name:"Mr.Harry Potter"},{id:"3",name:"Mr.Willson"}];
  // const fetchCrypto = async()=>{
  //   const {data} = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false");
  //   setCoin(data);
  // }
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Pending Master Form Detail</h1>
        </div>
        <div className={classes["card-body"]}>
          <SuperMasterDesc userInfo={data} />
        </div>
      </Card>
      <div style={{marginTop: '20px'}}>
          <form>
          <ToastContainer />
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
                        value={real_name}
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
                        
                        sx={{ width: 200 }}
                        variant="standard"
                        id="demo-simple-select"
                        disabled={true}
                         >Crypto Currency
                         </TextField>
                    
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
                        value={payment_name}
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
                        value={transition_id}
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
                        value={amount}
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
                        value={currency}
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
                    <label htmlFor="">Choose SuperMaster</label>:
                    <p>
                      &nbsp;&nbsp;
                      {/* <input type="text" /> */}
                      <Select
                        id="standard-basic"
                        label="Super Master"
                        sx={{ width: 200 }}
                        variant="standard"
                        value={superMaster}
                        onChange={(e)=>setSuperMaster(e.target.value)}
                      >
                      {
                        supMaster.map((sup,index)=>(
                          <MenuItem key={index} value={sup.id}>
                            {sup.name}
                          </MenuItem>
                        ))
                      }
                      </Select>
                    </p>
                  </div>
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
       
      </div>
      <div style={{display:"flex",marginTop:20,justifyContent:"flex-end",marginRight:100}}>
        <Button type="submit" onClick={(e)=>{submitHandler(e)}} variant="contained">Submit</Button>
      </div>
        </form>
      </div>
    </div>
  );
};

export default PandingMasterDetail;
