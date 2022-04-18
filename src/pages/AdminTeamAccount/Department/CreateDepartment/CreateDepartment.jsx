import { Button, Checkbox, Grid, ListItemText, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import OdooFunction from '../../../../components/OdooFunctions/OdooFunction'
import PageTitleCard from '../../../../components/UI/PageTitleCard/PageTitleCard'
import classes from "./CreateDepartment.module.css"
import {toast} from 'react-toastify'
import axios from "axios"
import {PostMethod} from "../../../../services/api-services"
const CreateDepartment = () => {
const [functionName,setFunctionName] = useState([]);
const handleChange = (e)=>setFunctionName(e.target.value);
const [name,setName] = useState("");
const functionArr = [
    {id:1,name:"function1"},
    {id:2,name:"function2"},
    {id:3,name:"function3"},
    {id:4,name:"function4"},
    {id:5,name:"function5"},
    {id:6,name:"function6"},
    {id:7,name:"function7"},
    {id:8,name:"function8"},
    {id:9,name:"function9"}
]
const createDepartment = async()=>{
  try{
 const response = await axios.request(PostMethod("api/departments",{
   name
 }));
 if(response.data.status==="success"){
   toast.success(response.data.message);
   setName("");
   return
 }
 if(response.data.status==="error"){
   toast.error(response.data.message)
 }
  }catch(error){
  toast.error(error.response.data.message)
  }
}


  return (
    <div>
        <PageTitleCard title="Create Department">
            <div className={classes["form-container"]}>
            
            <div className={classes["form-contol"]}>
            <label>Department</label>
            <TextField size='small' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>

            <div className={classes["form-contol"]}>
            <label>Choose Function</label>
            {/* <Select
          labelid="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={functionName}
          size="small"
          // ref={arr}
          onChange={handleChange}
          renderValue={(selected) => selected.join(', ')}
        >
          {functionArr.map((func,index) => (
            <MenuItem key={index} value={func.name}>
              <Checkbox checked={functionName.indexOf(func.name) > -1} />
              <ListItemText>
                 {func.name}
             </ListItemText>
            </MenuItem>
          ))}
        </Select> */}
       
                    <Grid container spacing={5}>

            
{
  functionArr.map((func,index)=>(
    <Grid item xs={4} key={index}>
    <OdooFunction func={func} />
    </Grid>


  ))
}
</Grid>
</div>
            
        <div className={classes["btn-container"]}>
        <Button variant="contained" onClick={createDepartment}>Create</Button>
        </div>
            </div>
        </PageTitleCard>
    </div>
  )
}

export default CreateDepartment