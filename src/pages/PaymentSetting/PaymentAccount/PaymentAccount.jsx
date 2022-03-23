import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField"; 
import classes from "./PaymentAccount.module.css";
import { Button } from "@mui/material";
import Card from "../../../components/UI/Card";
import PaymentAccountModal from "../../../components/UI/Modal/PaymentSetting/PaymentAccount/PaymentAccountModal";
import PaymentAccountTable from "./PaymentAccountTable/PaymentAccountTable";
import axios from "axios";
import { getMethod } from "../../../services/api-services";
import { ToastContainer } from "react-toastify";




const PaymentAccount = () => {
  const [open,setOpen] = useState(false);
  // To render with useEffect
  const [num,setNum] = useState(0);
  const handleOpen = ()=>setOpen(true);
  const handleClose = ()=>setOpen(false);
 
  useEffect(()=>{

  },[num])
  return (
    
    <div className={classes["soccer-setting-container"]}>
      <ToastContainer />
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Payment Account</h1>
        </div>
        <div className={classes["card-body"]}>
          <div className={classes["table-container"]}>
          <div style={{display:"flex",justifyContent:"flex-end"}}>
            <Button variant="contained" onClick={handleOpen}>Create Payment Account</Button>
          </div>
         <PaymentAccountTable num={num} setNum={setNum}/>
        </div>
        </div>
        <PaymentAccountModal 
        open={open} 
        handleClose={handleClose}
        num={num}
        setNum={setNum}
        />
      </Card>
    </div>
  
  );
};

export default PaymentAccount;
