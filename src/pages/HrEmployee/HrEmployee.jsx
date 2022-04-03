import { Button, TextField } from '@mui/material'
import React from 'react'
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard'
import DepartmentTable from '../AdminTeamAccount/Department/DepartmentTable/DepartmentTable'

const HrEmployee = () => {
    const employeeData = [
        {name:"Chief Marketing Manager"},
        {name:"Digital Marketing"},
        {name:"Content Writer"},
        {name:"Graphic Designer"}
      ]
    
  return (
    <div>
        <PageTitleCard title="employee">
        {/* <div className={classes["card-body"]}>
             <TextField size='small' sx={{width:600}}/>
         <div className={classes["create-btn"]}>
             <Button variant="contained"
             onClick={()=>navigate("/admin-team-account/department/create-department")}
             >Create Department</Button>
         </div>
         </div> */}
            <DepartmentTable data={employeeData}/>
        </PageTitleCard>
    </div>
  )
}

export default HrEmployee