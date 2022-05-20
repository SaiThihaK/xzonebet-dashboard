import { Button, Stack } from '@mui/material';
import React, {useEffect,useState } from 'react'
import PageTitleCard from '../../../components/UI/PageTitleCard/PageTitleCard'
import "./MasterTerm.css"
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const MasterTerm = () => {
 const [textValue,setTextValue] = useState();
 const [open,setOpen] = useState(false);
 const handleOpen = ()=>setOpen(true);
const handleClose= ()=>setOpen(false);
const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
  return (
      <>
  <PageTitleCard title="Master Term and Condition">
      <div className="card-body">
            {!open ? (<p className="card-text" style={{padding: "10px"}}>
            Lublic should always verify the authenticity of the information by contacting the relevant gove
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ducimus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, accusantium!
             </p>):(
            
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
    <Button onClick={()=>{handleClose();}} variant="contained" >Confirm</Button>
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

export default MasterTerm