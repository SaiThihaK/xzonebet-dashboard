import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageTitleCard from '../../../components/UI/PageTitleCard/PageTitleCard'
import classes from "./Position.module.css"

const Position = () => {
    const navigate = useNavigate();
  return (
    <div>
        <PageTitleCard title="Position">
        <div className={classes["body"]}>
        <div className={classes["btn-group"]}>
            <Button 
            onClick={()=>navigate("/admin-team-account/position/create-position")}
            variant='contained'
            >Create Position</Button>
        </div>
        </div>
        </PageTitleCard>
    </div>
  )
}

export default Position