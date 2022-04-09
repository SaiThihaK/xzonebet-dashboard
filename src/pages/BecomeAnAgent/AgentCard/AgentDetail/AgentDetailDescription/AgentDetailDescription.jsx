import React, { useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import classes from "./AgentDetailDescription.module.css";

import CustomGetFunction from "../../../../../services/CustomGetFunction";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { toast } from "react-toastify";
import { logoutHandler } from "../../../../../components/Sidebar/Sidebar";
import axios from "axios";
import { PostMethod } from "../../../../../services/api-services";
const AgentDetailDescription = () => {
  const {id} = useParams();
  const [age, setAge] = useState("");
  const [status,setStatus] = useState("");
  const navigate = useNavigate()
const {data} = CustomGetFunction(`api/affiliate-register-lists/${id}`,[id])
console.log(data);
const handleChange = (event) => {
  setAge(event.target.value);
};
const AlertToast = msg=>msg;
const submitHandler = async()=>{

  
    try{
      const url = `api/affiliate-register-lists/${status || "accept"}/${data?.id}`;
      const response = await axios.request(PostMethod(
        url,{user_type:age || data?.form_type}
      ));
      console.log(response)
      if(response.data.status = "success"){
      AlertToast(toast.success(data.message));
      navigate("/become-an-agent")
      return;
      }
      if(response.data.status = "error"){
        AlertToast(toast.error(response.data.message));
       return;
      };
    }catch(error){
      AlertToast(toast.error(error.response.data.message));
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
    }
  }



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
      <Grid container spacing={2}>
        <Grid item xs={6}>
        <div className={classes["form-container"]}>
       
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Email </label>:<p>&nbsp;&nbsp;{data?.email}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Phone </label>:<p>&nbsp;&nbsp;{data?.phone}</p>
        </div>

        {/* <div className={classes["form-group-desc"]}>
          <label htmlFor="">Region </label>:<p>&nbsp;&nbsp;-</p>
        </div> */}
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">City </label>:<p>&nbsp;{data?.city}&nbsp;</p>
        </div>
        </div>
        </Grid>
      
      
      <Grid item xs={6}>
      <div className={classes["form-container"]}>
      <div className={classes["form-group-desc"]}>
      <label htmlFor="">Form Type</label>:
      <FormControl sx={{ width: 200 }} style={{marginLeft:2}}>
   
             <InputLabel labelid="demo-simple-select-label"
              id="demo-simple-select" size="small">{data.form_type}</InputLabel> 
            <Select
              value={age || data.form_type}
              onChange={handleChange}
              size="small"
              labelid="demo-simple-select-label"
              id="demo-simple-select"
              label={data.form_type}
              inputProps={{ "aria-label": "Without label" }}
              sx={{ backgroundColor: "#f3f3f3" }}
            >
              <MenuItem value={"master"} onClick={()=>setStatus("accept")}>Master</MenuItem>
              <MenuItem value={"agent"} onClick={()=>setStatus("accept")}>Agent</MenuItem>
              <MenuItem value={"affiliate-agent"} onClick={()=>setStatus("accept")}>Affiliate Agent</MenuItem>
              <MenuItem value={"reject"} onClick={()=>setStatus("rejet")}>Cancel</MenuItem>
            </Select>
          </FormControl>
          </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Preferred Method to Contact </label>:<p>&nbsp;&nbsp;{data?.preferred_method_of_contract}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Country </label>:<p>&nbsp;&nbsp;{data?.country}</p>
        </div>
      </div>
      </Grid>
      </Grid> 
      <div style={{padding:"20px 20px",marginTop:20,backgroundColor:"#eee",color:"black",borderRadius:"5px"}}>
        <p>{data?.message}</p>
      </div>
      <div style={{display:"flex",justifyContent:"flex-end",marginTop:20}}>
          <Button variant="contained" onClick={submitHandler}>Submit</Button>
        </div>
    </div>
  );
};

export default AgentDetailDescription;
