import { Button, Stack, TextareaAutosize, TextField } from "@mui/material";
import axios from "axios";
import  React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CustomLoading from "../../../components/CustomLoading/CustomLoading";
import Card from "../../../components/UI/Card";
import PaymentAnnouncementModal from "../../../components/UI/Modal/PaymentSetting/PaymentAnnouncement/PaymentAnnouncementModal";
import { PostMethod } from "../../../services/api-services";
import CustomGetFunction from "../../../services/CustomGetFunction";
import DepositeAnnouncement from "./DepositeAnnouncement/DepositeAnnouncement";
import classes from "./PaymentAnnouncement.module.css";




const PaymentAnnouncement = ()=>{

const [depositeText,setDepositeText] = useState("");
const [textValue,setTextValue] = useState("");
const [open,setOpen] = useState(false);
const handleOpen = ()=>setOpen(true);
const handleClose= ()=>setOpen(false);
const [render,setRender] = useState(false);
const {data,loading} = CustomGetFunction("api/admin/configuration-setting",[render]);
console.log(data);
useEffect(()=>{
  setTextValue(data?.payment_announcement_withdraw)
  },[data])
const changeAnnouncement = async()=>{
  try{
const response = await axios.request(PostMethod("api/admin/change-configuration-setting",{
  payment_announcement_withdraw:textValue
}));
if(response.data.status==="success"){
  toast.success(response.data.message);
  setRender(!render);
  handleClose();
  return;
}
if(response.data.status==="error"){
  toast.error(response.data.message);
  return;
}
  }
  catch(error){
 toast.error(error.response.data.message);

  }
}
return(
  <>{
    loading ? ( 
   <>
  <div className={classes["soccer-setting-container"]}>
    <Card>
      <div className={classes["card-header"]}>
        <h1 className={classes["card-title"]}>Payment Announcement Withdraw</h1>
      </div>
      <div className={classes["card-body"]}>
            {!open ? (<p className={classes["card-text"]}>
                {data?.payment_announcement_withdraw}
             </p>):(
               <textarea value={textValue}   onChange={(e)=>setTextValue(e.target.value)}   rows="8" cols="105" />
               )}
               
        </div>
   
    </Card>
    {open &&<Stack direction="row" spacing={3} style={{display:"flex",justifyContent:"flex-end",marginTop:20,marginRight:20}}>
    <Button onClick={()=>{changeAnnouncement();}} variant="contained" >Confirm</Button>
    <Button onClick={()=>{handleClose()}}  variant="contained" color="error">Cancel</Button>
    </Stack> }
    {!open &&<Stack direction="row" spacing={3} style={{display:"flex",justifyContent:"flex-end",marginTop:20,marginRight:20}}>
     <Button onClick={handleOpen} variant="contained" color="success">Edit</Button>
     </Stack> } 
  </div>
  <DepositeAnnouncement data={data} text={depositeText} setText={setDepositeText} render={render} setRender={setRender} />
  </>
  ):(<CustomLoading />)
  }
   
  </>
  
  )
}

export default PaymentAnnouncement;


