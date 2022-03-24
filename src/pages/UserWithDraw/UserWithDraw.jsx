import React, { useState } from 'react'
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard'
import TextField from "@mui/material/TextField"; 
import classes from "./UserWithDraw.module.css";
import { Button } from "@mui/material";
import { DateRangePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Box from '@mui/material/Box';
import UserWithDrawTable from '../../components/Table/UserWithDraw/UserWithDraw';


const UserWithDraw = () => {
    const [value,setValue] = useState([null,null])
  return (
    <div>
        <PageTitleCard title="User With Draw">
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
          </div>
        </div>
        <UserWithDrawTable />
        </PageTitleCard>
    </div>
  )
}

export default UserWithDraw