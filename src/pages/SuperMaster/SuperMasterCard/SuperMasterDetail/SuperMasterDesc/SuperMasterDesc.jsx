
import React from "react";
import UserDataGridTable from "../../../../Users/UserDataGridTable/UserDataGridTable";
import classes from "./SuperMasterDesc.module.css";
const SuperMasterDesc = (props) => {
  const {userInfo,master,agent} = props;
  return (
    <div>
           <div className={classes["agent-user-image-group"]}>
        <img
          src={userInfo?.avatar || "https://icon-library.com/images/user-icon-jpg/user-icon-jpg-14.jpg"}
          className={classes["agent-user-image"]}
          alt=""
        />
        <div className={classes["agent-user-des"]}>
          {
            userInfo.name ? (
              <h3>{userInfo?.name}</h3>
            ):(<h3>{userInfo?.first_name + "" + userInfo?.last_name}</h3>)
          }
          
          <span>ID - {userInfo?.id}</span>
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Email </label>:<p>&nbsp;&nbsp;{userInfo?.email}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Phone </label>:<p>&nbsp;&nbsp;{userInfo?.phone}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Country </label>:<p>&nbsp;&nbsp;{userInfo?.country}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">City </label>:<p>&nbsp;&nbsp;{userInfo?.city}</p>
        </div>
        {
          userInfo.deposit_percent &&  <div className={classes["form-group-desc"]}>
          <label htmlFor="">Deposite Percentage </label>:<p>&nbsp;&nbsp;{userInfo?.deposit_percent}</p>
        </div>
        }
        {
          UserDataGridTable.withdraw_percent && <div className={classes["form-group-desc"]}>
          <label htmlFor="">WithDraw Percentage </label>:<p>&nbsp;&nbsp;{userInfo?.withdraw_percent}</p>
        </div>
        }
        {
          master && <div className={classes["form-group-desc"]}>
          <label htmlFor="">Master </label>:<p>&nbsp;&nbsp;1006</p>
        </div>
        }
        {
          agent && <div className={classes["form-group-desc"]}>
          <label htmlFor="">Agent </label>:<p>&nbsp;&nbsp;1007</p>
        </div>
        }
      </div>
    </div>
  );
};

export default SuperMasterDesc;
