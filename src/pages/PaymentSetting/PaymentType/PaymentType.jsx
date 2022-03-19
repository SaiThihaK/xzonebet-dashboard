import React, { useEffect, useState } from "react";

import classes from "./PaymentType.module.css";
import Card from "../../../components/UI/Card";
import PaymentTypeTable from "./PaymentTypeTable/PaymentTypeTable";
import { Button } from "@mui/material";
import PaymentTypeModal from "../../../components/UI/Modal/PaymentSetting/PaymentType/PaymentTypeModal";
import axios from "axios";
import { getMethod } from "../../../services/api-services";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logoutHandler } from "../../../components/Sidebar/Sidebar";


const PaymentType = () => {
  const [payment_type,setPayment_type]=useState([]);
  const [open,setOpen] = useState(false);
  const [num,setNum] = useState(0);
  const handleOpen = ()=>setOpen(true);
  const handleClose = ()=>setOpen(false);
   
  const FetchPaymentType = async()=>{
    try{
      const response = await axios.request(getMethod(`/api/dashboard/payment-types`));
      setPayment_type(response.data.data);

    }catch(error){
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
    }
  }
//  console.log(payment_type)
  useEffect(()=>{
    FetchPaymentType()
  },[num]);
  return (
    
    <div className={classes["soccer-setting-container"]}>
      <ToastContainer />
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Payment Type</h1>
        </div>
        <div className={classes["card-body"]}>
          <div className={classes["table-container"]}>
            <div className={classes["search-header-flex"]}>
              <div className={classes["btn-container"]}>
                <Button variant="contained" onClick={handleOpen}>
                 Create
                </Button>
              </div>
       
            </div>
          </div>
          <PaymentTypeTable payment_type={payment_type} num={num} setNum={setNum}/>
        </div>
        <PaymentTypeModal open={open} handleClose={handleClose} num={num} setNum={setNum}  />
      </Card>
    </div>
  
  );
};

export default PaymentType;
