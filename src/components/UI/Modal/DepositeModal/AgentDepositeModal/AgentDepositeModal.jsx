import React, { useState } from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import classes from "./AgentDepositeModal.module.css"
import { Avatar, Button, FormControl, TextField } from "@mui/material";




const AgentDepositeModal = ({ 
  open, 
  closeHandler ,
 

  
}) => {
  

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
           <p>CB pay ဖုန်းနံပါတ်</p>
           <p>CB pay နာမည်</p>
           </div>
           
           <FormControl className={classes["btn-container"]} fullWidth>
           <Button variant="contained">Confirm</Button>
           </FormControl>
        </Box>
      </Modal>
    </div>
  );
};

export default AgentDepositeModal;
