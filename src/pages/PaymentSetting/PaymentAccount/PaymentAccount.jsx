import React, { useEffect, useState } from "react";
import classes from "./PaymentAccount.module.css";
import { Button } from "@mui/material";
import Card from "../../../components/UI/Card";
import PaymentAccountModal from "../../../components/UI/Modal/PaymentSetting/PaymentAccount/PaymentAccountModal";
import PaymentAccountTable from "./PaymentAccountTable/PaymentAccountTable";
import TableGetFunction from "../../../services/TableGetFunction";
import CustomLoading from "../../../components/CustomLoading/CustomLoading";




const PaymentAccount = () => {
  const [open,setOpen] = useState(false);
  // To render with useEffect
  const [num,setNum] = useState(0);
  const handleOpen = ()=>setOpen(true);
  const handleClose = ()=>setOpen(false);
  const [page,setPage] = useState(1);
  const {data,pagination,loading} = TableGetFunction(`api/dashboard/payment-accounts?sortColumn=id&sortDirection=desc&limit=10&page=${page}`,[num,page]);
 
  useEffect(()=>{

  },[num])
  return (
    
    <div className={classes["soccer-setting-container"]}>
 
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Payment Account</h1>
        </div>
        <div className={classes["card-body"]}>
          <div className={classes["table-container"]}>
          <div style={{display:"flex",justifyContent:"flex-end",marginBottom:20}}>
            <Button variant="contained" onClick={handleOpen}>Create Payment Account</Button>
          </div>
          {
            loading ?( <PaymentAccountTable data={data} pagination={pagination} setPage={setPage}/>):(<CustomLoading />)
                    }
        
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
