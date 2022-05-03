import { Button } from '@mui/material'
import React from 'react'
import CustomLoading from '../../components/CustomLoading/CustomLoading';
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard';
import KSHFunction from '../../services/KSHFunction';
import classes from "./AllSport.module.css"
import AllSportTable from './AllSportTable/AllSportTable';

const AllSport = () => {
 const {data,loading} = KSHFunction("api/sport-categories",[]);
 console.log("all sport",data)
  return (
    <PageTitleCard title="All Sports">
        <div className={classes["card-body"]}>
            <div className={classes["btn-container"]}>
                <Button variant="contained">Create Sport catgory</Button>
           </div> 
           <div className={classes["table-margin"]}>

           </div>
           {loading ?<AllSportTable data={data} /> : (<CustomLoading />)}
        </div>
    </PageTitleCard>
  )
}

export default AllSport