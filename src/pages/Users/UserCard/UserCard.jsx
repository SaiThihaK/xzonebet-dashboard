import React from 'react';
import { Link } from "react-router-dom";

// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
// import * as RiIcons from "react-icons/ri";
import classes from './UserCard.module.css';
const UserCard = ({name,bgColor,path,icon}) => {
  return (
    <div className={classes["soccer-card-item"]}>
      <Link to={path}>
      <div style={{backgroundColor: bgColor}} className={classes["item-card"]}>
        <div className={classes['card-icon-flex']}>
          <p className={classes['card-label']}>{name}</p>
         {
           icon
         }
        </div>
      </div>
      </Link>
    </div>
  )
}

export default UserCard
