import React, { useState } from 'react';
import PageTitleCard from "../../components/UI/PageTitleCard/PageTitleCard"
import classes from "./Fixture.module.css";
import TextField from "@mui/material/TextField"; 

import { DateRangePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Box } from '@mui/system';
import Country from '../../components/XzonebetFootball/Country';
import League from '../../components/XzonebetFootball/League';
import Team from '../../components/XzonebetFootball/Team';
import FixtureTable from './FixtureTable/FixtureTable';
import { Grid } from '@mui/material';
const Fixture = () => {
    const [value,setValue] = useState([null,null])
  return (
    <PageTitleCard title="Fixture">
  <div className={classes["card-body"]}>
  <Grid container spacing={3}>
  <Grid item xs={6}>
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
 
    </Grid>
    <Grid item xs={6}>
    <Country />
    </Grid>
    <Grid item xs={6}>
    <League />
    </Grid>
    <Grid item xs={6}>
    <Team />
    </Grid>
    </Grid>
    <FixtureTable />
  </div>
    </PageTitleCard>
  )
}

export default Fixture