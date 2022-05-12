
import React from "react";
import classes from "./CompleteMasterDesc.module.css";


const CompleteMasterDesc = ({userInfo}) => {
console.log("userInfo",userInfo);
  return (
    <div>
      <div className={classes["agent-user-image-group"]}>
        <img
          src="https://icon-library.com/images/user-icon-jpg/user-icon-jpg-14.jpg"
          className={classes["agent-user-image"]}
          alt=""
        />
        <div className={classes["agent-user-des"]}>
          <h3>{userInfo.first_name + " " + userInfo.last_name}</h3>
          <span>ID - {userInfo.id}</span>
        </div>
      </div>
      <div   className={classes["form-container"]}>
      <div className={classes["form-group-desc"]}>
          <label htmlFor="">Unit </label>:<p>&nbsp;&nbsp;</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Email </label>:<p>&nbsp;&nbsp;{userInfo.email}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Phone </label>:<p>&nbsp;&nbsp;{userInfo.phone}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Country </label>:<p>&nbsp;&nbsp;{userInfo.country}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">City </label>:<p>&nbsp;&nbsp;{userInfo.city}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Deposite Percentage </label>:<p>&nbsp;&nbsp;{userInfo.deposit_percent}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Withdraw Percentage </label>:<p>&nbsp;&nbsp;{userInfo.withdraw_percent}</p>
        </div>
      </div>
    </div>
  );
};

export default CompleteMasterDesc;