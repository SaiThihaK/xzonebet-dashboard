import React from 'react';
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
// import * as RiIcons from "react-icons/ri";
import classes from './MasterSettingCard.module.css';
const MasterSettingCard = ({name,bgColor,path}) => {
  return (
    <div className={classes["soccer-card-item"]}>
      <Link to={path}>
      <div style={{backgroundColor: bgColor}} className={classes["item-card"]}>
        <div className={classes['card-icon-flex']}>
          <h3>{name}</h3>
          <FaIcons.FaUserAlt style={{fontSize: "40px"}} />
        </div>
        <span className={classes['total-number']}>10</span>
      </div>
      </Link>
    </div>
  )
}

export default MasterSettingCard;