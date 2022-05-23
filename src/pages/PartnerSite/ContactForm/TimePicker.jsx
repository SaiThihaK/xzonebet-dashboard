import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function DemoTimePicker({time,setTime}) {
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        value={time}
        onChange={(newValue) => {
          setTime(newValue);
        }}
        renderInput={(params) => <TextField {...params}  size="small" sx={{width:300}} />}
      />
    </LocalizationProvider>
  );
}