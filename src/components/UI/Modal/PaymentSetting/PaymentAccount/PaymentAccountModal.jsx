import React,{useState} from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl,Select,MenuItem, TextField, Input } from "@mui/material";
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

export default function PaymentAccountModal({
  handleClose,
  open,
}) {
  
  const methods = [{name:"E-wallet"},{name:"Banking"},{name:"PayPal"}]
 

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
              Create New Payment Account
            </Typography>
            <FormControl sx={{ width: "100%" }} style={{marginTop:10}}>
            <label>Select Payment Type</label>
            <Select
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              size="small"
              style={{marginBottom:30}}
              sx={{ backgroundColor: "#f3f3f3" }}
            > 
              {methods.map((item,index)=>(
                  <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
              ))}
            </Select>
            </FormControl>
            <FormControl sx={{ width: "100%" }} style={{marginTop:10}}>
            <label>Select Payment Provider</label>
            <Select
          placeholder="Payment Provider"
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          size="small"
          style={{marginBottom:30}}
          sx={{ backgroundColor: "#f3f3f3" }}
        >
          {methods.map((item,index)=>(
              <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
          ))}
        </Select>
        </FormControl>
        <FormControl sx={{width:"100%"}} style={{marginBottom:20}}>
        <label>Account or Phone Number</label>
        <TextField l size="small"   />
        </FormControl>
        
        <FormControl sx={{width:"100%"}} style={{marginBottom:20}}>
        <label>Name</label>
        <TextField  size="small"   />
        </FormControl>
            
            <div style={{marginTop: 20,display:"flex",justifyContent:"flex-end"}}>
            <Button
                variant="contained"
                color="success"
                style={{
                  
                  width: 80,
                }}
                onClick={() => {
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
