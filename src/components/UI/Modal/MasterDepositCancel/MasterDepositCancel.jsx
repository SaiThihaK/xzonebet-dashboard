import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { PostMethod } from "../../../../services/api-services";
import { toast } from "react-toastify";
import { logoutHandler } from "../../../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #FFF",
  borderRadius: "0.5rem",
  overflowY: "auto",
  maxHeight: "calc(100vh - 100px)",
  p: 4,
};

const MasterDepositCancel = ({ open, handleClose,setNum,id,num,route}) => {
  const [accounting_remark,setAccounting_remark] = useState("");
  const navigate = useNavigate();
  const confirmHandler = async(e)=>{
  e.preventDefault();
  if(!accounting_remark){
    toast.warning("Please enter remark")
    return;
  }
  try{
  const {data} = await axios.request(
  PostMethod(`api/affiliate-register-lists/rejet/${id}`,
  {
  rejected_reason:accounting_remark,
  status:"rejected"
 }
  ));
  // console.log(data);
  if(data.status="success"){
    handleClose();
   
    toast.success(data.message);
    setAccounting_remark('');
    if(num){
      setNum(num+1);
    }
    if(route){
      navigate(route)
    }
    return;
  }
  if(data.status="error"){
    handleClose();
  toast.error(data.message);
    setAccounting_remark('');
    return;
  }
  }catch(error){
    toast.error(error.response.data.message)
    if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
    logoutHandler();
    }
  }
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Remark
          </Typography>
          <form action="">
            <textarea style={{
                width: '100%',
                outline: 'none',
                border: '1px solid #ababab',
                margin: '10px 0',
                borderRadius: '0.5rem',
                resize: 'none',
                padding: '10px',
                color: "#464646",
                fontSize: '16px'
            }} name="" 
            id="" placeholder="example ...."
              rows="5"
              value={accounting_remark}
               onChange={(e)=>setAccounting_remark(e.target.value)}
               
               />
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "center" }}
            >
              <Button onClick={(e)=>{
                  confirmHandler(e);

              }} variant="contained" type="submit" color="success">
                Confirm
              </Button>
              <Button onClick={handleClose} variant="contained" color="error">
                Cancel
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default MasterDepositCancel;
