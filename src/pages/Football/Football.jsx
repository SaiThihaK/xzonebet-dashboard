import React from 'react';
import Card from '../../components/UI/Card';
import SelectCateHeader from './SelectCateHeader/SelectCateHeader';
import CateTable from './CateTable/CateTable';
import classes from './Football.module.css';
const Football = () => {
  return (
    <div className={classes["soccer-setting-container"]}>
    <Card>
      <div className={classes["card-header"]}>
        <h1 className={classes["card-title"]}>Football</h1>
      </div>
      <div className={classes["card-body"]}>
          <SelectCateHeader />
          <CateTable />
      </div>
    </Card>
  </div>
  )
}

export default Football;