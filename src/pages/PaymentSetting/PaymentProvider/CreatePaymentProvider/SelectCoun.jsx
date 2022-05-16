import  React,{useEffect, useState} from 'react';
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
import CustomGetFunction from '../../../../services/CustomGetFunction';
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
 
 let countryCode={};
 
const [checkBox,setCheckBox]=useState({...countryCode});
 useEffect(()=>{
   if(country.length === 0 ){
     setCheckBox({})
   }else{
  country.forEach((el, key) => {
    countryCode={
      ...countryCode,
      [el.code]: true,
    }
    setCheckBox({
      ...countryCode,
    })}) };
    console.log("country",country);
  },[country])
 
  // const checkbox=(channel)=>{
  // country.forEach((el, key) => {
  //   if (channel === el.code) {
  //     setCheckBox((prevState) => ({
  //       ...prevState,
  //       [el.code]: true,
  //     }));
  //   }
  // }) }
  const [coun,setCoun] = React.useState([]);

  const {data} = CustomGetFunction(`api/countries`,[]);
  // const fetchCountries = async()=>{
  //   axios.request(getMethod(`api/countries`))
  //   .then(function (response) {
  //     setCoun(response.data.data);
  //   });
  // }

  // React.useEffect(()=>{
  //     fetchCountries();
  // },[])
  // console.log(country);
  const handleChange = (e) => {
    console.log(e.target.value);
    let v=e.target.value;
    setCountry(v);
    // for (let index = 0; index < array.length; index++) {
    //   setCountry([
    //     ...country,
    //     {
    //   code: v[0].code,
    //     name : v[0].name }
    //   ]);
      
    // }
   
 
  };

  return (
    <div style={{marginTop:20}}>
      <FormControl sx={{ width:"100%" }}>
        <label>Select Country</label>
        <Select
          labelid="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={country}
          size="small"     
          onChange={handleChange}
          renderValue={(selected) => 
            {
              let name="";
            let selet= selected.map((el)=>{
                 return el.name
                 });
                 console.log("gge",selet);
                 return selet.join(', ');
            
           
          }
          
          }
        >
          {data?.map((name,index) => (
            <MenuItem key={index} value={name} >
              <Checkbox checked={checkBox[name?.code] ? true : false} 
                    
               />
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