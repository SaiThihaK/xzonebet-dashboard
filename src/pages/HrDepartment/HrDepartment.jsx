import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PageTitleCard from "../../components/UI/PageTitleCard/PageTitleCard"
import CustomGetFunction from '../../services/CustomGetFunction';
import DepartmentTable from '../AdminTeamAccount/Department/DepartmentTable/DepartmentTable';
import classes from "./HrDepartment.module.css"
const HrDepartment = () => {
  const navigate = useNavigate();
  const [render,setRender] = useState(false);
  const {data} = CustomGetFunction("api/departments",[render]);
  console.log(data)
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
          <DepartmentTable data={data} render={render} setRender={setRender} />
        </PageTitleCard>
    </div>
  )
}

export default HrDepartment;