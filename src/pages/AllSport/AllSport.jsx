import { Button } from '@mui/material'
import React from 'react'
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard';
import classes from "./AllSport.module.css"
import AllSportTable from './AllSportTable/AllSportTable';

const AllSport = () => {
  return (
    <PageTitleCard title="All Sports">
        <div className={classes["card-body"]}>
            <div className={classes["btn-container"]}>
                <Button variant="contained">Create Sport catgory</Button>
           </div> 
           <div className={classes["table-margin"]}>

           </div>
           <AllSportTable />
        </div>
    </PageTitleCard>
  )
}

export default AllSport