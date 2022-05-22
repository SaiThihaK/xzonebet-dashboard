import { Button, Stack ,TextField} from '@mui/material';
import React, { useState,useEffect } from 'react'
import classes from "./HeroContent.module.css"
import PageTitleCard from "../../../components/UI/PageTitleCard/PageTitleCard"
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import CustomGetFunction from "../../../services/CustomGetFunction"
import CustomLoading from "../../../components/CustomLoading/CustomLoading"
import axios from 'axios';
import { PostMethod, PutMethod } from '../../../services/api-services';
import { toast } from 'react-toastify';
const HeroContent = () => {
  const [render,setRender] = useState(false);
  const {data,loading} = CustomGetFunction(`api/xzonebet-affiliates/content`,[render]);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
    setTitle(data.banner_title)
  }, [editorState,data]);      
    const [open,setOpen] = useState(false);
    const handleOpen = ()=>setOpen(true);
   const handleClose= ()=>setOpen(false);
const [title,setTitle] = useState("");

console.log(data);
const submitHandler = async()=>{
  try{
 const response = await axios.request(PutMethod(`api/xzonebet-affiliates/content`,{
   banner_title:title
 }));
 if(response.data.status==="success"){
   toast.success(response.data.message);
   setRender(!render)
   handleClose();
   return;
 }
 if(response.data.status==="error"){
   toast.error(response.data.message);
   return;
 }
  }catch(error){
    toast.error(error.response.data.message);
  }
}
     return (
         <>
     <PageTitleCard title="Hero Content">
         <div className={classes["card-body"]}>
               {!open ? (
               <div>
                 {
                   loading ? ( <div className={classes["card-title"]}>{data.banner_title}</div>):(<CustomLoading />)
                 }
              
               {/* <p className={classes["card-text"]}>
               Lublic should always verify the authenticity of the information by contacting the relevant gove
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ducimus.
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, accusantium!
                </p> */}
                </div>
                ):(
                  <div className={classes["form-container"]}>
                   <div className={classes["form"]}>  
                     <label>Title</label>
                     <TextField fullWidth size="small" value={title} onChange={(e)=>setTitle(e.target.value)} />
                   </div>
                   {/* <div className={classes["form"]}>
                    <label>Content</label>
                    <div style={{ border: "1px solid  rgba(102, 99, 99, 0.559)",borderRadius: "5px", backgroundColor: 'white', padding: '2px', minHeight: '400px',marginRight: '10px',marginTop: "10px" }}>
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
            />
          </div>
            
                   </div> */}
                  
                  </div>
                  )}
                  
           </div>
    </PageTitleCard>
         <div className={classes["card-body"]}>
    {open &&<Stack direction="row" spacing={3} style={{display:"flex",justifyContent:"flex-end",marginTop:20,marginRight:20}}>
       <Button onClick={()=>{submitHandler()}} variant="contained" >Confirm</Button>
       <Button onClick={()=>{handleClose()}}  variant="contained" color="error">Cancel</Button>
       </Stack> }
       {!open &&<Stack direction="row" spacing={3} style={{display:"flex",justifyContent:"flex-end",marginTop:20,marginRight:20}}>
        <Button onClick={handleOpen} variant="contained" color="success">Edit</Button>
        </Stack> } 
       </div>
       </>
     )
}

export default HeroContent