import { Button } from "@mui/material";
import  React, { useState } from "react";
import Card from "../../../components/UI/Card";
import PaymentAnnouncementModal from "../../../components/UI/Modal/PaymentSetting/PaymentAnnouncement/PaymentAnnouncementModal";
import classes from "./PaymentAnnouncement.module.css";




const PaymentAnnouncement = ()=>{
const [text,setText] = useState("စာကလေး");
const [open,setOpen] = useState(false);
const handleOpen = ()=>setOpen(true);
const handleClose= ()=>setOpen(false);
return(
    <div className={classes["soccer-setting-container"]}>
    <Card>
      <div className={classes["card-header"]}>
        <h1 className={classes["card-title"]}>Payment Announcement</h1>
      </div>
      <div className={classes["card-body"]}>
             <p className={classes["card-text"]}>
                {text}
             </p>
        </div>
    </Card>
    <div style={{display:"flex",justifyContent:"flex-end",marginTop:20,marginRight:20}}>
     <Button onClick={handleOpen} variant="contained" color="success">Edit</Button>
    </div>
    <PaymentAnnouncementModal handleClose={handleClose} open={open} setText={setText}/>
  </div>
  )
}

export default PaymentAnnouncement;


