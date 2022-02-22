import React from 'react';
import Card from '../../../components/UI/Card';
import ThreedTimeTable from './ThreedTimeTable';
import classes from './ThreedTime.module.css';
const ThreedTime = () => {
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>3D Time</h1>
        </div>
        <div className={classes["card-body"]}>
            <ThreedTimeTable />
        </div>
      </Card>
    </div>
  )
}

export default ThreedTime;