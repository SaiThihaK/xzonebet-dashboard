import React, { useState } from "react";
import TextField from "@mui/material/TextField"; 
import classes from "./PaymentType.module.css";
import Card from "../../../components/UI/Card";
import PaymentTypeTable from "./PaymentTypeTable/PaymentTypeTable";
import { Button } from "@mui/material";
import PaymentTypeModal from "../../../components/UI/Modal/PaymentSetting/PaymentType/PaymentTypeModal";


const PaymentType = () => {
  const [payment_type,setPayment_type]=useState("");
  const [open,setOpen] = useState(false);
  const handleOpen = ()=>setOpen(true);
  const handleClose = ()=>setOpen(false);
   
  
  return (
    
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Payment Type</h1>
        </div>
        <div className={classes["card-body"]}>
          <div className={classes["table-container"]}>
            <div className={classes["search-header-flex"]}>
              <div style={{display:"flex",justifyContent:"flex-end"}}>
                <Button variant="contained" onClick={handleOpen}>
                 Create
                </Button>
              </div>
       
            </div>
          </div>
          <PaymentTypeTable />
        </div>
        <PaymentTypeModal open={open} handleClose={handleClose} setPayment_type={setPayment_type}  />
      </Card>
    </div>
  
  );
};

export default PaymentType;
