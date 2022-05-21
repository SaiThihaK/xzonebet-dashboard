import React from "react";
import TextField from "@mui/material/TextField"; 
import classes from "./ATransitionHistory.module.css";
import { Button } from "@mui/material";
import { DateRangePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Box from '@mui/material/Box';
import Card from "../../../../components/UI/Card";
import TransitionHistoryTable from "../../../MasterDashboard/Page/TransitionHistory/TransitionHistoryTable/TransitionHistoryTable";



const ATransitionHistory = () => {
  // let today = new Date();
  // let Todate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    const [value, setValue] = React.useState([null, null]);  
    
  
  // console.log(value)
  return (
    
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Transition History</h1>
        </div>
        <div className={classes["card-body"]}>
          <div className={classes["table-container"]}>
            <div className={classes["search-header-flex"]}>
              <div className={classes.formGroup}>
                <TextField
                  sx={{ width: 300 }}
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                  label="Search ID"
                />
             <Button variant="contained" className={classes['btn']}>Search</Button>
              </div>
              <div className={classes["date-time-picker"]}>
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
            </div>
      <TransitionHistoryTable />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ATransitionHistory;
 