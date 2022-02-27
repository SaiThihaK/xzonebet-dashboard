import React, { useState } from 'react';
import Card from '../../components/UI/Card';
import MasterSettingCard from './MasterSettingCard/MasterSettingCard';
import classes from './Master.module.css';
import axios from 'axios';
import { useEffect } from 'react';
const Master = () => {
  const [pendingUser,setPendingUser] = useState([]);
  const fetchMaster = async()=>{
    const pending = await axios.get(`https://lapi.xzonebet.com/api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=3&status=pending`)
    setPendingUser(pending.data.data.length);
  }
 useEffect(()=>{
   fetchMaster();
 },[]);
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>All Master</h1>
        </div>
        <div className={classes["card-body"]}>
            <div className={classes['soccer-setting-content-flex']}>
               <MasterSettingCard name="Panding Master" bgColor="#FFC107" path="panding-master" userNum={pendingUser} />
               <MasterSettingCard name="Confirm Master" bgColor="#4099FF" path=""  userNum="3"/>
               <MasterSettingCard name="Complete Master" bgColor="#2ED8B6" path=""  userNum="4"/>
               <MasterSettingCard name="Cancel Master" bgColor="#FF5370" path=""  userNum="5"/>
           </div>
        </div>
      </Card>
    </div>
  )
}

export default Master