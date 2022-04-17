
import { Button,TextField } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import PageTitleCard from '../../../components/UI/PageTitleCard/PageTitleCard';
import classes from "./Department.module.css";
import DepartmentTable from './DepartmentTable/DepartmentTable';

const Department = () => {
    const navigate = useNavigate();
    
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
         <DepartmentTable name position status percentage salary />
        </PageTitleCard>
        
    </div>
  )
}

export default Department