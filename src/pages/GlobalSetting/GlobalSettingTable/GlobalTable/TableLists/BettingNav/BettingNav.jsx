import React,{useState,useEffect} from "react";

import classes from "./BettingNav.module.css";
import Bettingnavitemcontainer from "./BettingNavItem/BettingNavItemContainer";
const BettingNav = () => {

  const [fixture,setFixture] = useState([]);




  return (
    <div className={classes["betting-nav"]}>
      <div className={classes["live-category"]}>
      <Bettingnavitemcontainer icon={"fas fa-futbol"} name={"football"} />
      <Bettingnavitemcontainer icon={"fas fa-baseball-ball"} name={"tennis"} />
      <Bettingnavitemcontainer icon={"fas fa-basketball-ball"} name={"basketball"} />
      <Bettingnavitemcontainer icon={"fas fa-futbol"} name={"football"} />
        <Bettingnavitemcontainer icon={"fas fa-baseball-ball"} name={"tennis"} />
        <Bettingnavitemcontainer icon={"fas fa-basketball-ball"} name={"basketball"} />
        <Bettingnavitemcontainer icon={"fas fa-futbol"} name={"football"} />
       
 
      </div>
      
  </div>
  );
};

export default BettingNav;
