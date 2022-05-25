import React, { useState } from 'react'
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard'
import classes from "./Profit.module.css"
import ProfitTable from './ProfitTable/ProfitTable';
import { DateRangePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import {getResDate} from '../../Controller/ChangeDate';
import CustomGetFunction from '../../services/CustomGetFunction';
const Profit = ({type}) => {
  const {data,loading} = CustomGetFunction(`api/agents/wallet/profit-record?sortColumn=id&sortDirection=desc&limit=10`,[]);
  console.log("heo",data);
    const [value, setValue] = React.useState([null, null]);
  
  return (
   <PageTitleCard title="Profit">
   <div className={classes["card-body"]}>
   <div className={classes["date-range-picker"]}>
     {/* <Box sx={{"flex" : "0 0 350px" }}>
     <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="Start-Date"
        endText="End-Date"
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
    </Box> */}
      {/* <div style={{
  marginRight: "20px",
  display: "flex"
}}>
                <TextField
                  sx={{ width: 300 }}
                  size="small"
                  id="outlined-basic"
                  label="Search Agnent Name"
                  variant="outlined"
                />
             <Button variant="contained" className={classes["btn"]}>Search</Button>
              </div> */}
    {/* <Box sx={{height: "fit-content",marginLeft: 3}}>
    <TextField id="outlined-basic" label="Agent Name" size='small' sx={{"width": 200,"height": 20, }} variant="outlined" />
    </Box> */}
    {/* <Box sx={{height: "fit-content",marginLeft: 3}}>
    <TextField id="outlined-basic" label="" size='small' sx={{"width": 100,"height": 20, }} variant="outlined" />
    </Box> */}
    {/* <div className={classes["btn-container"]}>
        <Button variant="contained">Export File</Button>
    </div> */}
    </div>
   <ProfitTable type={type} loading={loading}  data={data} />
   </div>
   </PageTitleCard>
  )
}

export default Profit