import { FormControl, MenuItem, Select } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const League = ({league,leagueIdHandler}) => {
  let data=[];
  
  const leagueData=league.map(el=>{
    data=[...data,el.league];
  }) 
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 }, ]
  return (
<Autocomplete
  disablePortal
  onChange={(event, value) => leagueIdHandler(value.id)} 
  id="combo-box-demo"
  options={data}
  getOptionLabel={(option) => option.name}

  sx={{ width: 300 }}
  renderInput={(params) => <TextField size='small' {...params} label="Select League" />}
/>
  )
}

export default League