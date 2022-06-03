import React, { useState } from 'react';
import Card from '../../components/UI/Card';
import MasterSettingCard from './MasterSettingCard/MasterSettingCard';
import classes from './Master.module.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { getMethod } from '../../services/api-services';
import { logoutHandler } from '../../components/Sidebar/Sidebar';
import { cancelMasterApi, completeMasterApi, confirmMasterApi, pendingMasterApi } from '../../services/api-collection';
const Master = () => {
  const [pendingMaster,setPendingMaster] = useState([]);
  const [confirmMaster,setConfirmMaster] = useState([]);
  const [completeMaster,setCompleteMaster] = useState([]);
  const [cancelMaster,setCancelMaster] = useState([]);
  const fetchPending = async()=>{
    try{
      const pending = await axios.request(getMethod(pendingMasterApi));
      if(pending.data.status==="success"){
        setPendingMaster(pending.data.data.length);
        return;
      }
      
    }catch(error){
      console.log(error);
      console.log(error.response.data.message)
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
    }
  };
  const fetchConfirm = async()=>{
    try{
      const confirm = await axios.request(getMethod(confirmMasterApi));
      if(confirm.data.status==="success"){
        setConfirmMaster(confirm.data.data.length);
        return;
      }
      
    }catch(error){
      console.log(error);
      console.log(error.response.data.message)
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
    }
    
  };
  const fetchComplete = async()=>{
    try{
      const complete = await axios.request(getMethod(`api/agents?sortColumn=id&sortDirection=desc&limit=30&agent_level=master`));
      if(complete.data.status==="success"){
        setCompleteMaster(complete.data.data.length);
        return;
      }
       
    }catch(error){
      console.log(error);
      console.log(error.response.data.message)
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
    }
  };
  const fetchCancel = async()=>{
  try{
    const cancel = await axios.request(getMethod(cancelMasterApi));
    if(cancel.data.status==="success"){
      setCancelMaster(cancel.data.data.length);
      return;
    }


  }catch(error){
    console.log(error);
    console.log(error.response.data.message)
    if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
    logoutHandler();
    }
  }
  }

  // console.log(cancelMaster);
 useEffect(()=>{
   fetchPending();
   fetchComplete();
   fetchConfirm();
   fetchCancel();
   return ()=>{
     setPendingMaster([]);
     setConfirmMaster([]);
     setCompleteMaster([]);
     setCancelMaster([]);
   }
 },[]);
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>All Master</h1>
        </div>
        <div className={classes["card-body"]}>
            <div className={classes['soccer-setting-content-flex']}>
               <MasterSettingCard name="Pending Master" bgColor="#FFC107" path="panding-master" userNum={pendingMaster} />
               <MasterSettingCard name="Confirm Master" bgColor="#4099FF" path="confirm-master"  userNum={confirmMaster}/>
               <MasterSettingCard name="Complete Master" bgColor="#2ED8B6" path="complete-master"  userNum={completeMaster}/>
               <MasterSettingCard name="Cancel Master" bgColor="#FF5370" path="cancel-master"  userNum={cancelMaster}/>
           </div>
        </div>
      </Card>
    </div>
  )
}

export default Master