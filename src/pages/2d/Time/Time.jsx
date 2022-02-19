import React from 'react';
import Card from '../../../components/UI/Card';
import TimeTable from './TimeTable';
import classes from './Time.module.css';
const Time = () => {
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>2D Time</h1>
        </div>
        <div className={classes["card-body"]}>
            <TimeTable/>
        </div>
      </Card>
    </div>
  )
}

export default Time;