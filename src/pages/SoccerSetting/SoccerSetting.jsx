import React from "react";
import Card from "../../components/UI/Card";
import SoccerSettingCard from "./SoccerSettingCard/SoccerSettingCard";
import classes from "./SoccerSetting.module.css";
const SoccerSetting = () => {
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Soccer Setting</h1>
        </div>
        <div className={classes["card-body"]}>
           <div className={classes['soccer-setting-content-flex']}>
               <SoccerSettingCard name="Fixture Betting" bgColor="#FF5370" path="fixture-betting" />
               <SoccerSettingCard name="Maung Setting" bgColor="#4099FF" path="maung-setting" />
           </div>
        </div>
      </Card>
    </div>
  );
};

export default SoccerSetting;
