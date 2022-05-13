import { TextField } from '@mui/material'
import React, { useState } from 'react'
import PageTitleCard from '../../../components/UI/PageTitleCard/PageTitleCard'
import classes from "./ContactForm.module.css"
const ContactForm = () => {
    const [email,setEmail] = useState("");
  return (
   <PageTitleCard title="Contact Form">
       <div className={classes["card-body"]}>
        </div>
   </PageTitleCard>
  )
}

export default ContactForm