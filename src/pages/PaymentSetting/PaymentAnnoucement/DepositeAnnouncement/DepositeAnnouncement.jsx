import React, { useEffect, useState } from 'react'
import PageTitleCard from '../../../../components/UI/PageTitleCard/PageTitleCard'
import { Button, Stack, TextareaAutosize, TextField } from "@mui/material";
import classes from "./DepositeAnnouncement.module.css"
import Card from '../../../../components/UI/Card';
import CustomGetFunction from '../../../../services/CustomGetFunction';
import { PostMethod } from '../../../../services/api-services';
import axios from 'axios';
import { toast } from 'react-toastify';
const DepositeAnnouncement = ({data,render,setRender}) => {
const [textValue,setTextValue] = useState("");
const [open,setOpen] = useState(false);
const handleOpen = ()=>setOpen(true);
const handleClose= ()=>setOpen(false);

useEffect(()=>{
setTextValue(data?.payment_announcement_deposit)
},[])

const changeAnnouncement = async()=>{
    try{
const response = await axios.request(PostMethod("api/admin/change-configuration-setting",{
    payment_announcement_deposit:textValue
}));
if(response.data.status==="success"){
    toast.success(response.data.message);
    setRender(!render)
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

  return (
<>
<PageTitleCard title="Deposite WithDraw">
      <div className={classes["card-body"]}>
            {!open ? (<p className={classes["card-text"]}>
                {data?.payment_announcement_deposit}
             </p>):(
               <textarea value={textValue}   onChange={(e)=>setTextValue(e.target.value)}   rows="8" cols="105" />
               )}
               
        </div>
   

 </PageTitleCard>
 {open &&<Stack direction="row" spacing={3} style={{display:"flex",justifyContent:"flex-end",marginTop:20,marginRight:20}}>
    <Button onClick={()=>{handleClose();changeAnnouncement();}} variant="contained" >Confirm</Button>
    <Button onClick={()=>{handleClose()}}  variant="contained" color="error">Cancel</Button>
    </Stack> }
    {!open &&<Stack direction="row" spacing={3} style={{display:"flex",justifyContent:"flex-end",marginTop:20,marginRight:20}}>
     <Button onClick={handleOpen} variant="contained" color="success">Edit</Button>
     </Stack> } 
</>
 
  )
}

export default DepositeAnnouncement