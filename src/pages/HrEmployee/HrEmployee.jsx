import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import MemberCard from '../../components/MemberCard/MemberCard'
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard';
import CustomGetFunction from '../../services/CustomGetFunction';
import { useNavigate } from 'react-router-dom';
import classes from "./HrEmployee.module.css";
import Nodata from '../../components/Nodata/Nodata';
import CustomLoading from '../../components/CustomLoading/CustomLoading';
const HrEmployee = () => {
    const navigate = useNavigate();
    const {data,loading} = CustomGetFunction("api/employees",[]); 
    console.log(data);
    return (
    <div>
        <PageTitleCard title="employee">
        <div className={classes["card-body"]}>
             <TextField size='small' sx={{width:600}}/>
         <div className={classes["create-btn"]}>
             <Button variant="contained"
             onClick={()=>navigate("/dashboard/employee-form")}
             >Create Employee</Button> 
         </div>
         </div>
         {
            loading ? ( <>
            {
              data?.length !== 0 ?( <Grid container spacing={5}>
                {
                   data?.map((employee,index)=>(
                   <Grid item xs={6} key={index}>
                      <MemberCard partner={employee} path={`/dashboard/employee/employee-detail/${employee.position?.id}`} />
                     </Grid>
                   
                    ))
                }
              </Grid>):(<Nodata />)
            }
           
            </>):(<CustomLoading />)
          } 
         
      
         
        </PageTitleCard>
    </div>
  )
}

export default HrEmployee