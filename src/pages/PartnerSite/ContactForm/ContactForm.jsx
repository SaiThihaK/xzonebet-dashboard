
import { SettingsPhone } from '@mui/icons-material'
import {Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import PageTitleCard from '../../../components/UI/PageTitleCard/PageTitleCard'
import { PutMethod } from '../../../services/api-services'
import CustomGetFunction from '../../../services/CustomGetFunction'
import classes from "./ContactForm.module.css"
import DemoDatePicker from './DemoDatePicker'
import DemoTimePicker from './TimePicker'

const ContactForm = () => {
    const [email,setEmail] = useState("");
    const [facebook,setFacebook] = useState("");
    const [twitter,setTwitter] = useState("");
    const [instagram,setInstragram] = useState("");
    const [date,setDate] = useState("");
    const [render,setRender] = useState(false);
    const [from,setFrom] = useState('');
    const [to,setTo] = useState('');
    const {data,loading} = CustomGetFunction(`api/xzonebetaffiliate/contact-edit`,[render]);
    console.log("contactData",data);
    let today = new Date();
    let currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(currentDate);
    const newDate = new Date();
    
    console.log(data);
    let currentDateFormat = newDate.toString().split(" ");
    useEffect(()=>{
      setEmail(data?.email);
      setFacebook(data?.facebook);
      setTwitter(data?.twitter);
      setInstragram(data?.instagram)
      setDate(data?.date);
      // setTo(
      //   currentDateFormat[0]+" "+currentDateFormat[1]+" "+currentDateFormat[2]+" "+currentDate+" "+
      //   data.to_time?.toString().split(" ")[0]
      //   );
      setTo(data?.to_time);
      setFrom(data?.from_time);
    },[data]);
   
    console.log(data?.from_time);
    console.log(from);
  
    const confirmHandler = async()=>{
      try{
     const response = await axios.request(PutMethod(`api/xzonebetaffiliate/1/contact-edit`,{
       facebook,
       email,
       twitter,
       instagram,
       date,
       from_time:from,
       to_time:currentDate+" "+to.toString().split(" ")[4],
       from_time:currentDate+" "+from.toString().split(" ")[4]

     }));
     if(response.data.status === "success"){
      toast.success(response.data.message);
      setRender(!render);
      return;
     }
     if(response.data.status === "error"){
    toast.error(response.data.message);
    return;
     }
      }catch(error){
        toast.error(error.response.data.message)
      }
    }
  return (
   <PageTitleCard title="Contact Form">
       <div className={classes["card-body"]}>
         <div className={classes["form"]}>
           <label>Gmail</label>
           <TextField size='small' sx={{width:300}} value={email} onChange={(e)=>{
             setEmail(e.target.value)
           }}/>
           <div className={classes["btn-container"]}>
             <Button variant="contained" color="success" size="samll"
             onClick={confirmHandler}
             >Save</Button>
           </div>
         </div>
         <div className={classes["form"]}>
           <label>Facebook</label>
           <TextField size='small' sx={{width:300}} value={facebook} onChange={(e)=>{
             setFacebook(e.target.value);
           }}/>
            <div className={classes["btn-container"]}>
             <Button variant="contained" color="success" size="samll" onClick={confirmHandler}>Save</Button>
           </div>
         </div>
         <div className={classes["form"]}>
           <label>Twitter</label>
           <TextField size='small' sx={{width:300}} value={twitter} onChange={(e)=>{
             setTwitter(e.target.value)
           }}/>
            <div className={classes["btn-container"]}>
             <Button variant="contained" color="success" size="samll" onClick={confirmHandler}>Save</Button>
           </div>
         </div>
         <div className={classes["form"]}>
           <label>Instagram</label>
           <TextField size='small' sx={{width:300}} value={instagram} onChange={(e)=>{
             setInstragram(e.target.value)
           }}/>
            <div className={classes["btn-container"]}>
             <Button variant="contained" color="success" size="samll" onClick={confirmHandler}>Save</Button>
           </div>
         </div>
         <div className={classes["form"]}>
           <label>Date</label>
           {/* <DemoDatePicker/> */}
           <TextField size="small" fullWidth sx={{width:300}} value={date} onChange={(e)=>{
             setDate(e.target.value)
           }} />
           <div className={classes["btn-container"]}>
             <Button variant="contained" color="success" size="samll" onClick={confirmHandler}>Save</Button>
           </div>
         </div>
         <div className={classes["form"]}>
           <label>From</label>
           <DemoTimePicker time={from}  setTime={setFrom}/>
           <div className={classes["btn-container"]}>
             <Button variant="contained" color="success" size="samll" onClick={confirmHandler}>Save</Button>
           </div>
         </div>
         <div className={classes["form"]}>
           <label>To</label>
           <DemoTimePicker time={to}  setTime={setTo}/>
           <div className={classes["btn-container"]}>
             <Button variant="contained" color="success" size="samll" onClick={confirmHandler}>Save</Button>
           </div>
         </div>
        </div>
   </PageTitleCard>
  )
}

export default ContactForm