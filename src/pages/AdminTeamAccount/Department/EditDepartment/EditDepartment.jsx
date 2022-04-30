import React, {  useState } from 'react'
import { useParams } from 'react-router-dom';
import PageTitleCard from '../../../../components/UI/PageTitleCard/PageTitleCard';
import CustomGetFunction from '../../../../services/CustomGetFunction';
import classes from "./EditDepartment.module.css";
import CustomLoading from '../../../../components/CustomLoading/CustomLoading';
import {  MenuItem, Select } from '@mui/material';
import axios from 'axios';
import { getMethod } from '../../../../services/api-services';
import { toast } from 'react-toastify';


const EditDepartment = () => {
    const {id} = useParams();
    const [department,setDepartment] = useState([]);
    const [position,setPosition] = useState([]);
    const [permission,setPermission] = useState([]);
    console.log(id);
  const {data,loading} = CustomGetFunction(`api/departments/${id}`,[id]);

  console.log(data)

  const fetchDepartment = async()=>{
    const response = await axios.request(getMethod("api/departments"));
    try{
        if(response.data.status === "success"){
            setDepartment(response.data.data);
            return;
        }
        if(response.data.status==="error"){
            toast.error(response.data.data.message);
            return;
        }
    }catch(error){
        toast.error(error.response.data.message);
    }
}
const fetchPosition = async()=>{
        const response = await axios.request(getMethod("api/positions"));
        try{
            if(response.data.status === "success"){
                setPosition(response.data.data);
                return;
            }
            if(response.data.status==="error"){
                toast.error(response.data.data.message);
                return;
            }
        }catch(error){
            toast.error(error.response.data.message);
        }
    } 

const fetchPermisson = async()=>{
    try{
        const response = await axios.request(getMethod("api/admin/permissions"));
        console.log("response",response)
        if(response.data.status==="success"){
        setPermission(response.data.data);
        console.log("permission",permission);
        return;
        }
        if(response.data.status==="error"){
            toast.error(response.data.message)
        }
        }catch(error){
           toast.error(error.response.data.message)
        }
}

    React.useEffect(()=>{
        fetchDepartment();
        fetchPosition();
        fetchPermisson();
        return ()=>{
            setDepartment([]);
            setPosition([]);
            setPermission([]);
        }
        },[id]);
  
  return (
    <PageTitleCard title="Edit Department">
     <div className={classes["card-body"]}>
      {
          loading ? (
          <div>
<div style={{marginBottom:20}}>
<label>Department</label>
<Select fullWidth size="small">
{
    department?.map((dep,index)=>(
        <MenuItem value={dep} key={index}>
         {
             dep.name 
         }
        </MenuItem>
    ))
}
</Select>
<div style={{marginBottom:20}}>
<label>Position</label>
<Select fullWidth size="small">
    {
        position.map((pos,index)=>(
        <MenuItem key={index} value={pos.id}>
       {
           pos.name
       }
        </MenuItem>    
        ))
    }
</Select>
</div>
</div>
          </div>):(<CustomLoading />)
      }
     </div>
    </PageTitleCard>
  )
}

export default EditDepartment