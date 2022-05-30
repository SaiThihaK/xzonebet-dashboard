import { Delete, Edit } from '@mui/icons-material'
import { IconButton,Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AnswerQuestionModal from '../../../components/UI/Modal/AnswerQuestion/AnswerQuestionModal'
import PageTitleCard from '../../../components/UI/PageTitleCard/PageTitleCard'
import classes from "./AnswerQuestion.module.css"
import CustomGetFunction from "../../../services/CustomGetFunction"
import axios from 'axios';
import CustomLoading from '../../../components/CustomLoading/CustomLoading'
import { toast } from 'react-toastify'
import { PostMethod, PutMethod } from '../../../services/api-services'

const AnswerQuestion = () => {
  const [open,setOpen] = useState(false);
 
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [render,setRender] = useState(false);
  const [editOpen,setEditOpen] = useState(false);
  const editOpenHandler = ()=>setEditOpen(true);
  const editCloseHandler = ()=>setEditOpen(false);
  const [id,setId] = useState('1');
  const handleOpen = ()=>setOpen(true);
  const handleClose = ()=>setOpen(false);
  const {data,loading} = CustomGetFunction(`api/xzonebetaffiliate/faqs`,[render]);
  const {data:detailQuestion} = CustomGetFunction(`api/xzonebetaffiliate/${id}/faq-edit`,[id]);
  const createQuestion = async()=>{
    try{
      const response = await axios.request(PostMethod("api/xzonebetaffiliate/faq/create",{
        title,
        description,
      }));
      if(response.data.status==="success"){
       toast.success(response.data.message);
       setRender(!render);
       handleClose();
       setTitle("");
       setDescription("");
       return;
      }
      if(response.data.status==="error"){
      toast.error(response.data.message);
      return;
      }
    }catch(error){
    console.log(error);
    toast.error(error.response.data.message);
    }
  }

  const editQuestion = async()=>{
    try{
   const response = await axios.request(PutMethod(`api/xzonebetaffiliate/${id}/faq-edit`,{
    title,
    description
   }));
   if(response.data.status==="success"){
     toast.success(response.data.message);
     setRender(!render);
     setTitle("");
     setDescription("");
     editCloseHandler();
     return
   }
   if(response.data.status==="error"){
     toast.error(response.data.message);
     return;
   }
    }catch(error){
      toast.error(error.response.data.message);
      return;
    }
  }


  console.log(data);
   return (
    <PageTitleCard title="Answer Question">
     
     {
       loading ? ( <>
       <div className={classes["card-body"]}>
       <div className={classes["btn-container"]}>
         <Button variant="contained" onClick={handleOpen}>Create Question and Anwer</Button>
       </div>
       {
         data.map((faq,index)=>(
          <div className={classes["form"]} key={index}>
          <div style={{width:"100%"}}>
          <h4>{faq.title}</h4>
          <div style={{marginTop: "10px"}}>
        {
          faq.description
        }
          </div>
          </div>
          <div className={classes["btn-container"]}>
          <IconButton onClick={()=>{
            editOpenHandler();
            setId(faq.id)
            }} sx={{marginLeft: "25px ",height: "fit-content"}} >
          <Edit />
          </IconButton>
          <IconButton>
          <Delete />
          </IconButton>
          </div>
          
     </div>
         ))
       }
    
     </div>
     <AnswerQuestionModal 
     open={open} 
     handleClose={handleClose} 
     title={title} 
     setTitle={setTitle}
     submitHandler={createQuestion}
     setDescription={setDescription}
     render={render}
     />
      <AnswerQuestionModal 
     open={editOpen} 
     handleClose={editCloseHandler} 
     title={title} 
     setTitle={setTitle}
     data={detailQuestion}
     submitHandler={editQuestion}
     setDescription={setDescription}
     render={render}
     />
     </> 
  ):(<CustomLoading />)
     }
      
    </PageTitleCard>
  )
}

export default AnswerQuestion