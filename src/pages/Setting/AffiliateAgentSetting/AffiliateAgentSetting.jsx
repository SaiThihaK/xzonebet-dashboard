import React, { useState } from 'react';
import Card from '../../../components/UI/Card';
import UserCard from '../../Users/UserCard/UserCard';
import classes from './AffiliateAgentSetting.module.css';
import * as FaIcons from "react-icons/fa";
const AffiliateAgentSetting = () => {

  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Affiliate Agent Setting</h1>
        </div>
        <div className={classes["card-body"]}>
            <div className={classes['soccer-setting-content-flex']}>
            <UserCard name="Affiliate Agent Percentage" bgColor="#2ED8B6" path="affiliate-agent-percentage" icon={ <FaIcons.FaUsers style={{fontSize: "50px"}} />}/>
              
              <UserCard name="Affiliate User Percentage" bgColor="#FF5370" path="affiliate-user-percentage"  icon={ <FaIcons.FaUsers style={{fontSize: "50px"}} />}/>
           </div>
        </div>
      </Card>
    </div>
  )
}

export default AffiliateAgentSetting;