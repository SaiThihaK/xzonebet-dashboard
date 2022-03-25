import React, { useState } from 'react';


import classes from './CreateUnit.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import Card from '../../../components/UI/Card';
import { Button, TextField } from '@mui/material';
import CreateUnitTable from './CreateUnitTable/CreateUnitTable';
import { toast, ToastContainer } from 'react-toastify';
import { logoutHandler } from '../../../components/Sidebar/Sidebar';
import { PostMethod } from '../../../services/api-services';
const CreateUnit = () => {
 
const [amount,setAmount] = useState("");
const [render,setRender] = useState(0);
const AlertToast = (toast,msg)=>toast(msg);
const createHandler = async()=>{
  try{
      if(!amount){
          AlertToast(toast.warning,"Please fill all the fields")
          return;
      }
 else{
   console.log(amount)
  const response = await axios.request(PostMethod("api/wallet/admin-create",{amount}));
  console.log(response);
  if(response.data.status==="success"){
      AlertToast(toast.success,response.data.message);
      setAmount("");
      setRender(render+1)
      return;
  };
  if(response.data.status === "error"){
      AlertToast(toast.error,response.data.message);
  
      return;
  }
 }
  }catch(error){
    console.log(error);
    if(error.response.statusText ==="error"){
      AlertToast(toast.error(error.response.data.message))
      return;
    }
  if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
          logoutHandler();
          return;
          }
        }
        
  }


useEffect(()=>{

},[render])

  return (
    <div className={classes["soccer-setting-container"]}>
      <ToastContainer />
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Create Unit</h1>
        </div>
        <div className={classes["card-body"]}>
            <div className={classes['soccer-setting-content-flex']}>
            <h3>Current Unit-</h3>
          <TextField
          sx={{width:500}}
          className={classes["form-input"]}
          disabled
          id="outlined-disabled"
          label="0"
        />
           </div>
           <form className={classes['creadit-input']}>
        <TextField
          sx={{width:300}}
          variant="standard"
          type="number"
          value={amount}
          onChange={(e)=>{setAmount(e.target.value)}}
        /> 
        <Button variant="contained" onClick={createHandler} className={classes["btn"]}>Create</Button>
        </form>
        </div>
      </Card>
      <CreateUnitTable render={render}/>
    </div>
  )
}

export default CreateUnit