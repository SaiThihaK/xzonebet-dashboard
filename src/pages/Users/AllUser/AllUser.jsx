import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../../components/UI/Card";
import { getMethod } from "../../../services/api-services";
import { ltoken } from "../../../services/Token";
import UserListTable from "../UserListTable/UserListTable";
import classes from "./AllUser.module.css";
const AllUser = () => {
  const [allUsers,setAllUsers] = useState([]);
  const FetchUser = async()=>{
  const response = await axios.request(getMethod("/api/users?sortColumn=id&sortDirection=desc&limit=30"));
//   console.log(response.data.data);
  setAllUsers(response.data.data);
  }
  useEffect(()=>{
      FetchUser();
  },[]);
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>All Users</h1>
        </div>
        <div className={classes["card-body"]}>
            <UserListTable allUsers={allUsers}/>
        </div>
      </Card>
    </div>
  );
};

export default AllUser;