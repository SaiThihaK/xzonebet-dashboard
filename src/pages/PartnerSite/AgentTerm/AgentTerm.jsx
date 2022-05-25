import { Button, Stack } from '@mui/material';
import React, {useEffect,useState } from 'react'
import PageTitleCard from '../../../components/UI/PageTitleCard/PageTitleCard'
import "./AgentTerm.css"
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState, convertFromHTML } from 'draft-js'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import CustomGetFunction from "../../../services/CustomGetFunction"
import CustomLoading from '../../../components/CustomLoading/CustomLoading';
import { PutMethod } from '../../../services/api-services';
import axios from 'axios';
import { toast } from 'react-toastify';
import { stateToHTML } from "draft-js-export-html";
const AgentTerm = () => {
  const[render,setRender] = useState(false);
 const [open,setOpen] = useState(false);
 const handleOpen = ()=>setOpen(true);
const handleClose= ()=>setOpen(false);
const {data,loading} = CustomGetFunction(`api/xzonebet-affiliates/content`,[render]);
// const [data,loading] = CustomGetFunction("",[]);
const [editorState, setEditorState] = useState(() =>

EditorState.createWithContent(
  ContentState.createFromBlockArray(
    convertFromHTML(`<div> ${data?.agent}  </div> ` )
  )
  ));
  useEffect(()=>{
    setEditorState(
      () =>

EditorState.createWithContent(
  ContentState.createFromBlockArray(
    convertFromHTML(`<div> ${data?.agent}  </div> ` )
  )
  )
    );
  },[data])
  const submitHandler = async()=>{
    // console.log(title);
    try{
const response =await  axios.request(PutMethod(`api/xzonebet-affiliates/content`,{
  agent:stateToHTML(editorState.getCurrentContent())
}));
console.log(response);
if(response.data.status==="success"){
  toast.success(response.data.message);
  handleClose();
  setRender(!render)
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
  // const createHandler = async()=>{
//   try{
//     const response = await axios.request(PutMethod(`api/xzonebet-affiliates/content`,{

//     }));
//     if(response.data.status==="success"){
//       toast.success(response.data.status);
//       return
//     }
//     if(response.data.status==="error"){
//       toast.error(response.data.message);
//       return;
//     }
//   }catch(error){
//     toast.error(error.response.data.message);

//   }
  
// } 
  return (
      <>
  <PageTitleCard title="Agent Term and Condition">
      <div className="card-body">
      {!open ? (
             loading ? (
            <p className="card-text" style={{padding: "10px"}}>
            {
                      <div className="list-style" dangerouslySetInnerHTML={{__html:   data.agent }} />
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
             <div className="card-body">
 {open &&<Stack direction="row" spacing={3} style={{display:"flex",justifyContent:"flex-end",marginTop:20,marginRight:20}}>
    <Button onClick={()=>{submitHandler();}} variant="contained" >Confirm</Button>
    <Button onClick={()=>{handleClose()}}  variant="contained" color="error">Cancel</Button>
    </Stack> }
    {!open &&<Stack direction="row" spacing={3} style={{display:"flex",justifyContent:"flex-end",marginTop:20,marginRight:20}}>
     <Button onClick={handleOpen} variant="contained" color="success">Edit</Button>
     </Stack> } 
    </div>    
        </div>
 </PageTitleCard>
    
    </>
  )
}

export default AgentTerm