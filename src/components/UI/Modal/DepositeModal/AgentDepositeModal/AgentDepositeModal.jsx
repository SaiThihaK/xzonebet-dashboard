import React, { useState } from "react";
import Box from "@mui/material/Box";
import {ContentCopy} from '@mui/icons-material';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import classes from "./AgentDepositeModal.module.css"
import { Avatar, Button, FormControl, Icon, IconButton, TextField, Tooltip } from "@mui/material";

const style = {
    position: "absolute",
    top: "40%",
    left: "60%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "1px solid #FFF",
    borderRadius: "0.5rem",
    p: 4,
  }
  
const AgentDepositeModal = ({ 
  open, 
  closeHandler ,
}) => {


const bankNumberCopy =()=>{
    navigator.clipboard.writeText("Bank Number")
}
const BankAccountCopy = ()=>{
    navigator.clipboard.writeText("Bank Account")
}
  return (
    <div>
      <Modal
        open={open}
        onClose={closeHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           <div className={classes["avatar-container"]}>
            <Avatar src=""  variant="square" sx={{width:80,height:60}}/>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Bank Card Name
          </Typography>
           </div>
           
           <div className={classes["form-container"]}>
           
           <div className={classes["form-group-desc"]}>
          <label htmlFor="">Amount (Min. 1000.00 MMK)</label>
           <TextField 
           size="small" className={classes["form-group-desc-input"]}
           placeholder="1000.00"
           />
          </div>

          <div className={classes["form-group-desc"]}>
          <label htmlFor="">CB Pay Account Number</label>
           <TextField 
           size="small" className={classes["form-group-desc-input"]}
           placeholder="CB pay phone number"
           />
          
          </div>
          <div className={classes["form-group-desc"]}>
          <label htmlFor="">Transition ID</label>
           <TextField 
           size="small" className={classes["form-group-desc-input"]}
           placeholder="20 digit"
           />
          </div>
          </div>
           <div className={classes["account"]}>
           <p>CB pay ဖုန်းနံပါတ်-&nbsp;Bank Number
            <Tooltip title="Copy" placement="right-end">
            <IconButton onClick={bankNumberCopy}>
               <ContentCopy />
           </IconButton> 
            </Tooltip> 
          
            </p>
           <p>CB pay နာမည်-&nbsp;Bank  Account
           <Tooltip title="Copy" placement="right-end">
           <IconButton onClick={BankAccountCopy}>
                  <ContentCopy />
              </IconButton>
            </Tooltip>
              
            </p>
           </div>
           
           <FormControl fullWidth style={{marginTop:20}}>
           <Button variant="contained" onClick={closeHandler}>Confirm</Button>
           </FormControl>
        </Box>
      </Modal>
    </div>
  );
};

export default AgentDepositeModal;
