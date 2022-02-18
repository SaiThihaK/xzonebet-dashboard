import React from "react";
import Card from "../../components/UI/Card";
import SearchHeader from "./SearchHeader/SearchHeader";
import TableList from "./TableList/TableList";
import classes from "./FixtureSetting.module.css";


const FixtureSetting = () => {
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Fixture Betting</h1>
        </div>
        <div className={classes["card-body"]}>
            <SearchHeader />
            <TableList/>
        </div>
      </Card>
    </div>
  );
};

export default FixtureSetting;
