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


  const {data} = CustomGetFunction('api/affiliate-register-lists?sortColumn=updated_at&sortDirection=desc&limit=30&status=affiliate-agent',[])
  const {data:completeAffiliate} = CustomGetFunction(`api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=complete&form_type=affiliate-agent`,[]);

  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>All Affiliate Agents</h1>
        </div>
        <div className={classes["card-body"]}>
            <div className={classes['soccer-setting-content-flex']}>
               <MasterSettingCard name="Pending Affiliate Agent" bgColor="#FFC107" path="pending-affiliate-agent" userNum={data?.length} />
               <MasterSettingCard name="Complete Affiliate Agent " bgColor="#4099FF" path="complete-affiliate-agent"  userNum={completeAffiliate.length}/>
               {/* <MasterSettingCard name="Complete Master" bgColor="#2ED8B6" path="complete-master"  userNum={completeMaster}/>
               <MasterSettingCard name="Cancel Master" bgColor="#FF5370" path="cancel-master"  userNum={cancelMaster}/> */} 
           </div>
        </div>
      </Card>
    </div>
  )
}

export default AffiliateAgent;