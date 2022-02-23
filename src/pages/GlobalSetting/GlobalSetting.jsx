import React from "react";
import Card from "../../components/UI/Card";
import GlobalSettingPages from "./GlobalSettingPages/GlobalSettingPages";
import classes from "./GlobalSetting.module.css";
const GlobalSetting = () => {
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Global Betting</h1>
        </div>
        <div className={classes["card-body"]}>
            <GlobalSettingPages />
        </div>
      </Card>
    </div>
  );
};

export default GlobalSetting;
