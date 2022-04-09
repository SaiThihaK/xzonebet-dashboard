import React from 'react';
import Card from '../../../../components/UI/Card';
import AgentDetailDescription from './AgentDetailDescription/AgentDetailDescription';
import classes from './AgentDetail.module.css';
const AgentDetail = () => {
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Become an Agent</h1>
        </div>
        <div className={classes["card-body"]}>
            <AgentDetailDescription />
        </div>
      </Card>
    </div>
  )
}

export default AgentDetail;