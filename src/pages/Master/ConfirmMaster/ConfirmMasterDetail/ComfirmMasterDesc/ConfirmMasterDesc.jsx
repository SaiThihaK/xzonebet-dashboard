import { Button } from "@mui/material";
import axios from "axios";
import React,{useState} from "react";
import classes from "./ComfirmMasterDesc.module.css";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PostMethod } from "../../../../../services/api-services";
import { logoutHandler } from "../../../../../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { confirmDetail } from "../../../../../services/api-collection";
import {Grid} from "@mui/material"
import MasterDepositCancel from "../../../../../components/UI/Modal/MasterDepositCancel/MasterDepositCancel";
const ComfirmMasterDesc = ({userInfo}) => {
  console.log("confirm",userInfo);
    const alertToast = (msg) =>msg;
    const navigate = useNavigate();
    const [Id, setId] = React.useState("");
    const [open,setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // console.log(userInfo.id);
   const confirmHandler = async()=>{
  //  console.log("confirm");
    try{
   const response = await axios.request(
     
    PostMethod(confirmDetail+userInfo.id,
       {super_master_id:userInfo.super_master.id},
   ));
  //  console.log(response);
   if(response.data.status="success"){
     alertToast(toast.success(response.data.message));
     navigate("/dashboard/account/master/confirm-master")
     return;
   }
    if(response.data.status === "error"){
      alertToast(toast.error(response.data.message));
      return;
    }
   }catch(error){
     alertToast(toast.error(error.response.data.message))
    if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
    logoutHandler();
    }
  }
   }
  return (
    <div>
      <div className={classes["agent-user-image-group"]}>
        <img
          src="https://icon-library.com/images/user-icon-jpg/user-icon-jpg-14.jpg"
          className={classes["agent-user-image"]}
          alt=""
        />
        <div className={classes["agent-user-des"]}>
          <h3>{userInfo.first_name + " "+userInfo.last_name}</h3>
          <span>ID - {userInfo.id}</span>
        </div>
      </div>
      <Grid container>
      <Grid item xs={6} className={classes["form-container"]}>
      <div className={classes["form-group-desc"]}>
          <label htmlFor="">Unit </label>:<p>&nbsp;&nbsp;{userInfo.unit_amount || "-"}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Email </label>:<p>&nbsp;&nbsp;{userInfo.email}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Phone </label>:<p>&nbsp;&nbsp;{userInfo.phone}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Country </label>:<p>&nbsp;&nbsp;{userInfo.country}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">City </label>:<p>&nbsp;&nbsp;{userInfo.city}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Currency </label>:<p>&nbsp;&nbsp;{userInfo.currency_type}</p>
        </div>
       
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Deposite Percentage</label>:<p>&nbsp;&nbsp;{userInfo.deposit_percent || "-"}%</p>
        </div>
        
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Withdraw Percentage</label>:<p>&nbsp;&nbsp;{userInfo.withdraw_percent || "-"}%</p>
        </div>
        {/* =====================================Second Grid========================= */}
   
      </Grid>

        
            <form className={classes['btn-container']}>
            <Button   variant="contained" color="primary" onClick={confirmHandler} className={classes["btn"]}>Comfirm</Button>
            <Button variant="contained" color="error" 
        style={{marginLeft:100}}
        onClick={()=>{
          handleOpen();
          setId(userInfo.id);
        }}>Reject</Button>
            </form>
       
       
      </Grid>
      <MasterDepositCancel open={open} handleClose={handleClose}  id={Id} route={'/dashboard/account/master/confirm-master'}  />
    </div>
  );
};

export default ComfirmMasterDesc;