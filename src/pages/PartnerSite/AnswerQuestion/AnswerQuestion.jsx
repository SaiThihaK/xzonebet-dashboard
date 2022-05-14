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
      <p>This is Question 1</p>
      <p>This is Answer 1</p>
     <IconButton>
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