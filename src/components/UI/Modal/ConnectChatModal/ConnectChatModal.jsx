import React, { useState } from "react";
import Box from "@mui/material/Box";
import classes from "./ConnectChatModal.module.css"
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, FormControl, Stack, TextField } from "@mui/material";



const ConnectChatModal = ({ 
  open, 
  closeHandler,
  id,
  setId,
  password,
  setPassword,
}) => {


  const style = {
    position: "absolute",
    top: "50%",
    left: "60%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #FFF",
    borderRadius: "0.5rem",
    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={closeHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className={classes["title"]}>
            Login
          </Typography>
         <FormControl fullWidth style={{marginBottom:20}}>
             <TextField size="small" value={id} onChange={(e)=>setId(e.target.value)}  placeholder="Enter Id"/>
         </FormControl>
         <FormControl fullWidth>
             <TextField size="small" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
         </FormControl>
         <Stack direction="row" spacing={2} style={{marginTop:30}}>
          <Button variant="contained">Connect with Chat</Button>
          <Button variant="contained" onClick={closeHandler} color="error">Cancel</Button>
         </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default ConnectChatModal;
