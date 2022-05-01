import { Box, Stack } from '@mui/material';
import React, { useState } from 'react';
import ProfitLossChart from '../../components/Chart/ProfitLossChart/ProfitLossChart';
import Card from '../../components/UI/Card';
import UserCard from '../Users/UserCard/UserCard';
import classes from './Dashboard.module.css';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {DateRangePicker} from "@mui/lab"
import * as FaIcons from "react-icons/fa";
const Dashboard = () => {
  const [value, setValue] = React.useState([null, null]);


  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Affiliate Agent Setting</h1>
        </div>
        <div className={classes["card-body"]}>
            <div className={classes['soccer-setting-content-flex']}>
            <UserCard name="Betting Amount" bgColor="#2ED8B6" path="affiliate-agent-percentage" icon={ <FaIcons.FaUsers style={{fontSize: "50px"}} />}    />
            <UserCard name="User All" bgColor="#2ED8B6" path="affiliate-agent-percentage"   icon={ <FaIcons.FaUsers style={{fontSize: "50px"}} />} />
            <UserCard name="Agent All" bgColor="#2ED8B6" path="affiliate-agent-percentage" icon={ <FaIcons.FaUsers style={{fontSize: "50px"}} />}   />
            <UserCard name="Master All" bgColor="#2ED8B6" path="affiliate-agent-percentage" icon={ <FaIcons.FaUsers style={{fontSize: "50px"}} />}  />
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
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps}  variant="standard" />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps}  variant="standard"  />
          </React.Fragment>
        )}
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