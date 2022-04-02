import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import classes from "./ForgetPasswordModal.module.css"

const ForgetPasswordModal= ({ open, handleClose}) => {
 
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    minHeight:400,
    bgcolor: "background.paper",
    // border: "1px solid #FFF",
    borderRadius: "0.5rem",
    p: 4,
  };
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
         
            <div className={classes["grid-container"]}>
             <div className={classes["grid-item"]}>
             <h3>Recovery </h3>
             </div>
             <div className={classes["grid-item"]}>

             </div>
            </div>

        </Box>
      </Modal>
    </div>
  );
};

export default ForgetPasswordModal;
