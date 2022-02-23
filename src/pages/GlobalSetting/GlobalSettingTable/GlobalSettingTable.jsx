import React from "react";
import Card from "../../../components/UI/Card";
import GlobalTable from "./GlobalTable/GlobalTable";
import classes from "./GlobalSettingTable.module.css";
const GlobalSettingTable = () => {
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Global Betting - 1</h1>
        </div>
        <div className={classes["card-body"]}>
            <GlobalTable />
        </div>
      </Card>
    </div>
  );
};

export default GlobalSettingTable;
