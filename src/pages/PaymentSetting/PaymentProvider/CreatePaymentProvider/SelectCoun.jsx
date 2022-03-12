import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Countries } from '../../../../services/api-services';
import axios from 'axios';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



export default function SelectCoun() {
  const [personName, setPersonName] = React.useState([]);
  const [coun,setCoun] = React.useState([]);
  const fetchCountries = async()=>{
    axios.request(Countries)
    .then(function (response) {
        console.log(response.data.response);
        setCoun(response.data.response);
    }).catch(function (error) {
        console.error(error);
    });
  }
 
  React.useEffect(()=>{
      fetchCountries();
  },[])
  console.log(personName)

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div style={{marginTop:20}}>
      <FormControl sx={{ width:"100%" }}>
        <label>Select Country</label>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName.map((p)=>p.name)}
          size="small"
          onChange={handleChange}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {coun.map((name,index) => (
            <MenuItem key={index} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText value={name.name}>
                 {name.name} 
             </ListItemText>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}