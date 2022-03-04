import React, { useState } from "react";
import TextField from "@mui/material/TextField"; 
import classes from "./PaymentAccount.module.css";
import { Button } from "@mui/material";
import Card from "../../../components/UI/Card";
import PaymentAccountModal from "../../../components/UI/Modal/PaymentSetting/PaymentAccount/PaymentAccountModal";
import PaymentAccountTable from "./PaymentAccountTable/PaymentAccountTable";



const PaymentAccount = () => {
  const [open,setOpen] = useState(false);
  const [payment_type,setPayment_type] = useState("");
  const [payment_provider,setPayment_provider] = useState("");
  const handleOpen = ()=>setOpen(true);
  const handleClose = ()=>setOpen(false);

  return (
    
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Payment Account</h1>
        </div>
        <div className={classes["card-body"]}>
          <div className={classes["table-container"]}>
          <div style={{display:"flex",justifyContent:"flex-end"}}>
            <Button variant="contained" onClick={handleOpen}>Create Payment Account</Button>
          </div>
         <PaymentAccountTable />
        </div>
        </div>
        <PaymentAccountModal 
        open={open} 
        handleClose={handleClose}
        />
      </Card>
    </div>
  
  );
};

export default PaymentAccount;
