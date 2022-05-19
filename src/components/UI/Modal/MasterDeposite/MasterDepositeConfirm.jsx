import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import axios from "axios";

const MasterDepositeConfirm = ({ open, handleClose,id,submitHandler,handleAmmount}) => {
 
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #FFF",
    borderRadius: "0.5rem",
    p: 4,
    overflowY: "auto",
  maxHeight: "calc(100vh - 100px)",
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter the amount
          </Typography>
          <form action="">
            <TextField sx={{width:"100%",margin:"10px 0px"}} label="Ammount" onChange={handleAmmount} type="number"  />
            <Stack
              direction="row"
              spacing={3}
              sx={{ justifyContent: "center" }}
            >
              <Button onClick={(e)=>{
                submitHandler(id);

              }} variant="contained"  color="success">
                Confirm
              </Button>
              <Button onClick={handleClose} variant="contained" color="error">
                Cancel
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default MasterDepositeConfirm;
