import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "./PendingAgentDesc.module.css";
import {  FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { getMethod } from "../../../../../services/api-services";
import { logoutHandler } from "../../../../../components/Sidebar/Sidebar";
import CustomGetFunction from "../../../../../services/CustomGetFunction";

const PendingAgentDesc = ({userInfo}) => {

  const {data} = CustomGetFunction("api/agents?sortColumn=id&sortDirection=desc&limit=30&agent_level=master",[])
  return (
    <div>
      <div className={classes["agent-user-image-group"]}>
        <img
          src="https://icon-library.com/images/user-icon-jpg/user-icon-jpg-14.jpg"
          className={classes["agent-user-image"]}
          alt=""
        />
        <div className={classes["agent-user-des"]}>
          <h3>{userInfo.name}</h3>
          <span>ID - {userInfo.id}</span>
        </div>
      </div>
      <div className={classes["form-container"]}>
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
          <label htmlFor="">Choose Master </label>:
          <FormControl className={classes["select-container"]}>

  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    size="small"
    variant="standard"
  > 
  {data.map((master,index)=>(
  <MenuItem key={index} value={master.id}>{master.name}</MenuItem>
  ))}
  </Select>
</FormControl>
        </div>
      </div>
    </div>
  );
};

export default PendingAgentDesc;
