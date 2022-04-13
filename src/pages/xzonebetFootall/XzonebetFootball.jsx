import { Button } from '@mui/material'
import React, { useState } from 'react'
import XzonebetFootballModal from '../../components/UI/Modal/XzonebetFootballModal/XzonebetFootballModal'
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard'
import classes from "./XzonebetFootball.module.css"
const XzonebetFootball = () => {
const [open,setOpen] = useState(false);

const openHandler = ()=>setOpen(true);
const closeHandler = ()=>setOpen(false);
  return (
<PageTitleCard title="XzoneBet-Football Setting">
    <div className={classes["card-body"]}>
    <div className={classes["btn-container"]}>
    <Button variant="contained" onClick={openHandler}>
    Create League
    </Button>    
    </div>
    </div>
    <XzonebetFootballModal open={open} closeHandler={closeHandler} />
</PageTitleCard>
  )
}

export default XzonebetFootball