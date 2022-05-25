import React from "react";
import Card from "../../components/UI/Card";
import CustomGetFunction from "../../services/CustomGetFunction";
import MasterSettingCard from "../Master/MasterSettingCard/MasterSettingCard";
import UserCard from "./UserCard/UserCard";
import classes from "./Users.module.css";
const Users = () => {
  const {data:users} = CustomGetFunction(`api/users?sortColumn=id&sortDirection=desc&limit=30`,[]);
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Users</h1>
        </div>
        <div className={classes["card-body"]}>
           <div className={classes['soccer-setting-content-flex']}>
           <MasterSettingCard name="All Users" bgColor="#FFC107" path="all-user" userNum={users.length} />
               {/* <UserCard name="Active Users" bgColor="#2ED8B6" path="active-user" /> */}
               <MasterSettingCard name="Active Users" bgColor="#2ED8B6" path="active-user"  userNum={users.length} />
               {/* <UserCard name="Ban Users" bgColor="#FF5370" path="ban-user" /> */}
               <MasterSettingCard name="Ban users" bgColor="#FF5370"  path="ban-user"  userNum="0" />
           </div>
        </div>
      </Card>
    </div>
  );
};

export default Users;
