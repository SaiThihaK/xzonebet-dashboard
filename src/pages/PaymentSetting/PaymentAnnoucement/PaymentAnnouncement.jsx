import { Button, Stack, TextareaAutosize, TextField } from "@mui/material";
import  React, { useState } from "react";
import Card from "../../../components/UI/Card";
import PaymentAnnouncementModal from "../../../components/UI/Modal/PaymentSetting/PaymentAnnouncement/PaymentAnnouncementModal";
import classes from "./PaymentAnnouncement.module.css";




const PaymentAnnouncement = ()=>{
const [text,setText] = useState("စာကလေး");
const [textValue,setTextValue] = useState("");
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
            {!open ? (<p className={classes["card-text"]}>
                {text}
             </p>):(
               <TextField
               sx={{width:"100%"}}
               onChange={(e)=>setTextValue(e.target.value)}
               placeholder="Type Payment announcement"
               size="large"
         />
             )}
        </div>
    </Card>
    {open &&<Stack direction="row" spacing={3} style={{display:"flex",justifyContent:"flex-end",marginTop:20,marginRight:20}}>
    <Button onClick={()=>{handleClose();setText(textValue)}} variant="contained" >Confirm</Button>
    <Button onClick={()=>{handleClose()}}  variant="contained" color="error">Cancel</Button>
    </Stack> }
    {!open &&<Stack direction="row" spacing={3} style={{display:"flex",justifyContent:"flex-end",marginTop:20,marginRight:20}}>
     <Button onClick={handleOpen} variant="contained" color="success">Edit</Button>
     </Stack> }
    {/* <PaymentAnnouncementModal handleClose={handleClose} open={open} setText={setText}/> */}
  </div>
  )
}

export default PaymentAnnouncement;


