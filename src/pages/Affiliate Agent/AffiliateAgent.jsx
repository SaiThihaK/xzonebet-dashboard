import React, { useState } from 'react';
import classes from './AffiliateAgent.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import { getMethod } from '../../services/api-services';
import MasterSettingCard from '../Master/MasterSettingCard/MasterSettingCard';
import Card from '../../components/UI/Card';
import { logoutHandler } from '../../components/Sidebar/Sidebar';
import CustomGetFunction from '../../services/CustomGetFunction';
const AffiliateAgent = () => {

//   const [confirmMaster,setConfirmMaster] = useState([]);
//   const [completeMaster,setCompleteMaster] = useState([]);
//   const [cancelMaster,setCancelMaster] = useState([]);
  const {data} = CustomGetFunction('api/affiliate-register-lists?sortColumn=updated_at&sortDirection=desc&limit=30&status=accept-affiliate',[])

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


  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>All Affiliate Agents</h1>
        </div>
        <div className={classes["card-body"]}>
            <div className={classes['soccer-setting-content-flex']}>
               <MasterSettingCard name="Pending Affiliate Agent" bgColor="#FFC107" path="pending-affiliate-agent" userNum={data?.length} />
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