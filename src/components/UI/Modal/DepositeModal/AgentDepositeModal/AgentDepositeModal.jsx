import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {ContentCopy} from '@mui/icons-material';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import classes from "./AgentDepositeModal.module.css"
import { Avatar, Button, FormControl, Icon, IconButton, TextField, Tooltip } from "@mui/material";
import axios from "axios";
import { getMethod, PostMethod } from "../../../../../services/api-services";
import { logoutHandler } from "../../../../Sidebar/Sidebar";
import { toast } from "react-toastify";

const style = {
    position: "absolute",
    top: "40%",
    left: "60%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "1px solid #FFF",
    borderRadius: "0.5rem",
    p: 4,
  }
  
const AgentDepositeModal = ({ 
  open, 
  closeHandler,
  id,
  AlertToast
}) => {
const [provDetail,setProvDetail] = useState([]);
const [amount,setAmount] = useState("");
const [account_no,setAccount_no] = useState("");
const [transaction_no,setTransition_no] = useState("");
// console.log(id)
const fetchProviderDetail = async()=>{
  try{
const response = await axios.request(getMethod(`api/generate-payment-account/${id}`));
console.log(response.data.data);
setProvDetail(response.data.data);
  }catch(error){
    if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
  }
}
const bankNumberCopy =()=>{
  navigator.clipboard.writeText(provDetail.account_no)
}
const BankAccountCopy = ()=>{
  navigator.clipboard.writeText(provDetail.name)
}
useEffect(()=>{
fetchProviderDetail();
return ()=>{
  setProvDetail([]);
}
},[id])

const confirmHandler = async()=>{
  if(!amount || !account_no || !transaction_no){
    AlertToast(toast.warning("Please Fill all the field"))
  }
  console.log("payment_account_id",provDetail.id)
  try{
    const response = await axios.request(PostMethod(`api/user-deposit`,{
      amount,
      account_no,
      transaction_no,
      payment_account_id:provDetail.id,
      account_name:provDetail.name
    }))
    console.log(response.data.status);
    if(response.data.status==="success"){
      AlertToast(toast.success,response.data.message);
      setAmount("");
      setAccount_no("");
      setTransition_no("");
      return;
    }
    if(response.data.status==="error"){
      AlertToast(toast.error,response.data.message)
      return;
    }
  }catch(error){
    if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
    if(error.response.data.status="error"){
      AlertToast(toast.error,error.response.data.message)
    }
  }
}

  return (
    <div>
      <Modal
        open={open}
        onClose={closeHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           <div className={classes["avatar-container"]}>
            <Avatar src=""  variant="square" sx={{width:80,height:60}}/>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            {provDetail?.payment_provider}
          </Typography>
           </div>
           
           <div className={classes["form-container"]}>
           
           <div className={classes["form-group-desc"]}>
          <label htmlFor="">Amount (Min. 1000.00 MMK)</label>
           <TextField
           value={amount}
           size="small" className={classes["form-group-desc-input"]}
           placeholder="1000.00"
           onChange={(e)=>setAmount(e.target.value)}
           />
          </div>

          <div className={classes["form-group-desc"]}>
          <label htmlFor="">{provDetail?.payment_provider} Account Number</label>
           <TextField
           value={account_no}
           size="small" className={classes["form-group-desc-input"]}
           placeholder={`${provDetail?.payment_provider} phone number`}
           onChange={(e)=>setAccount_no(e.target.value)}          />
          
          </div>
          <div className={classes["form-group-desc"]}>
          <label htmlFor="">Transition ID</label>
           <TextField
           value={transaction_no}
           size="small" className={classes["form-group-desc-input"]}
           placeholder="20 digit"
           onChange={(e)=>setTransition_no(e.target.value)}
           />
          </div>
          </div>
           <div className={classes["account"]}>
           <p>{provDetail?.payment_provider} ဖုန်းနံပါတ်-&nbsp;{provDetail?.account_no}
            <Tooltip title="Copy" placement="right-end">
            <IconButton onClick={bankNumberCopy}>
               <ContentCopy />
           </IconButton> 
            </Tooltip> 
          
            </p>
           <p>{provDetail?.payment_provider}နာမည်-&nbsp;{provDetail?.name}
           <Tooltip title="Copy" placement="right-end">
           <IconButton onClick={BankAccountCopy}>
                  <ContentCopy />
              </IconButton>
            </Tooltip>
              
            </p>
           </div>
           
           <FormControl fullWidth style={{marginTop:20}}>
           <Button variant="contained" onClick={confirmHandler}>Confirm</Button>
           </FormControl>
        </Box>
      </Modal>
    </div>
  );
};

export default AgentDepositeModal;