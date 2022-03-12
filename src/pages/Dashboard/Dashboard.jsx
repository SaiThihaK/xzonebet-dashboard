import { Stack } from '@mui/material';
import React, { useState } from 'react';
import ProfitLossChart from '../../components/Chart/ProfitLossChart/ProfitLossChart';
import Card from '../../components/UI/Card';
import UserCard from '../Users/UserCard/UserCard';
import classes from './Dashboard.module.css';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

const Dashboard = () => {

  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Affiliate Agent Setting</h1>
        </div>
        <div className={classes["card-body"]}>
            <div className={classes['soccer-setting-content-flex']}>
            <UserCard name="Betting Amount" bgColor="#2ED8B6" path="affiliate-agent-percentage" />
            <UserCard name="User All" bgColor="#2ED8B6" path="affiliate-agent-percentage" />
            <UserCard name="Agent All" bgColor="#2ED8B6" path="affiliate-agent-percentage" />
            <UserCard name="Master All" bgColor="#2ED8B6" path="affiliate-agent-percentage" />
           </div>
        </div>
      </Card>
      <div className={classes["graph-container"]}>
      <Card>
      <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Profit/Loss Graph</h1>
        </div>
        <div className={classes["data-time-container"]}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          renderInput={(params) => <TextField {...params} size="small" />}
        />
        </LocalizationProvider>
        </div>
        <ProfitLossChart />
      </Card>
      </div>
    </div>
  )
}

export default Dashboard;