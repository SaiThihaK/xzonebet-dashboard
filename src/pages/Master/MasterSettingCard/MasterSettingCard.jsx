import React from 'react';
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import classes from './MasterSettingCard.module.css';
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
// import * as RiIcons from "react-icons/ri";

const MasterSettingCard = ({name,bgColor,path,userNum}) => {
  return (
    <div className={classes["soccer-card-item"]}>
      <Link to={path}>
      <div style={{backgroundColor: bgColor}} className={classes["item-card"]}>
        <div className={classes['card-icon-flex']}>
          <h3 className={classes['card-label']}>{name}</h3>
          <FaIcons.FaUserAlt style={{fontSize: "40px"}} />
        </div>
        <span className={classes['total-number']}>{userNum}</span>
      </div>
      </Link>
    </div>
  )
}

export default MasterSettingCard;