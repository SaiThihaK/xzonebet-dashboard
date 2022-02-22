import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import classes from "./Submenu.module.css";
const Submenu = ({ item }) => {
  //assigning location variable
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;
  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  //active class add 
  // className={splitLocation[1] === "" ? "active" : ""}

  const [subnav, setSubnav] = useState(false);
  const showSubNav = () => {
    setSubnav(!subnav);
  };

  // console.log(subnav)
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
