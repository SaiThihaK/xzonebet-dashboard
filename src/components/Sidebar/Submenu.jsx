import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Submenu.module.css";
const Submenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubNav = () => {
    setSubnav(!subnav);
  };
  return (
    <Fragment>
      <Link to={item.subNav === undefined ? item.path : '#'}>
        <div className={classes.menuItem} onClick={item.subNav && showSubNav}>
          <div>
            {item.icon}
            <span className={classes.sidebarLabel}>{item.title}</span>
          </div>
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </div>
      </Link>
      {
          subnav && item.subNav.map((item,index)=> {
            return (
                  <Link to={item.path} key={index}>
                      <div className={classes['sub-list']}>
                          {item.icon}
                          <span className={classes.subbarLabel}>{item.title}</span>
                      </div>
                  </Link>
                )
          })
      }
    </Fragment>
  );
};
export default Submenu;
