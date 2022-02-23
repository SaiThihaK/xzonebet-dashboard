import React from "react";
import BetTable from "./BetTable/BetTable";
import TableLists from "./TableLists/TableLists";
import classes from "./GlobalTable.module.css";
const GlobalTable = () => {
  return (
    <div className={classes["betting_section"]}>
      <div className={classes["live_bet"]}>
        <div>
          <TableLists />
          <BetTable />
        </div>
      </div>
    </div>
  );
};

export default GlobalTable;
