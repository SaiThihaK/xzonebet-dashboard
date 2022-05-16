import React from 'react'
import classes from "./AgentCard.module.css"
import { Card} from "@mui/material"
import { Link } from 'react-router-dom'
const AgentCard = ({route,data}) => {

  return (
    <Card className={classes["card"]}>
       
        <div className={classes["card-grid"]}>
        <div className={classes["first-grid"]}>
        <div className={classes["img-container"]}>
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="agent" />
        </div>
        </div>
        <div className={classes["second-grid"]}>
         <div className={classes["info"]}>
           <p>1003</p>
           <p>ZawZaw@gmail.com</p>
           <div className={classes["user-info"]}>
            <div className={classes["total-user"]}>
            <p>Total Users</p>
            <p className={classes["number"]}>21</p>
            </div>
            <div className={classes["current-amount"]}>
            <p>Total Users</p>
            <p className={classes["number"]}>21</p>
            </div>
           </div>
         </div>
        </div>
        <div className={classes["btn-container"]}>
            <button className={classes["btn"]}>More Detail</button>
        </div>
        </div>
        </Card>

    
  )
}

export default AgentCard