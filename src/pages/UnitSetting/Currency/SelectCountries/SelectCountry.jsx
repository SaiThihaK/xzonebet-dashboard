import { FormControl, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Countries } from "../../../../services/api-services";



const SelectCountry = ({setSelectCoun,selectCoun})=>{
    const onSelectHandler = (event)=>setSelectCoun(event.target.value);
   const [coun,setCoun] = useState([]);
    const fetchCountries = async()=>{
        axios.request(Countries)
        .then(function (response) {
            // console.log(response.data.response);
            setCoun(response.data.response);
        }).catch(function (error) {
            console.error(error);
        });
      }
     

    //   console.log(coun);
      useEffect(()=>{
          fetchCountries();
      },[]);
   
return(
<FormControl>
<label style={{marginTop:20}}>Choose a country currency</label>
<Select value={selectCoun} size="small" onChange={onSelectHandler}>
{
    coun.map((c,index)=>(
        <MenuItem key={index} value={c.name}>{c.name}</MenuItem>
    ))
}
</Select>
      
</FormControl>
)
}

export default SelectCountry;