import React from 'react'
import classes from "./DepartmentDetail.module.css"
import PageTitleCard from "../../../../components/UI/PageTitleCard/PageTitleCard"
import { useParams } from 'react-router-dom'
import CustomGetFunction from '../../../../services/CustomGetFunction'
import { Grid } from '@mui/material';
import CustomLoading from '../../../../components/CustomLoading/CustomLoading'
import OdooFunction from '../../../../components/OdooFunctions/OdooFunction'
const DepartmentDetail = () => {
    const {id} = useParams();
    const {data,loading} = CustomGetFunction(`api/departments/${id}`,[id]);
    console.log(data)
  return (
    <PageTitleCard title="DepartmentDetail">
        <div className={classes["card-body"]}>
            
         {
          loading ? (<Grid container>
           {
               data?.positions?.map((position,index)=>(
                <Grid item xs={3} key={index}>
               <OdooFunction added func={position} />
                </Grid>  
               ))
           }
          </Grid>):(<CustomLoading />)
         }  
        </div>
    </PageTitleCard>
  )
}

export default DepartmentDetail