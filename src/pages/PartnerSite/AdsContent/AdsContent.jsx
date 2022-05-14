import { Button, Stack ,TextField} from '@mui/material';
import React, { useState } from 'react'
import PageTitleCard from '../../../components/UI/PageTitleCard/PageTitleCard'
import classes from "./AdsContent.module.css"
const AdsContent = () => {
  const [textValue,setTextValue] = useState();
    const [open,setOpen] = useState(false);
    const handleOpen = ()=>setOpen(true);
   const handleClose= ()=>setOpen(false);
     return (
         <>
     <PageTitleCard title="Advertisement Content">
         <div className={classes["card-body"]}>
               {!open ? (
               <div>
               <div className={classes["card-title"]}>This is Title</div>
               <p className={classes["card-text"]}>
               Lublic should always verify the authenticity of the information by contacting the relevant gove
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ducimus.
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, accusantium!
                </p>
                </div>
                ):(
                  <div className={classes["form-container"]}>
                   <div className={classes["form"]}>  
                     <label>Title</label>
                     <TextField fullWidth size="small" />
                   </div>
                   <div className={classes["form"]}>
                    <label>Content</label>
                   <textarea value={textValue}   onChange={(e)=>setTextValue(e.target.value)}   rows="8" cols="105" />
                   </div>
                  
                  </div>
                  )}
                  
           </div>
    </PageTitleCard>
         <div className={classes["card-body"]}>
    {open &&<Stack direction="row" spacing={3} style={{display:"flex",justifyContent:"flex-end",marginTop:20,marginRight:20}}>
       <Button onClick={()=>{handleClose();}} variant="contained" >Confirm</Button>
       <Button onClick={()=>{handleClose()}}  variant="contained" color="error">Cancel</Button>
       </Stack> }
       {!open &&<Stack direction="row" spacing={3} style={{display:"flex",justifyContent:"flex-end",marginTop:20,marginRight:20}}>
        <Button onClick={handleOpen} variant="contained" color="success">Edit</Button>
        </Stack> } 
       </div>
       </>
     )
}

export default AdsContent