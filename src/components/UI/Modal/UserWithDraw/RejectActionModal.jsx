import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { logoutHandler } from "../../../Sidebar/Sidebar";
import { toast } from "react-toastify";
import { PostMethod } from "../../../../services/api-services";

const RejectActionModal = ({ 
    open, 
    handleClose,id,
    AlertToast,
    num,
    setNum

}) => {
 
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
    overflowY: "auto",
    maxHeight: "calc(100vh - 100px)",
  };

  const [remark,setRemark] = useState("");

  const remarkHandler = (e)=>setRemark(e.target.value);
  const confirmHandler = async()=>{
    if(!remark){
      return;
    }
    try{
    const {data} = await axios.request(
    PostMethod(`api/user-withdraw/action/rejected/${id}`,
    {remark}
    ));
    // console.log(data);
    if(data.status="success"){
      handleClose();
      setNum(num+1);
      AlertToast(toast.success,data.message);
      return;
    }
    if(data.status="error"){
      handleClose();
      AlertToast(toast.error,data.message);
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
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            remark
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
            }} sx={{width:"100%",margin:"10px 0px"}} label="remark"
            onChange={remarkHandler}
            />
            <Stack
              direction="row"
              spacing={3}
              sx={{ justifyContent: "center" }}
            >
              <Button onClick={(e)=>{
                handleClose();
                confirmHandler();
              }} variant="contained"  color="success">
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

export default RejectActionModal;
