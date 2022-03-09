import axios from "axios";
import React from "react";
import classes from "./ProfileDetail.module.css";

const ProfileDetail = () => {
  return (
    <div>
      <div style={{ marginTop: "30px"}}>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Deposite Percentage </label>:<p>&nbsp;&nbsp;33%</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Withdraw Percentage </label>:<p>&nbsp;&nbsp;33%</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Master Id </label>:<p>&nbsp;&nbsp;1003</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Total Unit</label>:<p>&nbsp;&nbsp;4000</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Super Master</label>:<p>&nbsp;&nbsp;4000</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
