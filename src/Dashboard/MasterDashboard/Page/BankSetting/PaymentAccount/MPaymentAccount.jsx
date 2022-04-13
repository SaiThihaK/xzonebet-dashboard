import { Button } from "@mui/material";
import Card from "../../../../../components/UI/Card";
import {useState} from "react";
import classes from "./MPaymentAccount.module.css"
import MPaymentAccountTable from "./MPayMentAccountTable/MPaymentAccountTable";
import MPaymentAccountModal from "../../../../../components/UI/Modal/MPaymentAccountModal/MPaymentAccountModal";


const MPaymentAccount = ()=>{
const [open,setOpen] = useState(false);
const handleOpen = ()=>setOpen(true);
const handleClose = ()=>setOpen(false);
return(
    <div>
        <Card>
     <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Payment Account</h1>
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

export default MPaymentAccount;