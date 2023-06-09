import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../../components/UI/Card";
import classes from "./ActiveUsers.module.css";
import CustomGetFunction from "../../../services/CustomGetFunction"
import UserDataGridTable from "../UserDataGridTable/UserDataGridTable";
import CustomLoading from "../../../components/CustomLoading/CustomLoading";
const ActiveUsers = () => {

  const {data,loading} = CustomGetFunction('api/users?sortColumn=id&sortDirection=desc&limit=30',[]);

 
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Active Users</h1>
        </div>
        <div className={classes["card-body"]}>
          {
            loading ? <UserDataGridTable data={data} /> :<CustomLoading />
          }
        </div>
      </Card>
    </div>
  );
};

export default ActiveUsers;
