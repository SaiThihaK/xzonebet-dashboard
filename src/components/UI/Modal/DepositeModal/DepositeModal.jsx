import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {toast} from "react-toastify"
import axios from "axios";
import { PostMethod } from "../../../../services/api-services";
import { logoutHandler } from "../../../Sidebar/Sidebar";


const DepositeModal = ({ 
  open, 
  closeHandler ,
  setNum,
  id,
  num,
  AlertToast,
  setID,
  setValue
}) => {
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
  PostMethod(`api/deposit/action/${id}`,

  {
    status:"rejected",
    remark:accounting_remark
  }
  ));

  if(data.status="success"){
    closeHandler();
    setNum(num+1);
    AlertToast(toast.success,data.message);
    setValue("")
    setID("");
    return;
  }
  if(data.status="error"){
    closeHandler();
    AlertToast(toast.success,data.message);
    setValue("");
    return;
  }
  }catch(error){
    if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
    logoutHandler();
    }
  }
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={closeHandler}
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
              <Button onClick={closeHandler} variant="contained" color="error">
                Cancel
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default DepositeModal;
