import React, { useState } from "react";
import TextField from "@mui/material/TextField"; 
import classes from "./PaymentProvider.module.css";
import { Button } from "@mui/material";
import Card from "../../../components/UI/Card";
import PaymentTypeModal from "../../../components/UI/Modal/PaymentSetting/PaymentType/PaymentTypeModal";
import PaymentProviderModal from "../../../components/UI/Modal/PaymentSetting/PaymentProvider/PaymentProviderModal";
import PaymentProviderTable from "./PaymentProviderTable/PaymentProviderTable";


const PaymentProvider = () => {
  const [open,setOpen] = useState(false);
  const [payment_type,setPayment_type] = useState("");
  const [payment_provider,setPayment_provider] = useState("");
  const handleOpen = ()=>setOpen(true);
  const handleClose = ()=>setOpen(false);

  return (
    
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Payment Provider</h1>
        </div>
        <div className={classes["card-body"]}>
          <div className={classes["table-container"]}>
          <div style={{display:"flex",justifyContent:"flex-end"}}>
            <Button variant="contained" onClick={handleOpen}>Create Provider</Button>
          </div>
         <PaymentProviderTable />
        </div>
        </div>
        <PaymentProviderModal 
        open={open} 
        handleClose={handleClose} 
        setPayment_type={setPayment_type}
        setPayment_provider={setPayment_provider}
        />
      </Card>
    </div>
  
  );
};

export default PaymentProvider;
