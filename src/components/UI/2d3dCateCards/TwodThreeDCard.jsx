import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import classes from "./TwodThreeDCard.module.css";
const TwodThreeDCard = ({ link, title, tColor, iColor ,icon }) => {
  return (
    <div className={classes.card}>
      <Link to={link} style={{color: tColor}}>
        <div className={classes["card-body"]}>
          <div className={classes["card-row"]}>
            <div className={classes.col}>
              <h3
                className={classes["card-name"]}
                style={{ color: { tColor } }}
              >
                {title}
              </h3>
            </div>
            <div className={classes["col-auto"]}>
              <FaIcons.FaEye
                className={classes["comp-icon"]}
                style={{ backgroundColor: iColor }}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TwodThreeDCard;
