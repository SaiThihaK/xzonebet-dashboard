
import { Button } from "@mui/material";

import {useState} from "react";
import classes from "./ABankAccount.module.css"
import MPaymentAccountModal from "../../../../components/UI/Modal/MPaymentAccountModal/MPaymentAccountModal";
import MPaymentAccountTable from "../../../MasterDashboard/Page/BankSetting/PaymentAccount/MPayMentAccountTable/MPaymentAccountTable";
import Card from "../../../../components/UI/Card";


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
         <div style={{display:"flex",justifyContent:"flex-end"}}>
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