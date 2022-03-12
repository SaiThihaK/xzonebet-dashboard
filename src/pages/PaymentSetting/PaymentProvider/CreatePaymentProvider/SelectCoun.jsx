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



export default function SelectCoun() {
  const [personName, setPersonName] = React.useState([]);
  const [code,setCode] = React.useState("");
  const [coun,setCoun] = React.useState([]);

  const arr = React.useRef([]);
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
  console.log(personName);
  
  const handleChange = (event) => {
    // const {
    //   target: { value },
    // } = event;
    setPersonName(
      // On autofill we get a stringified value.
      // typeof value === 'string' ? value.split(',') : value,
      event.target.value
    );
  };
//  console.log(arr.current.value)
const filterArr = (arr)=>arr.map((c)=>c.name);
  return (
    <div style={{marginTop:20}}>
      <FormControl sx={{ width:"100%" }}>
        <label>Select Country</label>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          size="small"
          // ref={arr}
          onChange={handleChange}
          renderValue={(selected) => selected.join(', ')}
        >
          {coun.map((name,index) => (
            <MenuItem key={index} value={name.code}>
              <Checkbox checked={personName.indexOf(name.code) > -1} />
              <Avatar src={name.flag} style={{width:"20px",height:"20px",marginRight:10}} />
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