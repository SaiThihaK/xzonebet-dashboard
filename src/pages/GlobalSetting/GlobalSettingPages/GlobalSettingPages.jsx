import React from "react";
import SoccerSettingCard from "../../SoccerSetting/SoccerSettingCard/SoccerSettingCard";
import classes from "./GlobalSettingPages.module.css";
const GlobalSettingPages = () => {
  return (
    <div className={classes["soccer-setting-content-flex"]}>
      <SoccerSettingCard
        name="Booky Setting"
        bgColor="#4099FF"
        path="edit-betting"
      />
      <SoccerSettingCard
        name="Betting Table"
        bgColor="#4099FF"
        path="search-betting"
      />
    </div>
  );
};

export default GlobalSettingPages;
