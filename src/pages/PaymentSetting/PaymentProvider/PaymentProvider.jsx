import React, { useState } from "react";
import TextField from "@mui/material/TextField"; 
import classes from "./PaymentProvider.module.css";
import { Button } from "@mui/material";
import Card from "../../../components/UI/Card";
import PaymentTypeModal from "../../../components/UI/Modal/PaymentSetting/PaymentType/PaymentTypeModal";
import PaymentProviderModal from "../../../components/UI/Modal/PaymentSetting/PaymentProvider/PaymentProviderModal";
import PaymentProviderTable from "./PaymentProviderTable/PaymentProviderTable";
import {useNavigate}from "react-router-dom"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CustomGetFunction from "../../../services/CustomGetFunction";
import CustomLoading from "../../../components/CustomLoading/CustomLoading"
const PaymentProvider = () => {
  const navigate = useNavigate();
  // const [open,setOpen] = useState(false);
  // const [payment_type,setPayment_type] = useState("");
  // const [payment_provider,setPayment_provider] = useState("");
  // const handleOpen = ()=>setOpen(true);
  // const handleClose = ()=>setOpen(false);
  const {data,loading}  = CustomGetFunction("api/dashboard/payment-providers",[]);
  return (
    
    <div className={classes["soccer-setting-container"]}>
      <ToastContainer />
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Payment Provider</h1>
        </div>
        <div className={classes["card-body"]}>
          <div className={classes["table-container"]}>
          <div style={{display:"flex",justifyContent:"flex-end",marginBottom:20}}>
            <Button variant="contained" onClick={()=>navigate("/dashboard/payment-setting/payment-provider/create")}>Create Provider</Button>
          </div>  
         {
           loading ? (  <PaymentProviderTable data={data} />):(<CustomLoading />)
         }
       
        </div>
        </div>
        {/* <PaymentProviderModal 
        open={open} 
        handleClose={handleClose} 
        setPayment_type={setPayment_type}
        setPayment_provider={setPayment_provider}
        /> */}
      </Card>
    </div>
  
  );
};

export default PaymentProvider;
