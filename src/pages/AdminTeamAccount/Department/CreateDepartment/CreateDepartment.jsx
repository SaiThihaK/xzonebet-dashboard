import { Button, Checkbox, ListItemText, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import PageTitleCard from '../../../../components/UI/PageTitleCard/PageTitleCard'
import classes from "./CreateDepartment.module.css"

const CreateDepartment = () => {
const [functionName,setFunctionName] = useState([]);
const handleChange = (e)=>setFunctionName(e.target.value);
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
  return (
    <div>
        <PageTitleCard title="Create Department">
            <div className={classes["form-container"]}>
            
            <div className={classes["form-contol"]}>
            <label>Department</label>
            <TextField size='small'/>
            </div>

            <div className={classes["form-contol"]}>
            <label>Choose Function</label>
            <Select
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
        </Select>
            </div>
        <div className={classes["btn-container"]}>
        <Button variant="contained">Create</Button>
        </div>
            </div>
        </PageTitleCard>
    </div>
  )
}

export default CreateDepartment