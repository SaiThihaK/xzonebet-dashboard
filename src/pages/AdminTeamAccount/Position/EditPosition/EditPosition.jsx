
import { ErrorOutline } from '@mui/icons-material'
import { Button, Grid, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import CustomLoading from '../../../../components/CustomLoading/CustomLoading'
import Nodata from '../../../../components/Nodata/Nodata'
import OdooFunction from '../../../../components/OdooFunctions/OdooFunction'
import PageTitleCard from '../../../../components/UI/PageTitleCard/PageTitleCard'
import { PatchMethod } from '../../../../services/api-services'
import CustomGetFunction from '../../../../services/CustomGetFunction'
import classes from "./EditPosition.module.css"
const EditPosition = () => {
    const {id} = useParams();
const {data,loading} = CustomGetFunction("api/departments",[id]);

const [department,setDepartment] = useState([]);
const [position,setPosition] = useState("");
const [functionName,setFunctionName] = useState([]);
const OdooClick = (name)=>{
  setFunctionName((prevState)=>([
    ...prevState,name
  ]))
}
const EditHandler = async()=>{
    try{
const response = await axios.request(PatchMethod(`api/positions/${id}`,{
name:position,
department_id:department.id,
permissions:functionName,
}));
if(response.data.status==="success"){
    toast.success(response.data.message);
    setPosition("");
    setDepartment([]);
    setFunctionName([]);
    return;
}
if(response.data.status === "error"){
    toast.error(response.data.message);
    return;
}
    }catch(error){
        toast.error(error.response.data.message)
    }
}


  return (
 <PageTitleCard title="Edit Position">
     <div className={classes["card-body"]}>
      {
          loading ? (
         <div>
  <div className={classes["form-control"]}>
  <label>Department</label>
  <Select size='small' fullWidth value={department} onChange={(e)=>setDepartment(e.target.value)}>
  {
      data?.map((dep,index)=>(
          <MenuItem value={dep} key={index}>
              {dep.name}
          </MenuItem>
      ))
  }
  </Select>
  </div>
 <div className={classes["form-control"]}>
<label>Position</label>
<TextField size="small" fullWidth value={position} onChange={(e)=>setPosition(e.target.value)} />
 </div>
 {
              department?.permissions?.length !==0 ? (<Grid container spacing={5}>
                { department?.permissions?.map((func,index)=>(
                          <Grid item xs={4} key={index}>
                          <OdooFunction func={func} OdooClick={OdooClick} />
                          </Grid>
                        ))
                      }
                      </Grid>):(<Nodata/>)
            }
  <div className={classes["btn-container"]}>
  <Button variant="contained" onClick={()=>{EditHandler()}}>Edit</Button>
      </div>
         </div>
          ):(<CustomLoading />)
      }
    
     </div>
 </PageTitleCard>
  )
}

export default EditPosition