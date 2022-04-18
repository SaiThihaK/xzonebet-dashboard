import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import MemberCard from '../../components/MemberCard/MemberCard'
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard';
import CustomGetFunction from '../../services/CustomGetFunction';
import { useNavigate } from 'react-router-dom';
import classes from "./HrEmployee.module.css"

const HrEmployee = () => {
    const navigate = useNavigate();
    const employeeData = [
        {name:"Chief Marketing Manager"},
        {name:"Digital Marketing"},
        {name:"Content Writer"},
        {name:"Graphic Designer"}
      ]
    
    
    
    return (
    <div>
        <PageTitleCard title="employee">
        <div className={classes["card-body"]}>
             <TextField size='small' sx={{width:600}}/>
         <div className={classes["create-btn"]}>
             <Button variant="contained"
            //  onClick={()=>navigate("/admin-team-account/department/create-department")}
             >Create Employee</Button> 
         </div>
         </div>
            {/* <DepartmentTable data={employeeData}/> */}
            <Grid container spacing={5}>
              {
              
                employeeData.length !==0 && employeeData.map((data,index)=>(
                 <Grid item xs={6} key={index}>
                    <MemberCard partner={data} path={"/account/master/panding-master/detail/"} />
                   </Grid>
                 
                ))
              }
            </Grid>
        </PageTitleCard>
    </div>
  )
}

export default HrEmployee