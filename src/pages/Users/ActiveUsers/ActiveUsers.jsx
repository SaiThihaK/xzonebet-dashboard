import axios from "axios";
import React, { useEffect, useState } from "react";
import { logoutHandler } from "../../../components/Sidebar/Sidebar";
import Card from "../../../components/UI/Card";
import { getMethod } from "../../../services/api-services";
import UserListTable from "../UserListTable/UserListTable";
import classes from "./ActiveUsers.module.css";
import CustomGetFunction from "../../../services/CustomGetFunction"
const ActiveUsers = () => {
  const [allUsers,setAllUsers] = useState([]);
  const {data} = CustomGetFunction('api/users?sortColumn=id&sortDirection=desc&limit=30',[]);

 
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Active Users</h1>
        </div>
        <div className={classes["card-body"]}>
            <UserListTable  allUsers={data} />
        </div>
      </Card>
    </div>
  );
};

export default ActiveUsers;
