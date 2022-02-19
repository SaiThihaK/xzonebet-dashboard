import React from "react";
import Card from "../../components/UI/Card";
import TwodThreeDCard from "../../components/UI/2d3dCateCards/TwodThreeDCard";
import classes from './Threed.module.css';
const Threed = () => {
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>3D</h1>
        </div>
        <div className={classes["card-body"]}>
            <div className={classes['cate-card-lists']}>
                <TwodThreeDCard link="time" title="Time" tColor="#4099ff" iColor="#4099ff" />
                <TwodThreeDCard link="close-number" title="Close Number" tColor="#FF5370" iColor="#FF5370" />
                <TwodThreeDCard link="limit" title="Limit" tColor="#FFB64D" iColor="#FFB64D" />
            </div>
        </div>
      </Card>
    </div>
  );
};

export default Threed;
