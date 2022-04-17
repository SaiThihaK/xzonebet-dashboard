import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { Button, FormControl, Grid,IconButton, InputAdornment, TextField } from "@mui/material";
import { Email,  Phone } from "@mui/icons-material";
import classes from "./ForgetPasswordModal.module.css"
import {PostMethod} from "../../services/api-services"
import axios from "axios"

import { regexEmail, regexPhone, } from "../../Controller/Validation";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  minHeight:380,
  bgcolor: "background.paper",
  borderRadius: "0.5rem",
  p: 4,
};

const ForgetPasswordModal= ({ open, handleClose}) => {
const [toggle,setToggle] = useState(true);
const toggleMail = ()=>setToggle(true);
const togglePhone = ()=>setToggle(false);
const [emailValue,setEmailValue] = useState("");
const [phoneValue,setPhoneValue] = useState("");
const [error,setError] = useState("");
const [successMsg,setSuccessMsg] = useState("");

const [firstBox,setFirstBox] = useState(true);
const [isCode,setIsCode] = useState(false);
// 

const postHandler = async()=>{
  const api = toggle ? "api/send-email-otp":"api/send-sms-otp";
  const  body = toggle ? {email:emailValue} : {phoen:phoneValue};
  setError("");
  setSuccessMsg("");
  if(toggle){
    if(!regexEmail.test(emailValue)){
      setError("");
      console.log("checking Email");
      setError("Invalid Email");
      return;
     }
  }
 if(!toggle){
  if(regexPhone.test(phoneValue)){
    setError("");
     console.log("checking phone")
     setError("Invalid Phone");
     return;
   }
 }
 
  try{
    const response = await axios.request(PostMethod(api,body));
    console.log(response);
    if(response.data.status==="success"){
      setError("");
      setSuccessMsg(response.data.message);
      setEmailValue("");
      setPhoneValue("");
      return;
    }
    if(response.data.status==="error"){
      setError(response.data.message)
      return;
    }
   
  }catch(error){
   setError(error.response.data.message);
   return;
  }
 
}
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > 
      {
        firstBox && 
    
        <Box sx={style}>
          <div>
            <h3>PASSWORD RECOVERY</h3>
          </div>
           <Grid container className={classes["grid-container"]}>
               <Grid item xs={6}>
               <div className={classes["tab"]} 
               onClick={toggleMail}
                style={
                 toggle? {color:"white",fill:"white",backgroundColor:"var(--secondary-color)"} : {color:"var(--secondary-color)",fill:"var(--secondary-color)",backgroundColor:"white"}
               }
               >
               <Email /> Email 
               </div>
               </Grid>
               <Grid item xs={6}>
               <div className={classes["tab"]} onClick={togglePhone} 
               style={
                 !toggle? {color:"white",fill:"white",backgroundColor:"var(--secondary-color)"} : {color:"var(--secondary-color)",fill:"var(--secondary-color)",backgroundColor:"white"}
               }
               >
               <Phone />Phone
               </div>
               </Grid>
             </Grid>
            {/* ----------------Input Grid */}
            <Grid container spacing={1}>
              <Grid item xs={6} style={{marginTop:30}}>
                <FormControl fullWidth>
                <TextField
              
                size="small" placeholder={toggle?"Enter Your Email":"Enter Your Phone"} 
                
                id="input-with-icon-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                     {
                       toggle ? <Email /> : <Phone />
                     }
                    </InputAdornment>
                 ),
                }}
                value={toggle?emailValue:phoneValue}
                onChange={(e)=>{
                  if(toggle){
                    setEmailValue(e.target.value);
                  
                    return;
                  }
                  else{
                    setPhoneValue(e.target.value);
                    return
                  }
                }}
                />
                </FormControl>

              </Grid>
              <Grid item xs={6} style={{marginTop:30}}>
                <p>
                To recover your password, enter the {toggle? "E-mail address":"Phone number"} you used for registration.
                </p>
                <p className={classes["second-text"]}>
                We will send you an {toggle ? "E-mail":"SMS"} with further instructions.
                </p>
              </Grid>
            </Grid>
            {
              successMsg && (<div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:20}}>
              <p style={{color:"green"}}>{successMsg}</p>
            </div>)
            }
            {
              error && (<div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:20}}>
                <p style={{color:"var(--secondary-color)"}}>{error}</p>
              </div>)
            }
            <FormControl fullWidth style={{marginTop:30}}>
              <Button variant="contained" color="error" onClick={postHandler}>Create New Password</Button>
            </FormControl>
         
        
        </Box>
}
      </Modal>
    </div>
  );
};

export default ForgetPasswordModal;
