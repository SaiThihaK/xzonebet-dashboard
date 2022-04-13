
import { Countries } from "../../../../../../services/api-services";

import { useEffect, useState } from "react";
import axios from "axios";
import { FormControl, MenuItem, Select } from "@mui/material";
 


const CountriesSelect = ()=>{
    const [countries,setCountries] = useState([]);
   const [selectValue,setSelectedValue] = useState([]);
    const cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];
 



    const fetchCountries = async()=>{
      axios.request(Countries).then(function (response) {
        //   console.log(response.data.response);
          setCountries(response.data.response);
      }).catch(function (error) {
          console.error(error);
      });
    }
   
    
    useEffect(()=>{
        fetchCountries();
        return ()=>setCountries([]);
    },[])
return(
    <div style={{marginTop:20}}>
        <FormControl fullWidth>
        <Select multiple value={selectValue} label="Choose Country" size="small" onChange={(e)=>setSelectedValue(e.target.value)}>
           {countries.map((c,index)=>(
               <MenuItem key={index} value={c.name}>{c.name}</MenuItem>
           ))}
       </Select>
        </FormControl>
       
    </div>
)
}

export default CountriesSelect;