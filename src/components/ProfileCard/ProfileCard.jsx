import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { userInfo } from "../../features/UserInfo";
import classes from "./ProfileCard.module.css";

const ProfileCard = () => {
const userData = useSelector(userInfo);
const type = localStorage.getItem("type");

console.log(userData)
  return (
    <div>
      <div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">
          {
            type === "master" ? "SuperMaster ID":"Master ID"
          }
          </label>:<p>&nbsp;&nbsp;{userData?.id}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">SuperMaster Name</label>:<p>&nbsp;&nbsp;Kyaw Zaya</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Total Unit</label>:<p>&nbsp;&nbsp;4000</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Deposite Percentage </label>:<p>&nbsp;&nbsp;{userData?.agent?.deposit_percent}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Withdraw Percentage </label>:<p>&nbsp;&nbsp;{userData?.agent?.withdraw_percent}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
