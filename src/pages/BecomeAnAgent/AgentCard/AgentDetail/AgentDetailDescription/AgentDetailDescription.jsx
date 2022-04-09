import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import classes from "./AgentDetailDescription.module.css";

import CustomGetFunction from "../../../../../services/CustomGetFunction";
import { Grid } from "@mui/material";
const AgentDetailDescription = () => {
  const {id} = useParams();
const {data} = CustomGetFunction(`api/affiliate-register-lists/${id}`,[id])
console.log(data);
// console.log(id)
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
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Country </label>:<p>&nbsp;&nbsp;{data?.country}</p>
        </div>

        {/* <div className={classes["form-group-desc"]}>
          <label htmlFor="">Region </label>:<p>&nbsp;&nbsp;-</p>
        </div> */}
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">City </label>:<p>&nbsp;{data?.city}&nbsp;</p>
        </div>
        </div>
        </Grid>
      </Grid>




        <Link to="/become-an-agent">
          <Button variant="contained">Back</Button>
        </Link>
      
    </div>
  );
};

export default AgentDetailDescription;
