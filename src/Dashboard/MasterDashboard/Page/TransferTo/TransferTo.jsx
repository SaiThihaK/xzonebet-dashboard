

import { Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import Card from "../../../../components/UI/Card";
import TransferToModal from "../../../../components/UI/Modal/TransferTo/TransferToModal";
import classes from "./TransferTo.module.css"


const TransferTo = ()=>{
const [firstToggle,setFirstToggle] = useState(false);
const [open,setOpen] = useState(false);
const handleOpen = ()=>setOpen(true);
const handleClose = ()=>setOpen(false);
const toggleClose = ()=>setFirstToggle(false);
return(
    <div className={classes["container"]}>
        <Card>
     <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Transfer To</h1>
     </div>
     <div className={classes["card-body"]}>
       <FormControl sx={{width:700}}>
    <label>Transfer To Id Number</label>
       <TextField  size="small"/>
       <div className={classes['btn']}>
           <Button onClick={()=>setFirstToggle(true)} variant="contained">Submit</Button>
       </div>
         </FormControl>
         
        {firstToggle &&<FormControl sx={{width:700}}>
        <label>Transfer To Sai</label>
       <TextField className={classes["form-input"]}   size="small" label="Enter your ammount"/>
       <div className={classes['btn']}>
           <Button variant="contained" onClick={handleOpen}>Confirm</Button>
       </div>
         </FormControl> }
    </div>
    </Card>
    <TransferToModal open={open} handleClose={handleClose} toggleClose={toggleClose} />
    </div>
)

}

export default TransferTo;