import React, {  useState } from 'react'
import { useParams } from 'react-router-dom';
import PageTitleCard from '../../../../components/UI/PageTitleCard/PageTitleCard';
import CustomGetFunction from '../../../../services/CustomGetFunction';
import classes from "./EditDepartment.module.css";
import CustomLoading from '../../../../components/CustomLoading/CustomLoading';
import {  Button, Grid, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import { getMethod, PatchMethod, PostMethod } from '../../../../services/api-services';
import { toast } from 'react-toastify';
import OdooFunction from '../../../../components/OdooFunctions/OdooFunction';
import { positions } from '@mui/system';

const EditDepartment = () => {
    const {id} = useParams();
    const {data,loading} = CustomGetFunction(`api/departments/${id}`,[id]);
    const [department,setDepartment] = useState("");
    const [functioName,setFunctionName] = useState("");
    const [permission,setPermission] = useState([]);
  console.log(data)
  const OdooClick = (name)=>{
    setFunctionName((prevState)=>([
      ...prevState,name
    ]))
  }
 console.log("functionName",functioName) 

const fetchPermission = async()=>{
try{
const response = await axios.request(getMethod("api/admin/permissions"));
if(response.data.status==="success"){
    setPermission(response.data.data);
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


    React.useEffect(()=>{ 
        fetchPermission();
        return ()=>{
        setPermission([]);
        }
        },[id]);

const EditHandler = async()=>{
    try{
const response = await axios.request(PatchMethod(`api/departments/${id}`,{
name:department,
permissions:functioName
}));
if(response.data.status === "success"){
    toast.success(response.data.message);
    setDepartment("");
    setPermission([]);
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
    <PageTitleCard title="Edit Department">
     <div className={classes["card-body"]}>
      {
          loading ? (
          <div>
<div className={classes["form-Control"]}>
<label>Department</label>
<TextField
   inputProps={{
    autoComplete: 'off'
 }}

size="small" fullWidth value={department} onChange={(e)=>{setDepartment(e.target.value)}} />
</div>
<div className={classes["form-Control"]}>
<Grid container>
{
    permission?.map((perm,index)=>(
        <Grid item xs={4} key={index}>
            <OdooFunction func={perm} OdooClick={ OdooClick} />
        </Grid>
    ))
}
</Grid>
</div>
<div className={classes["btn-container"]}>
<Button variant="contained" onClick={EditHandler}>Edit</Button>
</div>
</div>):(<CustomLoading />)
      }
     </div>
    </PageTitleCard>
  )
}

export default EditDepartment