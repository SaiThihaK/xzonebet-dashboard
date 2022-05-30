import { Button, Stack ,TextField} from '@mui/material';
import React, { useState,useEffect } from 'react'
import classes from "./Benefit.module.css"
import PageTitleCard from "../../../components/UI/PageTitleCard/PageTitleCard"
import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import CustomGetFunction from '../../../services/CustomGetFunction';
import { PostMethod, PutMethod } from '../../../services/api-services';
import { toast } from 'react-toastify';
import  axios from 'axios';
import CustomLoading from '../../../components/CustomLoading/CustomLoading';
import { stateToHTML } from "draft-js-export-html";
import { EditorState, ContentState, convertFromHTML } from 'draft-js'
const Benefit = () => {
  const [render,setRender] = useState(false);
  const {data,loading} = CustomGetFunction(`api/xzonebet-affiliates/content`,[render]);
  console.log(data);
  const [editorState, setEditorState] = useState(() =>

EditorState.createWithContent(
  ContentState.createFromBlockArray(
    convertFromHTML(`<div> ${data?.content1_detail}  </div> ` )
  )
  ));
  const [title,setTitle] = useState("");
 
  useEffect(()=>{
    setTitle(data?.content1_title)
    setEditorState(
      () =>

EditorState.createWithContent(
  ContentState.createFromBlockArray(
    convertFromHTML(`<div> ${data?.content1_detail}  </div> ` )
  )
  )
    );
  },[data])     
    
    const [open,setOpen] = useState(false);
    const handleOpen = ()=>setOpen(true);
   const handleClose= ()=>setOpen(false);

  const submitHandler = async()=>{
    console.log(title);
    try{
const response =await  axios.request(PutMethod(`api/xzonebet-affiliates/content`,{
  content1_title:title,
  content1_detail:stateToHTML(editorState.getCurrentContent())
}));
console.log(response);
if(response.data.status==="success"){
  toast.success(response.data.message);
  return
}
if(response.data.status === "error"){
  toast.error(response.data.message);
  setRender(!render);
  handleClose();
  return;
}
    }catch(error){
    console.log(error);
    toast.error(error.response.data.message)
    }
  }
     return (
         <>
     <PageTitleCard title="Benefits">
     <div className="card-body">
            {!open ? (
             loading ? (
            <p className="card-text" style={{padding: "10px"}}>
            {
                      <div className="list-style" dangerouslySetInnerHTML={{__html:   data.content1_detail }} />
                    }
             </p>):<CustomLoading /> ):(
            
            <div style={{ border: "1px solid  rgba(102, 99, 99, 0.559)",backgroundColor: 'white', padding: '2px', minHeight: '400px',marginRight: '10px',marginLeft: '10px',marginTop: "10px" }}>
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
            />
          </div>            
              //  <textarea value={textValue}   onChange={(e)=>setTextValue(e.target.value)}   rows="8"  />
               )}
               </div>
    </PageTitleCard>
         <div className={classes["card-body"]}>
    {open &&<Stack direction="row" spacing={3} style={{display:"flex",justifyContent:"flex-end",marginTop:20,marginRight:20}}>
       <Button onClick={()=>{submitHandler();}} variant="contained" >Confirm</Button>
       <Button onClick={()=>{handleClose()}}  variant="contained" color="error">Cancel</Button>
       </Stack> }
       {!open &&<Stack direction="row" spacing={3} style={{display:"flex",justifyContent:"flex-end",marginTop:20,marginRight:20}}>
        <Button onClick={handleOpen} variant="contained" color="success">Edit</Button>
        </Stack> } 
       </div>
       </>
     )
}

export default Benefit