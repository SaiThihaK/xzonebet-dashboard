import React, { useState } from 'react';
import Card from '../../components/UI/Card';
import BetSettingTable from './BetSettingTable/BetSettingTable';
import classes from './FootballSetting.module.css';
import FootballSettingTable from './FootballSettingTable/FootballSettingTable';

const Master = () => {

 

  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Football Setting</h1>
        </div>
            <FootballSettingTable />
      </Card>
     <div className={classes["betSetting-table"]}>
       <Card>
         <BetSettingTable />
       </Card>
     </div>
    </div>
  )
}

export default Master