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
import { useDispatch, useSelector } from 'react-redux';
import { getRender, selectedRender } from '../../../features/render';
import TableGetFunction from '../../../services/TableGetFunction';
import CustomLoading from '../../../components/CustomLoading/CustomLoading';
const CreateUnit = () => {
const render = useSelector(selectedRender);
const dispatch = useDispatch()
const [amount,setAmount] = useState("");
const [num,setNum] = useState(0);
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
      dispatch(getRender({render: !render}))
      setAmount("");
      setNum(num+1);

      return;
  };
  if(response.data.status === "error"){
      AlertToast(toast.error,response.data.message);
      return;
  }
 }
  }catch(error){
    console.log(error);
    AlertToast(toast.error(error.response.data.message))

  if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
          logoutHandler();
          return;
          }
        }
        
  }


useEffect(()=>{

},[num])
const {data,loading}  = TableGetFunction('api/wallet/admin-create-record?sortColumn=id&sortDirection=desc&limit=10',[render]);
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Create Unit</h1>
        </div>
        <div className={classes["card-body"]}>
            <div className={classes['soccer-setting-content-flex']}>
            <h3>Current Unit-&nbsp;0</h3>
      
           </div>
           <form className={classes['creadit-input']}>
        <TextField
          style={{width:600}}
          variant="standard"
          type="number"
          value={amount}
          placeholder="ammount"
          onChange={(e)=>{setAmount(e.target.value)}}
        /> 
        <div style={{display:"flex",justifyContent:"flex-end",width:"100%"}}>
        <Button variant="contained" onClick={createHandler}>Create</Button>
        </div>
       
        </form>
        </div>
      </Card>
      {
        loading ? ( <CreateUnitTable data={data}/>):(<CustomLoading />)
      }
     
    </div>
  )
}

export default CreateUnit