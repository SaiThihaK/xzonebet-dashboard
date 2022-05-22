import React, { useState,useEffect } from 'react'
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Box from "@mui/material/Box";
import classes from "./AnswerQuestion.module.css"
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField,Stack } from "@mui/material";
const AnswerQuestionModal = ({ 
  open, 
  handleClose,
  index,
  title,
  setTitle,
  submitHandler,
  setDescription,
  data
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
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
    setDescription(editorState.getCurrentContent().getPlainText());
  }, [editorState,data]);  
   
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
            <TextField size="small" fullWidth value={title} onChange={(e)=>setTitle(e.target.value)} />
          </div>
          <div className={classes["form"]}>
            <label>Answer</label>
            <div style={{ border: "1px solid  rgba(102, 99, 99, 0.559)",borderRadius: "5px", backgroundColor: 'white', padding: '2px',height: '300px',overflow: "hidden" }}>
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
            />
          </div>
            
          </div>
           <Stack direction="row" style={{display:"flex",justifyContent:"center"}} spacing={4}>
             <Button variant="contained" onClick={submitHandler}>Confirm</Button>
             <Button variant="contained" color="error" onClick={handleClose}>Cancel</Button>
           </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default AnswerQuestionModal;