import { FormControl,  MenuItem, Select, TextField ,Button} from "@mui/material";

import axios from "axios";
import { useEffect, useState } from "react";

import Card from "../../../../components/UI/Card";
import { getMethod,PostProvider } from "../../../../services/api-services";
import classes from "./CreatePaymentProvider.module.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SelectCoun from "./SelectCoun";
import { logoutHandler } from "../../../../components/Sidebar/Sidebar";



 const CreatePaymentProvider =()=>{

   const [payment_type,setPayment_type] = useState([]);
   const [payment_provider,setPayment_provider] = useState();
   const [payment_typeValue,setPayment_typeValue] = useState('');
   const [logo,setlogo] = useState('');

   const payment_typeChange = (e)=>setPayment_typeValue(e.target.value);
   const payment_providerChange = (e)=>setPayment_provider(e.target.value);
   const logoChange = (e)=>setlogo(e.target.value);

   const FetchPayment_type = async() =>{
     try{
       const response = await axios.request(getMethod(`/api/dashboard/payment-types`));
       setPayment_type(response.data.data);
     }catch(error){
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
    }
   }
  const AlertToast = (toast,msg) =>{
    return toast(msg);
  };

   useEffect(()=>{
    FetchPayment_type();
    return ()=>setPayment_type([]);
   },[]);

   const submitHandler = async(e)=>{
     e.preventDefault();
     console.log({payment_typeValue,payment_provider,logo})
   if(!payment_typeValue || !payment_provider || !logo){
     AlertToast(toast.warning,"Please fill all the field")
     return;
   }
   try{
     const response = await axios.request(PostProvider(`/api/dashboard/payment-providers`,{
      payment_type_id:payment_typeValue,
      name:payment_provider,
      logo
     }));
     console.log(response);
   }catch(error){
    if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
    logoutHandler();
    }
  }
   };
   
   console.log(payment_typeValue)
     return(
         <div className={classes["soccer-setting-container"]}>
           <ToastContainer />
         <Card>
           <div className={classes["card-header"]}>
             <h1 className={classes["card-title"]} >Payment Provider</h1>
           </div>
          <div className={classes["card-body"]} style={{display:"flex",flexDirection:"column",padding:"0px 40px"}}>
           <FormControl  style={{marginTop:20}} fullWidth>
             <label>Payment Type</label>
             <Select value={payment_typeValue} size="small"style={{marginTop:10}} onChange={payment_typeChange}>
              {
                payment_type.map((a,index)=>(
                  <MenuItem key={index} value={a.id}>{a.name}</MenuItem>
                ))
              }
             </Select>
             </FormControl>
             <FormControl  style={{marginTop:20}} fullWidth>
             <label>Payment Provider</label>
             <TextField size="small" onChange={payment_providerChange} />
            </FormControl>
             <FormControl  style={{marginTop:20}} fullWidth>
             <label>Choose Provider Logo</label>
             <TextField style={{border:"none"}}  variant="standard" type="file" accept="image/png, image/jpeg" onChange={logoChange} />
            </FormControl>
             {/* <SelectCountries /> */}
             <SelectCoun />
               <Button variant="contained" onClick={submitHandler} style={{marginTop:20}} fullWidth>Create</Button>
           </div>
         </Card>
      </div>
    
     )
 }

 export default CreatePaymentProvider;



