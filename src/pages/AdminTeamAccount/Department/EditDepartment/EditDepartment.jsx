import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PageTitleCard from '../../../../components/UI/PageTitleCard/PageTitleCard';
import CustomGetFunction from '../../../../services/CustomGetFunction';
import classes from "./EditDepartment.module.css";
import CustomLoading from '../../../../components/CustomLoading/CustomLoading';
import { Select, TextField } from '@mui/material';
import axios from 'axios';
import { getMethod } from '../../../../services/api-services';
import { toast } from 'react-toastify';

const EditDepartment = () => {
    const {id} = useParams();
    const [department,setDepartment] = useState([]);
    const [position,setPosition] = useState([]);
    console.log(id);
  const {data,loading} = CustomGetFunction(`api/departments/${id}`,[id]);

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
    React.useEffect(()=>{
        fetchDepartment();
        fetchPosition();
        return ()=>{
            setDepartment([]);
            setPosition([]);
        }
        },[id])  
  
  return (
    <PageTitleCard title="Edit Department">
     <div className={classes["card-body"]}>
      {
          loading ? (<div>
<div className={classes["form-Control"]}>
<label>Department</label>
<Select fullWidth size="small">

</Select>
</div>
          </div>):(<CustomLoading />)
      }
     </div>
    </PageTitleCard>
  )
}

export default EditDepartment