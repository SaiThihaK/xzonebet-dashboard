import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomLoading from "../../../components/CustomLoading/CustomLoading";
import Card from "../../../components/UI/Card";
import CustomGetFunction from "../../../services/CustomGetFunction";
import UserDataGridTable from "../UserDataGridTable/UserDataGridTable";

import classes from "./AllUser.module.css";
const AllUser = () => {

  const {data,loading} = CustomGetFunction('api/users?sortColumn=id&sortDirection=desc&limit=30&status=Customers',[]);

  
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>All Users</h1>
        </div>
        <div className={classes["card-body"]}>
          {
            loading ? <UserDataGridTable data={data} /> : <CustomLoading />
          }
        </div>
      </Card>
    </div>
  );
};

export default AllUser;
