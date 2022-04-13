import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import PageTitleCard from "../../components/UI/PageTitleCard/PageTitleCard"
import DepartmentTable from '../AdminTeamAccount/Department/DepartmentTable/DepartmentTable';
import classes from "./HrDepartment.module.css"
const HrDepartment = () => {
  const navigate = useNavigate();
  const departmentData = [
    {name:"Provider"},
    {name:"Accounting"},
    {name:"Marketing"}
    
  ]
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
          <DepartmentTable data={departmentData} />
        </PageTitleCard>
    </div>
  )
}

export default HrDepartment;