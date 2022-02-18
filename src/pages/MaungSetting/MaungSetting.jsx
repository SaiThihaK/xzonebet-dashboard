import React from 'react';
import Card from '../../components/UI/Card';
import MaungHeader from './MaungHeader/MaungHeader';
import MaungTable from './MaungTable/MaungTable';
import classes from './MaungSetting.module.css';
const MaungSetting = () => {
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Maung Setting</h1>
        </div>
        <div className={classes["card-body"]}>
            <MaungHeader />
            <MaungTable />
        </div>
      </Card>
    </div>
  )
}

export default MaungSetting;