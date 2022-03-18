import React, { useState } from 'react';
import Card from '../../components/UI/Card';

import classes from './Agent.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import MasterSettingCard from '../Master/MasterSettingCard/MasterSettingCard';
import { getMethod } from '../../services/api-services';
import { logoutHandler } from '../../components/Sidebar/Sidebar';
const Agent = () => {
  const [pendingMaster,setPendingMaster] = useState([]);
  const [confirmMaster,setConfirmMaster] = useState([]);
  const [completeMaster,setCompleteMaster] = useState([]);
  const [cancelMaster,setCancelMaster] = useState([]);
  const fetchPending = async()=>{
    try{

      const pending = await axios.request(getMethod('/api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=agent'));
      console.log(pending)
      setPendingMaster(pending.data.data.length);
    }catch(error){
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
    }
  };
  const fetchConfirm = async()=>{
    try{
      const confirm = await axios.request(getMethod(`/api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=deposit-confirm&form_type=agent`));
      setConfirmMaster(confirm.data.data.length);

    }catch(error){
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
    }
  };
  const fetchComplete = async()=>{
    try{

      const complete = await axios.request(getMethod(`/api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=complete&form_type=agent`));
      setCompleteMaster(complete.data.data.length);
    }catch(error){
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
    }
  };
  const fetchCancel = async()=>{
    try{
      const cancel = await axios.request(getMethod(`/api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=deposit-rejet&form_type=agent`));
      setCancelMaster(cancel.data.data.length);

    }catch(error){
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
    }
  }

  console.log(cancelMaster);
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
          <h1 className={classes["card-title"]}>All Agents</h1>
        </div>
        <div className={classes["card-body"]}>
            <div className={classes['soccer-setting-content-flex']}>
               <MasterSettingCard name="Pending Agent" bgColor="#FFC107" path="pending-agent" userNum={pendingMaster} />
               <MasterSettingCard name="Confirm Agent" bgColor="#4099FF" path="confirm-agent"  userNum={confirmMaster}/>
               <MasterSettingCard name="Complete Agent" bgColor="#2ED8B6" path="complete-agent"  userNum={completeMaster}/>
               <MasterSettingCard name="Cancel Agent" bgColor="#FF5370" path="cancel-agent"  userNum={cancelMaster}/>
           </div>
        </div>
      </Card>
    </div>
  )
}

export default Agent