import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import classes from "./ForgetPasswordModal.module.css"
import { Button, FormControl, Grid,IconButton, InputAdornment, TextField } from "@mui/material";
import { Email, Password, Phone } from "@mui/icons-material";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  minHeight:380,
  bgcolor: "background.paper",

  borderRadius: "0.5rem",
  p: 4,
};

const ForgetPasswordModal= ({ open, handleClose}) => {
const [toggle,setToggle] = useState(true);
const toggleMail = ()=>setToggle(true);
const togglePhone = ()=>setToggle(false);

  
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <h3>PASSWORD RECOVERY</h3>
          </div>
             <Grid container className={classes["grid-container"]}>
               <Grid item xs={6}>
               <div className={classes["tab"]} 
               onClick={toggleMail}
                style={
                 toggle? {color:"white",fill:"white",backgroundColor:"var(--secondary-color)"} : {color:"var(--secondary-color)",fill:"var(--secondary-color)",backgroundColor:"white"}
               }
               >
               <Email /> Email 
               </div>
               </Grid>
               <Grid item xs={6}>
               <div className={classes["tab"]} onClick={togglePhone} 
               style={
                 !toggle? {color:"white",fill:"white",backgroundColor:"var(--secondary-color)"} : {color:"var(--secondary-color)",fill:"var(--secondary-color)",backgroundColor:"white"}
               }
               >
               <Phone />Phone
               </div>
               </Grid>
             </Grid>
            {/* ----------------Input Grid */}
            <Grid container spacing={1}>
              <Grid item xs={6} className={classes["form-container"]}>
                <FormControl fullWidth>
                <TextField
              
                size="small" placeholder={toggle?"Enter Your Email":"Enter Your Phone"} 
                
                id="input-with-icon-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                     {
                       toggle ? <Email /> : <Phone />
                     }
                    </InputAdornment>
                 ),
                }}
                />
                </FormControl>

              </Grid>
              <Grid item xs={6} className={classes["instruction-text"]}>
                <p>
                To recover your password, enter the {toggle? "E-mail address":"Phone number"} you used for registration.
                </p>
                <p className={classes["second-text"]}>
                We will send you an {toggle ? "E-mail":"SMS"} with further instructions.
                </p>
              </Grid>
            </Grid>
            <FormControl fullWidth style={{marginTop:30}}>
              <Button variant="contained" color="error">Create New Password</Button>
            </FormControl>
        </Box>
      </Modal>
    </div>
  );
};

export default ForgetPasswordModal;
