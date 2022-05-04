import React, { useState } from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, MenuItem, Select,FormControl, Button } from "@mui/material";
import classes from "./CreateAccountData.module.css"
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Date from "./Date";

const accountTitle = [
  {name:"NetWorth"},
  {name:"Betting"},
  {name:"Marketing"},
  {name:"Finance"}
]
const style = {
  position: "absolute",
  top: "50%",
  left: "60%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  overflowY: "auto",
  maxHeight: "calc(100vh - 100px)",
  // border: "1px solid #FFF",
  borderRadius: "10px",
  p: 4,
};
const CreateAccountDataModal = ({ 
  open, 
  closeHandler ,
}) => {
   const [account_title,setAccount_title] = useState("");
   const [account,setAccount] = useState("");
   const [number,setNumber] = useState("");
   const [description,setDescription] = useState("");
   const [att_File,setAtt_File] = useState();
  return (
    <div>
      <Modal
        open={open}
        onClose={closeHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className={classes["title"]} id="modal-modal-title" variant="h6" component="h2" >
            Create Account Data
          </Typography>
        
         <AccountTitle account_title={account_title} setAccount_title={setAccount_title} />
         <Account account={account} setAccount={setAccount} />
        
         <div  className={classes["form-control"]}>
         <p>Date</p>
         <Date />
         </div>
         <Number number={number} setNumber={setNumber} />
         <AttachFile att_File={att_File} setAtt_File={setAtt_File} />
         <Description description={description} setDescription={setDescription} />
     
        <div style={{display:"flex",justifyContent:"flex-end",marginTop:20}}>
          <Button variant="contained">Save</Button>
        </div>
        </Box>
      </Modal>
    </div>
  );
};

export default  CreateAccountDataModal ;

const AccountTitle = ({account_title,setAccount_title})=>{
  return(
    <div className={classes["form-control"]}>
    <p>Account Title</p>
    <FormControl fullWidth>
    <Select size="small" value={account_title}
     placeholder="Account Title"
    onChange={(e)=>{setAccount_title(e.target.value)}}
    >
     {
        accountTitle.map((title,index)=>
        (<MenuItem key={index} value={title.name}>
        {title.name}
         </MenuItem>)
        ) 
     }
    </Select>
    </FormControl>
    </div>
  )
}

const Account = ({account,setAccount})=>{
  return(
    <div className={classes["form-control"]}>
    <p>Account</p>
    <FormControl fullWidth>
    <TextField size="small" value={account} onChange={(e)=>{setAccount(e.target.value)}} />
    </FormControl>
    </div>
  )
}

const Number = ({number,setNumber})=>{
  return(
    <div className={classes["form-control"]}>
    <p>Number</p>
    <FormControl fullWidth>
    <TextField size="small" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
    </FormControl>
    </div>
  )
}

const AttachFile = ({att_File,setAtt_File})=>{
  return(
    <div className={classes["form-control"]}>
    <p>Attach File</p>
    <FormControl fullWidth>
    <TextField size="small" type="file" value={att_File} onChange={(e)=>{setAtt_File(e.target.value)}} />
    </FormControl>
    </div>
  )
 
}

const Description = ({description,setDescription})=>{
  return(
    <div className={classes["form-control"]}>
    <p>Description</p>
    <FormControl fullWidth>
    <textarea rows="7" cols="50" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
    </FormControl>
    </div>
  )
}