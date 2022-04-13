import React, { useState } from 'react'
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard'
import classes from "./Profit.module.css"
import ProfitTable from './ProfitTable/ProfitTable';
import { DateRangePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
const Profit = () => {
    const [value, setValue] = React.useState([null, null]);
  return (
   <PageTitleCard title="Profit">
   <div className={classes["card-body"]}>
   <div className={classes["date-range-picker"]}>
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
    <div className={classes["btn-container"]}>
        <Button variant="contained">Export File</Button>
    </div>
    </div>
   <ProfitTable />
   </div>
   </PageTitleCard>
  )
}

export default Profit