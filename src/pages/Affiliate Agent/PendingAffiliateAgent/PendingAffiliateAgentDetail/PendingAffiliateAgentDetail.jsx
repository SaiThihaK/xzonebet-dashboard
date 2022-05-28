import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import classes from "./PendingAffiliateAgentDetail.module.css";
import axios from "axios";
import { getMethod, PostMethod } from "../../../../services/api-services";
import Card from "../../../../components/UI/Card";
import { logoutHandler } from "../../../../components/Sidebar/Sidebar";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";

const PendingAffiliateAgentDetail = () => {
const [user,setUser] = useState("");
const [userName,setUserName] = useState("");
const [password,setPassword] = useState("");
const navigate = useNavigate();
const fetchUserDetail = async()=>{
  try{
    const {data} = await axios.request(getMethod(`api/affiliate-register-lists/${id}`));
    if(data.status==="success"){
    // console.log(data.data);
    setUser(data.data);
   
    return;
    }

  }catch(error){
    console.log(error);
    console.log(error.response.data.message)
    if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
    logoutHandler();
    }
  }
}

useEffect(()=>{
  fetchUserDetail();
  return ()=>setUser("");
},[])
const {id} = useParams();
// console.log(user);
const confirmAffiliate = async()=>{
  try{
const response = await axios.request(PostMethod(`api/affiliate-register-lists/confirm-as-affiliate/${id}`,{
  username:userName,
  password
}))
if(response.data.status==='success'){
  toast.success(response.data.message);
  navigate(`/dashboard/account/affiliate-agent/pending-affiliate-agent`);
  return;
}
if(response.data.status==='error'){
  toast.error(response.data.message);
  return;
}
  }catch(error){
    toast.error(error.response.data.message)
  }
}
  return (
    <div>
              <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Pending Agent Form Detail</h1>
        </div>
        <div className={classes["card-body"]}>
        <div className={classes["agent-user-image-group"]}>
        <img
          src="https://icon-library.com/images/user-icon-jpg/user-icon-jpg-14.jpg"
          className={classes["agent-user-image"]}
          alt=""
        />
        <div className={classes["agent-user-des"]}>
          <h3>{user.name}</h3>
          <span>ID - {user.id}</span>
        </div>
      </div>
      <div className={classes["detail-container"]}>
      <div className={classes["form-group-desc"]}>
          <label htmlFor="">UserName </label>:<div>&nbsp;&nbsp;
            <TextField size="small" value={userName} onChange={(e)=>setUserName(e.target.value)} />
          </div>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Password </label>:<div>&nbsp;&nbsp;
          <TextField size="small" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Email </label>:<p>&nbsp;&nbsp;{user.email}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Phone </label>:<p>&nbsp;&nbsp;{user.phone}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Country </label>:<p>&nbsp;&nbsp;{user.country}</p>
        </div>
        {/* <div className={classes["form-group-desc"]}>
          <label htmlFor="">Region </label>:<p>&nbsp;&nbsp;-</p>
        </div> */}
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">City </label>:<p>&nbsp;{user.city}&nbsp;</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Preferred Method of Contract</label>:<p>&nbsp;{user.preferred_method_of_contract}&nbsp;</p>
        </div>
    <div className={classes["btn-container"]}>
    <Button variant="contained" color="error" onClick={()=>{
             navigate(`/dashboard/account/affiliate-agent/pending-affiliate-agent`);
          }}>Back</Button>
          <Button variant="contained" onClick={confirmAffiliate} style={{marginLeft:30}}>Submit</Button>
    </div>
         
   
      </div>
        </div>
      </Card>
  
     
    </div>
  );
};

export default PendingAffiliateAgentDetail;
