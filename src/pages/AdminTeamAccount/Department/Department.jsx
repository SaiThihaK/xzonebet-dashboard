
import { Button,TextField } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PageTitleCard from '../../../components/UI/PageTitleCard/PageTitleCard';
import classes from "./Department.module.css";
import DepartmentTable from './DepartmentTable/DepartmentTable';
import CustomGetFunction from "../../../services/CustomGetFunction"
import CustomLoading from "../../../components/CustomLoading/CustomLoading"
import DepartmentDataTable from './DepartmentDataTable/DepartmentDataTable';
const Department = () => {
    const [render,setRender] = useState(false);
    const navigate = useNavigate();
    const {data,loading} = CustomGetFunction("api/departments",[render])

    
  return (
    <div>
        <PageTitleCard title="Department">
         <div className={classes["card-body"]}>
             <TextField size='small' sx={{width:600}}/>
         <div className={classes["create-btn"]}>
             <Button variant="contained"
             onClick={()=>navigate("/admin-team-account/department/create-department")}
             >Create Department</Button>
         </div>
         </div>
         <div className={classes["table-margin"]}>
         {
           loading ? ( <DepartmentDataTable  data={data} render={render} setRender={setRender} />):(<CustomLoading />)
         }
         </div>
        
    
        </PageTitleCard>
        
    </div>
  )
}

export default Department