import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import classes from "./ComfirmMasterDesc.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PostMethod } from "../../../../../services/api-services";

const ComfirmMasterDesc = ({userInfo}) => {
    const alertToast = (message) =>toast(message,alertToast);
    // console.log(userInfo.id);
   const confirmHandler = async()=>{
  //  console.log("confirm");
    try{
   const response = await axios.request(
    PostMethod(`/api/affiliate-register-lists/confirm/${userInfo.id}`,
       {super_master_id:1},
   ));
  //  console.log(response);
   if(response.data.status="success"){
     alertToast(response.data.message)
   }
   return;
   }catch(error){

   };
   }
   console.log(userInfo);
  return (
    <div>
      <div className={classes["agent-user-image-group"]}>
        <img
          src="https://icon-library.com/images/user-icon-jpg/user-icon-jpg-14.jpg"
          className={classes["agent-user-image"]}
          alt=""
        />
        <div className={classes["agent-user-des"]}>
          <h3>{userInfo.name}</h3>
          <span>ID - {userInfo.id}</span>
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
      <div className={classes["form-group-desc"]}>
          <label htmlFor="">Unit </label>:<p>&nbsp;&nbsp;{userInfo.ammount}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          
          <label htmlFor="">Email </label>:<p>&nbsp;&nbsp;{userInfo.email}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Phone </label>:<p>&nbsp;&nbsp;{userInfo.phone}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Country </label>:<p>&nbsp;&nbsp;{userInfo.country}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">City </label>:<p>&nbsp;&nbsp;{userInfo.city}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Currency </label>:<p>&nbsp;&nbsp;{userInfo.currency}</p>
        </div>
        
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Transition Id </label>:<p>&nbsp;&nbsp;{userInfo.transition_id}</p>
        </div>
        <form style={{width:"100%",display:"flex",alignItems:"center",marginTop:30}}>
        <Button   variant="contained" color="primary" onClick={confirmHandler} style={{marginLeft:150}}>Comfirm</Button>
        </form>
      </div>
    </div>
  );
};

export default ComfirmMasterDesc;