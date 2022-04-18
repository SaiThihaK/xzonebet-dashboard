import { Select,MenuItem,FormControl} from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch } from 'react-redux';
import { addCountry } from '../../features/country';
const Country = ({country}) => {
 const dispatch = useDispatch();
 
  return (
<Autocomplete
  disablePortal
  onChange={(event, value) => { return dispatch(addCountry({data: value.name}))}   }
  id="combo-box-demo"
  options={country}
  getOptionLabel={(option) => option.name}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField size='small' {...params} label="Select Country" />}
/>
  )
}

export default Country