import React,{useEffect, useState} from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import classes from "./EditSportModal.module.css"
import { Button, Stack, TextField } from "@mui/material";
import axios from "axios";
import { PostMethod } from "../../../../services/api-services";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
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
  setRender
}) {
    const [name,setname] = useState('');
    const [logo,setlogo] = useState({});
    const [description,setDescription] = useState('');
    const logoChange = (e) => setlogo(e.target.files[0]);

   const createHandler = async()=>{
    let formdata = new FormData();
    formdata.append("name",name);
    formdata.append("img",logo);
    formdata.append("description",description);
    try{
    const response = await axios.request(PostMethod("api/sport-categories",formdata));
    console.log(response);
    if(response.data.success){
        toast.success(response.data.message);
        setname('');
        setDescription("");
        handleClose();
        setRender(!render);
    }
    if(!response.data.success){
        toast.error(response.data.message)
    }
    }catch(error){
        toast.error(error.response.data.message)
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
                <Button variant="contained" color="success" onClick={createHandler}>Create</Button>
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
