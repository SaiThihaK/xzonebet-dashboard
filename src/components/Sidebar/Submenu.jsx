import React, { useState, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import classes from './Submenu.module.css';
const Submenu = ({ item }) => {
  //assigning location variable
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;
  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/');
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
      <ul>
        {subnav &&
          item.subNav.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  className={(navData) =>
                    `${classes['sub-list']} ${
                      navData.isActive ? classes.active : ''
                    }`
                  }
                  to={item.path}
                >
                  {item.icon}
                  <span className={classes.subbarLabel}>{item.title}</span>
                </NavLink>
              </li>
              // <Link to={item.path} key={index}>
              //   <div className={classes['sub-list']}>
              //     {item.icon}
              //     <span className={classes.subbarLabel}>{item.title}</span>
              //   </div>
              // </Link>
            );
          })}
      </ul>
    </Fragment>
  );
};
export default Submenu;
