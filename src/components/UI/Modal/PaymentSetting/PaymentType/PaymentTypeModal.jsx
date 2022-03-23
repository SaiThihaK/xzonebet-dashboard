import React,{useState} from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl, TextField } from "@mui/material";
import { PostMethod } from "../../../../../services/api-services";

import axios from "axios";
import { toast } from "react-toastify";
import { logoutHandler } from "../../../../Sidebar/Sidebar";



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

export default function PaymentTypeModal({
  handleClose,
  open,
  num,
  setNum
}) {
  const [type,setType] = useState("");
  const handleChange = (e)=>setType(e.target.value);
  const ToastAlert = (msg) => msg;

const submitHandler = async(e)=>{
  e.preventDefault();
  if(!type){
    ToastAlert(toast.warning("Please, provide the payment type"));
    return;
  }
  try{
   const response = await axios.request(PostMethod(`api/dashboard/payment-types`,{name:type}));
   console.log(response);
   if(response.data.status==="success"){
     setType("");
     ToastAlert(toast.success(response.data.message));
     setNum(num+1)
     return;
   }
  }catch(error){
    if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
    logoutHandler();
    }
  }
}


  // console.log(type);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Create New Payment
            </Typography>
            <FormControl sx={{ width: "100%" }} style={{marginTop:10}}>
            <TextField
              value={type}
              onChange={handleChange}
              label="Create Payment Type"
              inputProps={{ "aria-label": "Without label" }}
              size="small"
              sx={{ backgroundColor: "#f3f3f3" }}
            >
            </TextField>
            <div style={{marginTop: 20,display:"flex",justifyContent:"flex-end"}}>
            <Button
                variant="contained"
                color="success"
                style={{
                  
                  width: 80,
                }}
                onClick={(e) => {
                  handleClose();
                  submitHandler(e)
                }}
              >
                Create
              </Button>
            </div>
             
            </FormControl>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
