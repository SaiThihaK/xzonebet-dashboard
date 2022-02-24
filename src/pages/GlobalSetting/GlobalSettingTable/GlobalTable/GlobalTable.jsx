import React from "react";
import BetTable from "./BetTable/BetTable";
import TableLists from "./TableLists/TableLists";
import classes from "./GlobalTable.module.css";
const GlobalTable = ({endDateValue}) => {
  return (
    <div className={classes["betting_section"]}>
      <div className={classes["live_bet"]}>
        <div>
          <TableLists />
          <BetTable endDateValue ={endDateValue} />
        </div>
      </div>
    </div>
  );
};

export default GlobalTable;
