import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import XzonebetFootballModal from '../../components/UI/Modal/XzonebetFootballModal/XzonebetFootballModal'
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard'
import Flags from '../Flags/Flags'
import classes from "./Country.module.css" 
const Country = () => {
 const [countryValue,setCountryValue] = useState("");
 const [photo,setPhoto] = useState({});
 const [open,setOpen] = useState(false);
 const [editOpen,setEditOpen] = useState(false);
 const EditOpenHandler = ()=>setEditOpen(true);
 const EditCloseHandler = ()=>setEditOpen(false);
 const openHandler = ()=>setOpen(true);
 const closeHandler = ()=>setOpen(false);
 const dum = ["1","2","3","4","5","6","7","8","9","10"]
  return (
    <PageTitleCard title="Country">
   <div className={classes["card-body"]}>
    <div className={classes["btn-container"]}>
 <Button variant='contained' onClick={openHandler}>Create Country</Button>
    </div>
    <Grid container spacing={1}>
     {
         dum?.map((flag,index)=>(
             <Grid item xs={2} key={index} onClick={EditOpenHandler}>
                 <Flags />
             </Grid>
         ))
     }
    </Grid>
    <Flags />
   </div>
   <XzonebetFootballModal  
   
   open={open} closeHandler={closeHandler} title="Create Country"
   country
   logo
   countryValue={countryValue}
   setCountryValue={setCountryValue}
   setPhoto={setPhoto}
   btnTitle="Create"
   />
    <XzonebetFootballModal  
   
   open={editOpen} closeHandler={EditCloseHandler} title="Create Country"
   country
   logo
   countryValue={countryValue}
   setCountryValue={setCountryValue}
   setPhoto={setPhoto}
   btnTitle="Edit"
   />
    </PageTitleCard>
  )
}

export default Country