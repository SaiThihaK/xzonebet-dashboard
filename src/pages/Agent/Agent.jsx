import React, { useState } from 'react';
import Card from '../../components/UI/Card';

import classes from './Agent.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import MasterSettingCard from '../Master/MasterSettingCard/MasterSettingCard';
const Agent = () => {
  const [pendingMaster,setPendingMaster] = useState([]);
  const [confirmMaster,setConfirmMaster] = useState([]);
  const [completeMaster,setCompleteMaster] = useState([]);
  const [cancelMaster,setCancelMaster] = useState([]);
  const fetchMaster = async()=>{
    const baseUrl = "https://lapi.xzonebet.com";
    const pending = await axios.get(`${baseUrl}/api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=agent`);
    setPendingMaster(pending.data.data.length);
    const confirm = await axios.get(`${baseUrl}/api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=deposit-confirm&form_type=agent`);
    setConfirmMaster(confirm.data.data.length);
    const complete = await axios.get(`${baseUrl}/api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=complete&form_type=agent`);
    setCompleteMaster(complete.data.data.length);
    const cancel = await axios.get(`${baseUrl}/api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=deposit-rejet&form_type=agent`);
    setCancelMaster(cancel.data.data.length);
  }
 useEffect(()=>{
   fetchMaster();
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