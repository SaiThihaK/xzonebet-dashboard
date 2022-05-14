import React, { useState } from "react";
import Box from "@mui/material/Box";
import classes from "./AnswerQuestion.module.css"
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField,Stack } from "@mui/material";



const AnswerQuestionModal = ({ 
  open, 
  handleClose ,
  index
}) => {


  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
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
          <Typography id="modal-modal-title" variant="h6" component="h2" className={classes["title"]}>
            Question and Answer 
          </Typography>
          <div className={classes["form"]}>
            <label>Question</label>
            <TextField size="small" fullWidth />
          </div>
          <div className={classes["form"]}>
            <label>Answer</label>
            <TextField size="small" fullWidth />
          </div>
           <Stack direction="row" style={{display:"flex",justifyContent:"center"}} spacing={4}>
             <Button variant="contained">Confirm</Button>
             <Button variant="contained" color="error">Cancel</Button>
           </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default AnswerQuestionModal;