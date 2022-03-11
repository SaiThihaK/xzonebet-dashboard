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

const MasterDepositCancel = ({ open, handleClose,setNum,id,num,alertToast}) => {
  const [accounting_remark,setAccounting_remark] = useState("");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #FFF",
    borderRadius: "0.5rem",
    p: 4,
  };

  const confirmHandler = async(e)=>{
  e.preventDefault();
  if(!accounting_remark){
    return;
  }
  try{
  const {data} = await axios.request(
  PostMethod(`/api/affiliate-register-lists/deposit-rejet/${id}`,
  {accounting_remark:accounting_remark}
  ));
  console.log(data);
  if(data.status="success"){
    handleClose();
    setNum(num+1);
    alertToast(data.message);
    return;
  }
  if(data.status="error"){
    handleClose();
    // alertToast(data.message);
    return;
  }
  }catch(error){
    console.log(error);
    return;
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
