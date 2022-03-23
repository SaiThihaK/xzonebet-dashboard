import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {  getMethod } from '../../../../services/api-services';
import axios from 'axios';
import { Avatar } from '@mui/material';

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



export default function SelectCoun({country,setCountry}) {


  const [coun,setCoun] = React.useState([]);
  const fetchCountries = async()=>{
    axios.request(getMethod(`api/countries`))
    .then(function (response) {
      setCoun(response.data.data);
    });
  }
 
  React.useEffect(()=>{
      fetchCountries();
  },[])
  // console.log(country);
  
  const handleChange = (event) => {
    // const {
    //   target: { value },
    // } = event;
    setCountry(
      // On autofill we get a stringified value.
      // typeof value === 'string' ? value.split(',') : value,
      event.target.value
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
          value={country}
          size="small"
          // ref={arr}
          onChange={handleChange}
          renderValue={(selected) => selected.join(', ')}
        >
          {coun.map((name,index) => (
            <MenuItem key={index} value={name.id}>
              <Checkbox checked={country.indexOf(name.id) > -1} />
              {/* <Avatar src={name.flag} style={{width:"20px",height:"20px",marginRight:10}} /> */}
              <ListItemText>
                 {name.name}({name.code})
             </ListItemText>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}