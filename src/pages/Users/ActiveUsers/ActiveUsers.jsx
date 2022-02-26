import React from "react";
import Card from "../../../components/UI/Card";
import UserListTable from "../UserListTable/UserListTable";
import classes from "./ActiveUsers.module.css";
const ActiveUsers = () => {
    
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Active Users</h1>
        </div>
        <div className={classes["card-body"]}>
            <UserListTable />
        </div>
      </Card>
    </div>
  );
};

export default ActiveUsers;
