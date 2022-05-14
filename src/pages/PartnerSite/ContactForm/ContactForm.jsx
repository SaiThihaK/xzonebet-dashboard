
import {TextField } from '@mui/material'
import React, { useState } from 'react'
import PageTitleCard from '../../../components/UI/PageTitleCard/PageTitleCard'
import classes from "./ContactForm.module.css"
import DemoDatePicker from './DemoDatePicker'
import DemoTimePicker from './TimePicker'

const ContactForm = () => {
    const [email,setEmail] = useState("");
  return (
   <PageTitleCard title="Contact Form">
       <div className={classes["card-body"]}>
         <div className={classes["form"]}>
           <label>Gmail</label>
           <TextField size='small' sx={{width:300}}/>
         </div>
         <div className={classes["form"]}>
           <label>Facebook</label>
           <TextField size='small' sx={{width:300}}/>
         </div>
         <div className={classes["form"]}>
           <label>Twitter</label>
           <TextField size='small' sx={{width:300}}/>
         </div>
         <div className={classes["form"]}>
           <label>Instagram</label>
           <TextField size='small' sx={{width:300}}/>
         </div>
         <div className={classes["form"]}>
           <label>Time</label>
           <TextField size='small' sx={{width:300}}/>
         </div>
         {/* <div className={classes["form"]}>
           <label>Date</label>
           <DemoDatePicker/>
         </div> */}
         {/* <div className={classes["form"]}>
           <label>Time</label>
           <DemoTimePicker/>
         </div> */}
        </div>
   </PageTitleCard>
  )
}

export default ContactForm