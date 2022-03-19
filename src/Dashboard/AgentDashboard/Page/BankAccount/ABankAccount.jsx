
import { Button } from "@mui/material";

import {useState} from "react";
import classes from "./ABankAccount.module.css"

import MPaymentAccountTable from "../../../MasterDashboard/Page/BankSetting/PaymentAccount/MPayMentAccountTable/MPaymentAccountTable";
import Card from "../../../../components/UI/Card";
import MPaymentAccountModal from "../../../../components/UI/Modal/MPaymentAccountModal/MPaymentAccountModal";


const ABankAccount = ()=>{
const [open,setOpen] = useState(false);
const handleOpen = ()=>setOpen(true);
const handleClose = ()=>setOpen(false);
return(
    <div>
        <Card>
     <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Bank Accounts</h1>
     </div>
     <div className={classes["card-body"]}>
         <div className={classes["btn-container"]}>
         <Button variant="contained" onClick={handleOpen}>Create Payment</Button>
         </div>
         <MPaymentAccountTable />
    </div>
        </Card>
        <MPaymentAccountModal open={open} handleClose={handleClose} />
    </div>
)

}

export default ABankAccount;