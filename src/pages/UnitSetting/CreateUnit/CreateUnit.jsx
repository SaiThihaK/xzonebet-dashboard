import React, { useState } from 'react';


import classes from './CreateUnit.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import Card from '../../../components/UI/Card';
import { Button, TextField } from '@mui/material';
import CreateUnitTable from './CreateUnitTable/CreateUnitTable';
import { toast, ToastContainer } from 'react-toastify';
import { logoutHandler } from '../../../components/Sidebar/Sidebar';
import { getMethod, PostMethod } from '../../../services/api-services';
import { useDispatch, useSelector } from 'react-redux';
import { getRender, selectedRender } from '../../../features/render';
import TableGetFunction from '../../../services/TableGetFunction';
import CustomLoading from '../../../components/CustomLoading/CustomLoading';
const CreateUnit = () => {
const render = useSelector(selectedRender);
const dispatch = useDispatch()
const [amount,setAmount] = useState("");
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


  const [userData, setUserData] = useState([]);
  const [getUnitChange, setgetUnitChange] = useState([]);
  const [num, setNum] = useState(0);
  const AlertToast = msg => msg;

  const fetchUnit = async () => {
    try {
      const response = await axios.request(getMethod("api/get-login-user"));
      if (response.data.status === "success") {
        console.log(response.data.data)
        setUserData(response.data.data);
        return;
      }
      if (response.data.status === "error") {
        AlertToast(toast.error(response.data.message));
        return;
      }
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message)
    }

  }
  const getChangeUnit = async () => {
    try {
      const response = await axios.request(getMethod("api/wallet/wallet-setting"));
      console.log(response);
      if (response.data.status === "success") {
        setgetUnitChange(response.data.data);
        return;
      }
      if (response.data.status === "error") {
        AlertToast(toast.error(response.data.message))
        return;
      }
    } catch (error) {
      console.log(error);
 
      AlertToast(toast.error(error.response.data.message))
    }
  }
  useEffect(() => {
    fetchUnit();
    getChangeUnit();
    totalUnit();
  }, [num])

  console.log("userData",userData);

  const totalUnit = () => {
    if (userData && getUnitChange) {
      let promo_to_main = userData?.wallet?.promotion_unit/getUnitChange?.main_to_promotion_rate;
      let diamond_to_main = userData?.wallet?.diamond_unit * getUnitChange?.main_to_diamond_rate;
      let main =userData?.wallet?.main_unit;
      let totalUnit = promo_to_main + diamond_to_main + main;
      
      return totalUnit;
    }
  }
const {data,loading}  = TableGetFunction('api/wallet/admin-create-record?sortColumn=id&sortDirection=desc&limit=10',[render]);
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Create Unit</h1>
        </div>
        <div className={classes["card-body"]}>
            <div className={classes['soccer-setting-content-flex']}>
            <h3>Current Unit-&nbsp;{totalUnit()}</h3>
      
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