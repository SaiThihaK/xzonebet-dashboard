import React from 'react';
import Card from '../../../../components/UI/Card';
import SuperMasterDesc from './SuperMasterDesc/SuperMasterDesc';
import SuperMasterDescTable from './SuperMasterDesc/SuperMasterDescTable/SuperMasterDescTable';
import classes from './SuperMasterDetail.module.css';
const SuperMasterDetail = () => {
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Super Master Form Detail</h1>
        </div>
        <div className={classes["card-body"]}>
            <SuperMasterDesc />
        </div>
      </Card>
      <SuperMasterDescTable />
    </div>
  )
}

export default SuperMasterDetail