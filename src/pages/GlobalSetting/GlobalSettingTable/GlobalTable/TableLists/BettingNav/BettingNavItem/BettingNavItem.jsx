import React from "react";
import classes from "./BettingNavItem.module.css";
const BettingNavItem = ({ element }) => {
  return (
   
     
   
       
            <li>
              <button type="button">
                <div className={classes["d-flex"]}>
                  <img src={element.league.logo} alt="logo" />
                  <span className="far fa-star"></span>
                  <p>{element.league.country} - {element.league.name}</p>
                </div>
                <div className={classes["d-count"]}>
                  {" "}
                  1<i className="fas fa-chevron-right "></i>
                </div>
              </button>
            </li>
        
      
     
   
  );
};

export default BettingNavItem;
