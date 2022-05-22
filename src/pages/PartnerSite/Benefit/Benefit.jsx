import { Button, Stack ,TextField} from '@mui/material';
import React, { useState,useEffect } from 'react'
import classes from "./Benefit.module.css"
import PageTitleCard from "../../../components/UI/PageTitleCard/PageTitleCard"
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import CustomGetFunction from '../../../services/CustomGetFunction';
import { PostMethod, PutMethod } from '../../../services/api-services';
import { toast } from 'react-toastify';
import  axios from 'axios';
import CustomLoading from '../../../components/CustomLoading/CustomLoading';
const Benefit = () => {
  const [render,setRender] = useState(false);
  const {data,loading} = CustomGetFunction(`api/xzonebet-affiliates/content`,[render]);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [title,setTitle] = useState("");
 
  useEffect(() => {
    console.log(editorState);
    setTitle(data.content1_title);
  }, [editorState,data]);      
    
    const [open,setOpen] = useState(false);
    const handleOpen = ()=>setOpen(true);
   const handleClose= ()=>setOpen(false);

  const submitHandler = async()=>{
    console.log(title);
    try{
const response =await  axios.request(PutMethod(`api/xzonebet-affiliates/content`,{
  content1_title:title,
  content1_detail:editorState.getCurrentContent().getPlainText()
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
         <div className={classes["card-body"]}>
               {!open ? (
                <>
                {
                  loading ? (<div>
                    <div className={classes["card-title"]}>{data.content1_title}</div>
                    <p className={classes["card-text"]}>
                         {data.content1_detail}
                     </p>
                     </div>):(<CustomLoading />)
                }
                
                </>
               
                ):(
                  <div className={classes["form-container"]}>
                   <div className={classes["form"]}>  
                     <label>Title</label>
                     <TextField fullWidth size="small" value={title} onChange={(e)=>{
                       setTitle(e.target.value);
                     }} />
                   </div>
                   <div className={classes["form"]}>
                    <label>Content</label>
                    <div style={{ border: "1px solid  rgba(102, 99, 99, 0.559)",borderRadius: "5px", backgroundColor: 'white', padding: '2px', minHeight: '400px',marginRight: '10px',marginTop: "10px" }}>
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
            />
          </div>
            
                   </div>
                  
                  </div>
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