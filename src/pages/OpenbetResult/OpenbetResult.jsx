import React from 'react'
import classes from "./OpenbetResult.module.css"
import {Grid} from "@mui/material"
import ResultCard from "./ResultCard/ResultCard"
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard'
const OpenbetResult = () => {
    const arr = ["1",'2','3','4','5'];
  return (
    <PageTitleCard title="Opening bet Result">
   <div className={classes["card-body"]}>
   <Grid container rowSpacing={3}>
     {
       arr.map((item,index)=>(
         <Grid item xs={4}>
        <ResultCard key={index} />
         </Grid>
     
       ))
     }
   </Grid>
   </div>
    </PageTitleCard>
  )
}

export default OpenbetResult