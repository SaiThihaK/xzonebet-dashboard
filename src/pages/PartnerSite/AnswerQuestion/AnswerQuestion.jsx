import { Delete, Edit } from '@mui/icons-material'
import { IconButton,Button } from '@mui/material'
import React, { useState } from 'react'
import AnswerQuestionModal from '../../../components/UI/Modal/AnswerQuestion/AnswerQuestionModal'
import PageTitleCard from '../../../components/UI/PageTitleCard/PageTitleCard'
import classes from "./AnswerQuestion.module.css"
const AnswerQuestion = () => {
  const [open,setOpen] = useState(false);
  const handleOpen = ()=>setOpen(true);
  const handleClose = ()=>setOpen(false)
   return (
    <PageTitleCard title="Answer Question">
        <div className={classes["card-body"]}>
          <div className={classes["btn-container"]}>
            <Button variant="contained" onClick={handleOpen}>Create Question and Anwer</Button>
          </div>
        <div className={classes["form"]}>
          <div>
          <h4>This is Question 1</h4>
      <div style={{marginTop: "10px"}}>  industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          </div>
     
     <IconButton sx={{marginLeft: "25px ",height: "fit-content"}} >
     <Edit onClick={handleOpen}/>
     </IconButton>
     <IconButton>
     <Delete />
     </IconButton>
        </div>
        </div>
        <AnswerQuestionModal open={open} handleClose={handleClose}/>
    </PageTitleCard>
  )
}

export default AnswerQuestion