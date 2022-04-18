import React from "react";
import classes from './ToggleBtn.module.css';
const ToggleBtn = ({defaultChecked =true}) => {
  return (
    <label className={classes["toggle-switch"]}>
      <input
        type="checkbox"
        className={classes.checkbox}
        id="checkbox"
        defaultChecked={defaultChecked}
      />
      <span className={classes["switch-btn"]}></span>
    </label>
  );
};

export default ToggleBtn;
