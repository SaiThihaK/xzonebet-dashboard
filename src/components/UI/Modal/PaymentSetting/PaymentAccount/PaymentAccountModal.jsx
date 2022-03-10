import React,{useEffect, useState} from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl,Select,MenuItem, TextField, Input, Avatar } from "@mui/material";
import axios from "axios";
import { getMethod } from "../../../../../services/api-services";
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
  num,
  setNum
}) {
  const [payment_type,setPayment_type] = useState([]);
  const [payment_typeValue,setPayment_typeValue] = useState("");
  const Payment_typeChange = (e)=>setPayment_typeValue(e.target.value);
  // --------PaymentProvider-------------------------//
  const [payment_provider,setPayment_provider] = useState([]);
  const [payment_providerValue,setPayment_providerValue] = useState("");

  const Payment_ProviderChange = (e)=>setPayment_providerValue(e.target.value);
  const Payment_Method = async()=>{
    const response = await axios.request(getMethod(`/api/dashboard/payment-types`));
    // console.log(response.data.data);
    setPayment_type(response.data.data);
  };
  
  const FetchPayment_provider = async()=>{
    const response = await axios.request(getMethod(`/api/dashboard/payment-providers`));
    // console.log(response.data.data);
    setPayment_provider(response.data.data);
  }

  useEffect(()=>{
    Payment_Method();
    FetchPayment_provider();
    return ()=>{
      setPayment_type([]);
      setPayment_provider([]);
    }
  },[]);
// To get exact paymentProvider under the Parent Payment Type
  const FilterPayment_Provider = payment_provider.filter((c)=>c.payment_type.name===payment_typeValue);
  // console.log({FilterPayment_Provider});
 
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
              value={payment_typeValue}
              inputProps={{ "aria-label": "Without label" }}
              size="small"
              style={{marginBottom:30}}
              sx={{ backgroundColor: "#f3f3f3" }}
              onChange={Payment_typeChange}
            > 
              {payment_type.map((item,index)=>(
                  <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
              ))}
            </Select>
            </FormControl>
            <FormControl sx={{ width: "100%" }} style={{marginTop:10}}>
            <label>Select Payment Provider</label>
            <Select
          placeholder="Payment Provider"
          value={payment_providerValue}
          onChange={Payment_ProviderChange}
          inputProps={{ "aria-label": "Without label" }}
          size="small"
          style={{marginBottom:30}}
          sx={{ backgroundColor: "#f3f3f3" }}
        >
          {FilterPayment_Provider && FilterPayment_Provider.map((item,index)=>(
              <MenuItem key={index} value={item.name} style={{display:"flex"}}>
                <Avatar src={FilterPayment_Provider.logo} size="sm" alt="logo" variant="square" />
                <p>{item.name}</p>
              </MenuItem>
          ))}
        </Select>
        </FormControl>
        <FormControl sx={{width:"100%"}} style={{marginBottom:20}}>
        <label>Account or Phone Number</label>
        <TextField  size="small"   />
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
