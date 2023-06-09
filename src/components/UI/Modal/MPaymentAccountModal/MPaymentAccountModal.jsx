import React,{useEffect, useState} from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import classes from "./MPaymentAccountModal.module.css"


import axios from "axios";
import { toast } from "react-toastify";
import { getMethod } from "../../../../services/api-services";




const style = {
  position: "absolute",
  top: "50%",
  left: "60%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  overflowY: "auto",
  maxHeight: "calc(100vh - 100px)",
  p: 4,
  borderRadius: 3,
};

export default function MPaymentAccountModal({
  handleClose,
  open,
  num,
  setNum
}) {
  const [type,setType] = useState("");
  const handleChange = (e)=>setType(e.target.value);
  const ToastAlert = (msg) => msg;

//   const FetchPaymentType = async()=>{
//       const response = await axios.request(getMethod(`/api/dashboard/payment-types`));
//       console.log(response.data);
//   }
//   useEffect(()=>{
//  FetchPaymentType();
//   },[])
const Arr = [{name:"E-wallet"},{name:"Cash"},{name:"Banking"}];
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
              Create Payment Account
            </Typography>
            <FormControl sx={{ width: "100%" }} className={classes["form-container"]}>
            <label>Select Payment Type</label>
            <Select
              value={type}
              onChange={handleChange}
              inputProps={{ "aria-label": "Without label" }}
              size="small"
              sx={{ backgroundColor: "#f3f3f3" }}
            >
            {
                Arr.map((a,index)=>(
                   <MenuItem key={index} value={a.name}>{a.name}</MenuItem>
                ))
            }
            </Select>
            </FormControl>
            <FormControl sx={{ width: "100%" }} className={classes["form-container"]}>
            <label>Select Payment Provider</label>
            <Select
              value={type}
              onChange={handleChange}
              inputProps={{ "aria-label": "Without label" }}
              size="small"
              sx={{ backgroundColor: "#f3f3f3" }}
            >
            {
                Arr.map((a,index)=>(
                   <MenuItem key={index} value={a.name}>{a.name}</MenuItem>
                ))
            }
            </Select>
            </FormControl>
            <FormControl sx={{ width: "100%" }} className={classes["form-container"]}>
                <label>Phone number or Bank account</label>
                <TextField size="small" />
            </FormControl>
            <FormControl sx={{ width: "100%" }} className={classes["form-container"]}>
                <label>Owner Name</label>
                <TextField size="small" />
            </FormControl >
            <div className={classes["btn-container"]}>
            <Button
                variant="contained"
                color="success"
                onClick={(e) => {
                  handleClose();
                
                }}
              >
                Create
              </Button>
            </div>
             
           
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}