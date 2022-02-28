import React from "react";
import BettngSection from "./BettingSection/BettingSection";
import classes from "./GlobalTable.module.css";
const GlobalTable = ({endDateValue}) => {
  return (
    <div className={classes["betting_section"]}>
      <div className={classes["live_bet"]}>
        <div>
        <BettngSection/>
        </div>
      </div>
    </div>
  );
};

export default GlobalTable;
