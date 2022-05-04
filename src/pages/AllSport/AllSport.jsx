import { Button } from '@mui/material'
import React, { useState } from 'react'
import CustomLoading from '../../components/CustomLoading/CustomLoading';
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard';
import KSHFunction from '../../services/KSHFunction';
import classes from "./AllSport.module.css"
import AllSportTable from './AllSportTable/AllSportTable';
import CreateSportModal from "../../components/UI/Modal/CreateSportModal/CreateSportModal"
const AllSport = () => {
 const [open,setOpen] = useState(false);
 const handleOpen = ()=>setOpen(true);
 const handleClose =()=>setOpen(false);
 const [render,setRender] = useState(false);
 const {data,loading} = KSHFunction("api/sport-categories",[render]);
  return (
    <PageTitleCard title="All Sports">
        <div className={classes["card-body"]}>
            <div className={classes["btn-container"]}>
                <Button variant="contained" onClick={handleOpen}>Create Sport catgory</Button>
           </div> 
           <div className={classes["table-margin"]}>

           </div>
           {loading ?<AllSportTable data={data} render={render} setRender={setRender} /> : (<CustomLoading />)}
        </div>
        <CreateSportModal open={open} handleClose={handleClose} render={render} setRender={setRender} />
    </PageTitleCard>
  )
}

export default AllSport