import React from 'react';
import Card from '../../components/UI/Card';
import MasterSettingCard from './MasterSettingCard/MasterSettingCard';
import classes from './Master.module.css';
const Master = () => {
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>All Master</h1>
        </div>
        <div className={classes["card-body"]}>
            <div className={classes['soccer-setting-content-flex']}>
               <MasterSettingCard name="Panding Master" bgColor="#FFC107" path="panding-master" />
               <MasterSettingCard name="Confirm Master" bgColor="#4099FF" path="" />
               <MasterSettingCard name="Complete Master" bgColor="#2ED8B6" path="" />
               <MasterSettingCard name="Cancel Master" bgColor="#FF5370" path="" />
           </div>
        </div>
      </Card>
    </div>
  )
}

export default Master