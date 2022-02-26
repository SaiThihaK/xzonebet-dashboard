import React from "react";
import Card from "../../components/UI/Card";
import UserCard from "./UserCard/UserCard";
import classes from "./Users.module.css";
const Users = () => {
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Users</h1>
        </div>
        <div className={classes["card-body"]}>
           <div className={classes['soccer-setting-content-flex']}>
               <UserCard name="Active Users" bgColor="#2ED8B6" path="active-user" />
               <UserCard name="All Users" bgColor="#4099FF" path="all-user" />
               <UserCard name="Ban Users" bgColor="#FF5370" path="ban-user" />
           </div>
        </div>
      </Card>
    </div>
  );
};

export default Users;
