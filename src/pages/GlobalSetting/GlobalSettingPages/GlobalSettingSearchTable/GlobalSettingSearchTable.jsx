import React from "react";
import Card from "../../../../components/UI/Card";
import GlobalSettingHeader from "../../GlobalSettingHeader/GlobalSettingHeader";
import classes from "./GlobalSettingSearchTable.module.css";
const GlobalSettingSearchTable = () => {
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Edit Betting</h1>
        </div>
        <div className={classes["card-body"]}>
           <GlobalSettingHeader />
        </div>
      </Card>
    </div>
  );
};

export default GlobalSettingSearchTable;
