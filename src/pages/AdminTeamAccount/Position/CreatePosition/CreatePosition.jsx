import { Button, Checkbox, Grid, ListItemText, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import OdooFunction from '../../../../components/OdooFunctions/OdooFunction'
import PageTitleCard from '../../../../components/UI/PageTitleCard/PageTitleCard'
import classes from "./CreatePosition.module.css"

const CreatePosition = () => {
const [department,setDepartment] = useState("");
const [functionName,setFunctionName] = useState([]);

const handleChange = (e)=>{
    setDepartment(e.target.value);
}
const functionHandle = (e)=>{
    setFunctionName(e.target.value)
};
const Department = [
    {id:1,name:"IT Department"},
    {id:2,name:"HR Department"},
    {id:3,name:"Main Department"}
];

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
];
  return (
    <div>
        <PageTitleCard title="Create Position">
        <div className={classes["form-container"]}>
        <div className={classes["form-contol"]}>
         <label>Choose Department</label>
         <Select 
         size='small'
         onChange={handleChange}
         value={department}
         >
        {
            Department.map((dep,index)=>(
                <MenuItem key={index} value={dep.id}>
                {
                    dep.name
                }
                </MenuItem>
            ))
        }
         </Select>
        </div>
        {/* <div className={classes["form-contol"]}>
            <label>Choose Function</label>
            <Select
          labelid="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={functionName}
          size="small"
          // ref={arr}
          onChange={functionHandle}
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
            </div> */}
            <Grid container spacing={5}>

            
        {
          functionArr.map((func,index)=>(
            <Grid item xs={4} key={index}>
            <OdooFunction />
            </Grid>


          ))
        }
        </Grid>
        <div className={classes["btn-container"]}>
        <Button variant="contained">Create</Button>
        </div>
        </div>
        </PageTitleCard>
    </div>
  )
}

export default CreatePosition