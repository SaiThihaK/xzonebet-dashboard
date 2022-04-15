import { Grid } from '@mui/material'
import React from 'react'
import OdooFunction from '../../components/OdooFunctions/OdooFunction'
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard'
import classes from "./DetailFunction.module.css"

const DetailFunction = () => {
    const functionArr = [
        {id:1,name:"function1"},
        {id:2,name:"function2"},
        {id:3,name:"function3"},
        {id:4,name:"function4"},
        {id:5,name:"function5"},
        {id:6,name:"function6"},
        {id:7,name:"function7"},
        {id:8,name:"function8"},
        {id:9,name:"function9"}
    ]
  return (
    <div>
        <PageTitleCard title="DepartmentDetail">
    <Grid container spacing={1} style={{marginTop:30}}>
        {
  functionArr.map((func,index)=>(
    <Grid item xs={4} key={index}>
    <OdooFunction added />
    </Grid>
  ))
}
</Grid>
        </PageTitleCard>
    </div>
  )
}

export default DetailFunction