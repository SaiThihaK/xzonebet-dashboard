import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "./PendingAgentDesc.module.css";
import {  FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { getMethod } from "../../../../../services/api-services";
import { logoutHandler } from "../../../../../components/Sidebar/Sidebar";
import CustomGetFunction from "../../../../../services/CustomGetFunction";
import {userInfo} from "../../../../../features/UserInfo"
import { useSelector } from "react-redux";
const PendingAgentDesc = ({data,masterId,setMasterId}) => {
  console.log("detail",data);
  // const {data} = CustomGetFunction("api/agents?sortColumn=id&sortDirection=desc&limit=30&agent_level=master",[])
  const userData = useSelector(userInfo);
  return (
    <div>
      <div className={classes["agent-user-image-group"]}>
        <img
          src="https://icon-library.com/images/user-icon-jpg/user-icon-jpg-14.jpg"
          className={classes["agent-user-image"]}
          alt=""
        />
        <div className={classes["agent-user-des"]}>
          <h3>{data?.name}</h3>
          <span>ID - {data?.id}</span>
        </div>
      </div>
      <div className={classes["form-container"]}>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Email </label>:<p>&nbsp;&nbsp;{data?.email}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Phone </label>:<p>&nbsp;&nbsp;{data?.phone}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Country </label>:<p>&nbsp;&nbsp;{data?.country}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">City </label>:<p>&nbsp;&nbsp;{data?.city}</p>
        </div>
 
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Choose Master </label>:
          <FormControl className={classes["select-container"]}>
{/* 
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    size="small"
    variant="standard"
    value={masterId}
    onChange={(e)=>{setMasterId(e.target.value)}}
  > 
  {data.map((master,index)=>(
  <MenuItem key={index} value={master.id}>{master.name}</MenuItem>
  ))}
  </Select> */}
  <TextField size="small" label={userData.name} disabled />
</FormControl>
        </div>
      </div>
    </div>
  );
};

export default PendingAgentDesc;
