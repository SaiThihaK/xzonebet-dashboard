import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../UI/Card';
import classes from "./MemberCard.module.css"

const MemberCard = ({partner,path,status}) => {
  return (
     <Link to={path+partner?.id || "1"}> 
    <div className={classes["container"]}>
        <div className={classes["img-container"]}>
            <img src='https://icon-library.com/images/user-icon-jpg/user-icon-jpg-14.jpg' alt="admin team account" />
        </div>
        <div   className={classes["form-container"]}>
      <div className={classes["form-group-desc"]}>
          <label htmlFor="">Name </label>:<p>&nbsp;&nbsp;{partner?.name ||  ""}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Email </label>:<p>&nbsp;&nbsp;{partner?.email ||  ""}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Phone </label>:<p>&nbsp;&nbsp;{partner?.phone ||  ""}</p>
        </div>
        {
          status && <div className={classes["form-group-desc"]}>
          <label htmlFor="">Form Type </label>:<p>&nbsp;&nbsp;{partner?.form_type||  ""}</p>
        </div>
        }
      </div>
    </div>
    </Link> 
  )
}

export default MemberCard