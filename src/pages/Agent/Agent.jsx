import React, { useState } from 'react';
import Card from '../../components/UI/Card';

import classes from './Agent.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import MasterSettingCard from '../Master/MasterSettingCard/MasterSettingCard';
import { getMethod } from '../../services/api-services';
import { logoutHandler } from '../../components/Sidebar/Sidebar';
import CustomGetFunction from '../../services/CustomGetFunction';
const Agent = () => {
 
  const {data:agents,loading} = CustomGetFunction('api/agents?sortColumn=id&sortDirection=desc&limit=30&agent_level=agent',[]);
  const {data:cancelAgents} = CustomGetFunction(`api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=deposit-rejet&form_type=agent`,[]);
 
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>All Agents</h1>
        </div>
        <div className={classes["card-body"]}>
            <div className={classes['soccer-setting-content-flex']}>
               {/* <MasterSettingCard name="Pending Agent" bgColor="#FFC107" path="pending-agent" userNum={pendingMaster} />
               <MasterSettingCard name="Confirm Agent" bgColor="#4099FF" path="confirm-agent"  userNum={confirmMaster}/> */}
               <MasterSettingCard name="Complete Agent" bgColor="#2ED8B6" path="complete-agent"  userNum={agents.length}/>
               <MasterSettingCard name="Cancel Agent" bgColor="#FF5370" path="cancel-agent"  userNum={cancelAgents.length}/>
           </div>
        </div>
      </Card>
    </div>
  )
}

export default Agent