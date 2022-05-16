import React from 'react'
import classes from "./AgentCard.module.css"
import { Card} from "@mui/material"
import { Link } from 'react-router-dom'
const AgentCard = ({route,data}) => {
    console.log(data);
  return (
    <Card className={classes["card"]}>
        <Link to={route}>
        <div className={classes["card-grid"]}>
        <div className={classes["first-grid"]}>
        <div className={classes["img-container"]}>
            <img src="https://icon-library.com/images/user-icon-jpg/user-icon-jpg-14.jpg" alt="agent" />
        </div>
        <div className={classes["info"]}>
         <p>{data?.name}</p>
         <p>{data?.email}</p>
        </div>
        </div>
        <div className={classes["second-grid"]}>
        <div className={classes["total-user"]}>
        <p>Total Users</p>
        <p>30K</p>
        </div>
        <div className={classes["show-data"]}>
        <p>Total Users</p>
        <p>30K</p>
        </div>
        <br/>
        </div>
        </div>
        </Link>
        </Card>

    
  )
}

export default AgentCard