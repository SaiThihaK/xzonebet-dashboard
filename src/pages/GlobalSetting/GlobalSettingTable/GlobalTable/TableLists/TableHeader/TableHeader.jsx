import React from "react";
import classes from "./TableHeader.module.css";
const TableHeader = () => {
  return (
    <div className={classes['live-header']}>
      <p className={classes['live-title']}>PRE BETTING</p>
      <div className={classes['live-search']}>
        <form action="">
          <input type="text" placeholder="Search" />
          <i className="fas fa-search"></i>
        </form>
      </div>
    </div>
  );
};

export default TableHeader;
