import React from 'react'
import classes from "./AgentCard.module.css"
import { Card} from "@mui/material"
import { Link, useNavigate } from 'react-router-dom'
const AgentCard = ({route,data}) => {
const navigate = useNavigate();
console.log("agent Detail",data);
  return (
    <Card className={classes["card"]}>
        <div className={classes["card-grid"]}>
        <div className={classes["first-grid"]}>
        <div className={classes["img-container"]}>
            <img src="https://icon-library.com/images/user-icon-jpg/user-icon-jpg-14.jpg" alt="agent" />
        </div>
        </div>
        <div className={classes["second-grid"]}>
         <div className={classes["info"]}>
           <p>{data?.id}</p>
           <p>{data?.email}</p>
           <div className={classes["user-info"]}>
            <div className={classes["total-user"]}>
            <p>Total Users</p>
            <p className={classes["amount"]}>
              {data?.downlines?.length || 0}
            </p>
            </div>
            <div className={classes["current-amount"]}>
            <p>Total Unit</p>
            <p className={classes["amount"]}>
            {
              data?.wallet?.main_unit
            }
            </p>
            </div>
           </div>
         </div>
        </div>
        <div className={classes["btn-container"]}>
            <button className={classes["btn"]} onClick={()=>navigate(route)}>More Detail</button>
        </div>
        </div>
        </Card>

    
  )
}

export default AgentCard