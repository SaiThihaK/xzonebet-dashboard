import React from 'react';
import BettingNavItem from './BettingNavItem';
import  classes from "./BettingNavItemContainer.module.css";

const Bettingnavitemcontainer = ({fixture,icon,name }) => {
    return (
    
        <div className={classes["lc-item"]}  >
        <div className={classes["live-icon"]}>
            <i className={icon}></i>
        </div>
        <p>{name}</p> 
        <ul className={classes["betting-dropdown-item"]}>
        {fixture.map((el) => {
          
          return (

          <BettingNavItem element={el}  key={el.fixture.id}/>
      

          )}) }
          
          </ul>
      </div>                                
    
    
    );
}

export default Bettingnavitemcontainer;
