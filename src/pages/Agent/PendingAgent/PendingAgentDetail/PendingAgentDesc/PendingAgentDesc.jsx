import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "./PendingAgentDesc.module.css";
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { getMethod } from "../../../../../services/api-services";

const PendingAgentDesc = ({userInfo}) => {
    const [completeMasters,setCompleteMasters] = useState([]);
    const [master, setMaster] = React.useState('');
    const handleChange = (event) => {
        setMaster(event.target.value);
      };
    const fetchCompleteMaster = async()=>{
        const {data} = await axios.request(getMethod('/api/affiliate-register-lists?sortColumn=updated_at&sortDirection=desc&limit=30&status=complete&form_type=master'));
        setCompleteMasters(data.data);
      };
      useEffect(()=>{
        fetchCompleteMaster() ;
      },[]);
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
      <div style={{ marginTop: "30px" }}>
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
          <FormControl  style={{width:200,marginLeft:10}}>
  <InputLabel  id="demo-simple-select-label" size="small" style={{height:20}}>Master</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={master}
    size="small"
    label="Choose"
    onChange={handleChange}
    variant="standard"
  > 
  {completeMasters.map((master,index)=>(
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
