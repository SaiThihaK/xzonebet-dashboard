import { FormControl, MenuItem, Select } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/system';

const League = ({league,leagueIdHandler}) => {
  let data=[];
  
  const leagueData=league.map(el=>{
    data=[...data,el.league];
  }) 

  return (
<Autocomplete
  disablePortal
  onChange={(event, value) => leagueIdHandler(value.id)} 
  id="combo-box-demo"
  options={data}
  getOptionLabel={(option) =>option.name}
  renderOption={(props, option) => (
    <Box component="li" {...props} key={option.id}>
      {option.name}
    </Box>
  )}
fullWidth
  renderInput={(params) => <TextField size='small' {...params} label="Select League" />}
/>
  )
}

export default League