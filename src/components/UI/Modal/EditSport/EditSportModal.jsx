import React,{useEffect, useState} from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button, Stack, TextField } from "@mui/material";
import axios from "axios";
import { PostMethod } from "../../../../services/api-services";
import { toast } from "react-toastify"; 
import KSHFunction from "../../../../services/KSHFunction";
import classes from "./EditSportModal.module.css"
import { logoutHandler } from "../../../Sidebar/Sidebar";
const style = {
  position: "absolute",
  overflowY: "auto",
  maxHeight: "calc(100vh - 150px)",
  top: "50%",
  left: "60%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

export default function EditSportModal({
  handleClose,
  open,
  render,
  setRender,
  id
}) {
    const [name,setname] = useState('');
    const [logo,setlogo] = useState({});
    const [description,setDescription] = useState('');
    const logoChange = (e) => setlogo(e.target.files[0]);

  const {data} = KSHFunction(`api/sport-categories/${id}`,[id]);
  console.log(data);

 useEffect(()=>{
   setname(data?.name);
   setDescription(data?.description);
   return ()=>{
     setname("");
     setDescription("");
   }
 },[id])
const EditHandler = async()=>{
  try{
 let formdata = new FormData();
 formdata.append("name",name);
 formdata.append("img",logo);
 formdata.append("description",description);
 const response = await axios.request(PostMethod(`api/sport-categories/${id}`,formdata));
 console.log(formdata)
  }catch(error){
    toast.error(error.response.data.message);
    if(error.response.data.status==="401"){
      logoutHandler();
    }
  }
}
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        disableScrollLock={true}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
         <div className={classes["title"]}>
             <h2>Create Sport</h2>
         </div>
            <div className={classes["form-container"]}>
            <label className={classes["form-label"]}>Name</label>
            <TextField size="small" fullWidth value={name} onChange={(e)=>setname(e.target.value)} />
            </div>
            <div className={classes["form-container"]}>
            <label>Choose Provider Logo</label>
            <TextField   variant="standard" type="file" accept="image/png, image/jpeg" onChange={logoChange} />
            </div>
            <div className={classes["form-container"]}>
            <label>Description</label>
            <textarea  rows="4" cols="50" style={{width:"100%",fontSize:14,marginTop:5}} value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            </div>
            <Stack direction="row" style={{display:"flex",justifyContent:"center",marginTop:15}} spacing={3}>
                <Button variant="contained" onClick={EditHandler}>Edit</Button>
                <Button variant="contained" color="error"
                onClick={()=>{setname("");setDescription("");handleClose();}}
                >Cancel</Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
