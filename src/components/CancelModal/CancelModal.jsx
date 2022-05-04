import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";



const CancelModal = ({ 
  open, 
  handleClose ,
  remark,
  setRemark,
  submitHandler
}) => {


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
        onClose={handleClose }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Remark
          </Typography>
          <form action="">
            <textarea style={{
                width: '100%',
                outline: 'none',
                border: '1px solid #ababab',
                margin: '10px 0',
                borderRadius: '0.5rem',
                resize: 'none',
                padding: '10px',
                color: "#464646",
                fontSize: '16px'
            }} name="" 
            id="" placeholder="example ...."
              rows="5"
              value={remark}
              onChange={(e)=>setRemark(e.target.value)}
        
               />
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "center" }}
            >
              <Button onClick={()=>{
               submitHandler()
              }} variant="contained" color="success">
                Confirm
              </Button>
              <Button onClick={handleClose } variant="contained" color="error">
                Cancel
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default CancelModal;