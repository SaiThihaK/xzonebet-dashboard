import { FormControl } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Countries } from "../../../../services/api-services";
import Multiselect from "multiselect-react-dropdown";


const SelectCountries = ()=>{
    const [coun,setCoun] = useState([]);
    const [select,setSelect] = useState([]);
    const fetchCountries = async()=>{
        axios.request(Countries)
        .then(function (response) {
            console.log(response.data.response);
            setCoun(response.data.response);
        }).catch(function (error) {
            console.error(error);
        });
      }
     

      console.log(coun);
      const FilterArr = coun.map((c)=>c.name);
      console.log(FilterArr);
      useEffect(()=>{
          fetchCountries();
      },[]);
   
return(
<FormControl>
<label style={{marginTop:20}}>Choose Your Countries</label>
<Multiselect
        isObject={false}
        onRemove={(event) => {
            console.log(select);
          setSelect(event);
        }}
        onSelect={(event) => {
            console.log(select);
          setSelect(event)
        }}
        options={FilterArr}
        selectedValues={["Myanmar"]}
        showCheckbox
      />
</FormControl>
)
}

export default SelectCountries;