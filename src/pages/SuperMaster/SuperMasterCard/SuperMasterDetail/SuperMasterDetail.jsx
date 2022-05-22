import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../../../components/UI/Card';
import CustomGetFunction from '../../../../services/CustomGetFunction';
import SuperMasterDesc from './SuperMasterDesc/SuperMasterDesc';
import SuperMasterDescTable from './SuperMasterDesc/SuperMasterDescTable/SuperMasterDescTable';
import classes from './SuperMasterDetail.module.css';
const SuperMasterDetail = () => {
  const {id} = useParams();
  const {data,loading} = CustomGetFunction(`api/agents/${id}`,[]);
  console.log(data);
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Super Master Form Detail</h1>
        </div>
        <div className={classes["card-body"]}>
            <SuperMasterDesc userInfo={data} />
        </div>
      </Card>
      <SuperMasterDescTable />
    </div>
  )
}

export default SuperMasterDetail