import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CustomLoading from '../../components/CustomLoading/CustomLoading';
import PageTitleCard from "../../components/UI/PageTitleCard/PageTitleCard"
import CustomGetFunction from '../../services/CustomGetFunction';
import DepartmentDataTable from '../AdminTeamAccount/Department/DepartmentDataTable/DepartmentDataTable';
import DepartmentTable from '../AdminTeamAccount/Department/DepartmentTable/DepartmentTable';
import classes from "./HrDepartment.module.css"
const HrDepartment = () => {
  const navigate = useNavigate();
  const [render,setRender] = useState(false);
  const {data,loading} = CustomGetFunction("api/departments",[render]);
  console.log("loading",loading)
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
          loading?(<DepartmentDataTable data={data} render={render} setRender={setRender} />)
          :(<CustomLoading  />)
         } 
         </div>
        
        </PageTitleCard>
    </div>
  )
}

export default HrDepartment;