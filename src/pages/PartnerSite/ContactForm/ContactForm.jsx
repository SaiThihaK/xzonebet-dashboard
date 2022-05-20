
import {Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PageTitleCard from '../../../components/UI/PageTitleCard/PageTitleCard'
import classes from "./ContactForm.module.css"
import DemoDatePicker from './DemoDatePicker'
import DemoTimePicker from './TimePicker'

const ContactForm = () => {
    const [email,setEmail] = useState("");
    const [facebook,setFacebook] = useState("");
    const [Twitter,setTwitter] = useState("");
    const [Instagram,setInstragram] = useState("");

    useEffect(()=>{
      setEmail("sai@dev.com");
      setFacebook("saithihak@facebook");
      setTwitter("sai@twitter");
      setInstragram("sai@instagram")
    },[])
  return (
   <PageTitleCard title="Contact Form">
       <div className={classes["card-body"]}>
         <div className={classes["form"]}>
           <label>Gmail</label>
           <TextField size='small' sx={{width:300}} value={email} onChange={(e)=>{
             setEmail(e.target.value)
           }}/>
           <div className={classes["btn-container"]}>
             <Button variant="contained" color="success" size="samll">Save</Button>
           </div>
         </div>
         <div className={classes["form"]}>
           <label>Facebook</label>
           <TextField size='small' sx={{width:300}} value={facebook} onChange={(e)=>{
             setFacebook(e.target.value);
           }}/>
            <div className={classes["btn-container"]}>
             <Button variant="contained" color="success" size="samll">Save</Button>
           </div>
         </div>
         <div className={classes["form"]}>
           <label>Twitter</label>
           <TextField size='small' sx={{width:300}} value={Twitter} onChange={(e)=>{
             setTwitter(e.target.value)
           }}/>
            <div className={classes["btn-container"]}>
             <Button variant="contained" color="success" size="samll">Save</Button>
           </div>
         </div>
         <div className={classes["form"]}>
           <label>Instagram</label>
           <TextField size='small' sx={{width:300}} value={Instagram} onChange={(e)=>{
             setInstragram(e.target.value)
           }}/>
            <div className={classes["btn-container"]}>
             <Button variant="contained" color="success" size="samll">Save</Button>
           </div>
         </div>
         <div className={classes["form"]}>
           <label>Date</label>
           <DemoDatePicker/>
           <div className={classes["btn-container"]}>
             <Button variant="contained" color="success" size="samll">Save</Button>
           </div>
         </div>
         <div className={classes["form"]}>
           <label>Time</label>
           <DemoTimePicker/>
           <div className={classes["btn-container"]}>
             <Button variant="contained" color="success" size="samll">Save</Button>
           </div>
         </div>
        </div>
   </PageTitleCard>
  )
}

export default ContactForm