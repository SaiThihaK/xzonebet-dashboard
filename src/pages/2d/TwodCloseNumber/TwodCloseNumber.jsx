import React from "react";
import Card from "../../../components/UI/Card";
import NumbersTable from "./NumbersTable/NumbersTable";
import classes from "./TwodCloseNumber.module.css";
const TwodCloseNumber = () => {
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>2D (Disable & Enable Numbers)</h1>
        </div>
        <div className={classes["card-body"]}>
            <div className={classes['all-number-container']}>
               <NumbersTable />
            </div>
        </div>
      </Card>
    </div>
  );
};

export default TwodCloseNumber;
