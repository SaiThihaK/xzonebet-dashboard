import React,{useEffect, useState} from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl,Select,MenuItem, TextField, Avatar } from "@mui/material";
import axios from "axios";
import { getMethod, PostMethod } from "../../../../../services/api-services";
import { logoutHandler } from "../../../../Sidebar/Sidebar";
import classes from "./PaymentAccountModal.module.css"
import { ToastAlert } from "../../../../../Controller/ToastAlert";
import { toast } from "react-toastify";
import { refreshPage } from "../../../../../Controller/RefreshPage";
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
  const [name,setName] = useState("");
  const [account,setAccount] = useState("");

  const nameChange = e=>setName(e.target.value);
  const accountChange = e=>setAccount(e.target.value);

  const Payment_ProviderChange = (e)=>setPayment_providerValue(e.target.value);
  const Payment_Method = async()=>{
    try{
      const response = await axios.request(getMethod(`api/dashboard/payment-types`));
      if(response.data.status==="success"){
        setPayment_type(response.data.data);
        return;
      }
      if(response.data.status==="error"){
        ToastAlert(toast.error,response.data.message);
        return
      }
      // console.log(response.data.data);
    
    }catch(error){
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
    }
  };
  
  const FetchPayment_provider = async()=>{
    try{
     
      const response = await axios.request(getMethod(`api/dashboard/payment-providers`));
      // console.log(response.data.data);
      setPayment_provider(response.data.data);
    }catch(error){
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
    }
  }
  
  const createHandler =async()=>{
    try{
      if(!name || !payment_providerValue || !account){
        ToastAlert(toast.warning,"Please fill all the field")
        return;
      }
      let fd = new FormData();
      fd.append("payment_provider_id",payment_providerValue);
      fd.append("name",name);
      fd.append("account_no",account);
      console.log("payment_provider_id",payment_providerValue);
      console.log("name",name);
      console.log("account_no",account);
    const response =await axios.request(PostMethod("api/dashboard/payment-accounts",fd));
  
    if(response.data.status === "success"){
      ToastAlert(toast.success,response.data.message)
      setNum(num+1);
      handleClose();
      return;
    }
    if(response.data.status ==="error"){
      ToastAlert(toast.error,response.data.message)
      return;
    }
    }catch(error){
       if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
       logoutHandler();
      return;
     }
     ToastAlert(toast.error,error.response.data.message)
    }
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
  const FilterPayment_Provider = payment_provider.filter((c)=>c.payment_type_id===payment_typeValue);
  // console.log({FilterPayment_Provider});
//  console.log(payment_provider);
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
            <FormControl sx={{ width: "100%" }} className={classes["form-container"]}>
            <label className={classes["form-label"]}>Select Payment Type</label>
            <Select
              value={payment_typeValue}
              size="small"
              sx={{ backgroundColor: "#f3f3f3" }}
              onChange={Payment_typeChange}
            > 
              {payment_type.map((item,index)=>(
                  <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
              ))}
            </Select>
            </FormControl>
            <FormControl sx={{ width: "100%" }} className={classes["form-container"]}>
            <label className={classes["form-label"]}>Select Payment Provider</label>
            <Select
          placeholder="Payment Provider"
          value={payment_providerValue}
          onChange={Payment_ProviderChange}
          inputProps={{ "aria-label": "Without label" }}
          size="small"

          sx={{ backgroundColor: "#f3f3f3" }}
        >
          {FilterPayment_Provider && FilterPayment_Provider.map((item,index)=>(
              <MenuItem key={index} value={item.id} style={{display:"flex"}}>
                <Avatar src={FilterPayment_Provider.logo} size="sm" alt="logo" variant="square" />
                <p>{item.name}</p>
              </MenuItem>
          ))}
        </Select>
        </FormControl>
        <FormControl sx={{width:"100%"}} className={classes["form-container"]}>
        <label className={classes["form-label"]}>Account or Phone Number</label>
        <TextField  size="small" onChange={accountChange}   />
        </FormControl>
        
        <FormControl sx={{width:"100%"}} className={classes["form-container"]}>
        <label className={classes["form-label"]}>Name</label>
        <TextField  size="small" onChange={nameChange}   />
        </FormControl>
            
            <div className={classes["btn-container"]}>
            <Button
                variant="contained"
                color="success"
                onClick={() => {
                  handleClose();
                  createHandler();
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
