import React, { useState } from 'react';
import classes from './AffiliateAgent.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import { getMethod } from '../../services/api-services';
import MasterSettingCard from '../Master/MasterSettingCard/MasterSettingCard';
import Card from '../../components/UI/Card';
const AffiliateAgent = () => {
  const [pendingMaster,setPendingMaster] = useState([]);
//   const [confirmMaster,setConfirmMaster] = useState([]);
//   const [completeMaster,setCompleteMaster] = useState([]);
//   const [cancelMaster,setCancelMaster] = useState([]);
 
  const fetchPending = async()=>{
    const pending = await axios.request(getMethod('/api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=affiliate-agent'));
    setPendingMaster(pending.data.data.length);
  };
//   const fetchConfirm = async()=>{
//     const confirm = await axios.request(getMethod(`/api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=deposit-confirm&form_type=master`));
//     setConfirmMaster(confirm.data.data.length);
//   };
//   const fetchComplete = async()=>{
//     const complete = await axios.request(getMethod(`/api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=complete&form_type=master`));
//     setCompleteMaster(complete.data.data.length);
//   };
//   const fetchCancel = async()=>{
//     const cancel = await axios.request(getMethod(`/api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=deposit-rejet&form_type=master`));
//     setCancelMaster(cancel.data.data.length);
//   }

 useEffect(()=>{
   fetchPending();
  //  fetchComplete();
  //  fetchConfirm();
  //  fetchCancel();
   return ()=>{
     setPendingMaster([]);
    //  setConfirmMaster([]);
    //  setCompleteMaster([]);
    //  setCancelMaster([]);
   }
 },[]);
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>All Affiliate Agents</h1>
        </div>
        <div className={classes["card-body"]}>
            <div className={classes['soccer-setting-content-flex']}>
               <MasterSettingCard name="Pending Master" bgColor="#FFC107" path="pending-affiliate-agent" userNum={pendingMaster} />
               {/* <MasterSettingCard name="Confirm Master" bgColor="#4099FF" path="confirm-master"  userNum={confirmMaster}/>
               <MasterSettingCard name="Complete Master" bgColor="#2ED8B6" path="complete-master"  userNum={completeMaster}/>
               <MasterSettingCard name="Cancel Master" bgColor="#FF5370" path="cancel-master"  userNum={cancelMaster}/> */}
           </div>
        </div>
      </Card>
    </div>
  )
}

export default AffiliateAgent;