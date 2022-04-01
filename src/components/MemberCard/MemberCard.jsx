import React from 'react';
import Card from '../UI/Card';
import classes from "./MemberCard.module.css"

const MemberCard = () => {
  return (
   
    <div className={classes["container"]}>
        <div className={classes["img-container"]}>
            <img src='https://icon-library.com/images/user-icon-jpg/user-icon-jpg-14.jpg' alt="admin team account" />
        </div>
        <div   className={classes["form-container"]}>
      <div className={classes["form-group-desc"]}>
          <label htmlFor="">Unit </label>:<p>&nbsp;&nbsp;fsdagfasdgsdag</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Email </label>:<p>&nbsp;&nbsp;vgrdfghsfdgfsd</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Phone </label>:<p>&nbsp;&nbsp;vgrdfghsfdgfsd</p>
        </div>
      </div>
    </div>
  )
}

export default MemberCard