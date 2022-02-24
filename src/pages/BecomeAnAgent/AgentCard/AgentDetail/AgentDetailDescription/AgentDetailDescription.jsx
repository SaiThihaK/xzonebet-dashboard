import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import classes from "./AgentDetailDescription.module.css";
const AgentDetailDescription = () => {
  return (
    <div>
      <div className={classes["agent-user-image-group"]}>
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
          className={classes["agent-user-image"]}
          alt=""
        />
        <div className={classes["agent-user-des"]}>
          <h3>Agent Name</h3>
          <span>ID - 1234567</span>
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Email </label>:<p>&nbsp;&nbsp;zxc@gmail.com</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Phone </label>:<p>&nbsp;&nbsp;555-5555-55555</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Country </label>:<p>&nbsp;&nbsp;-</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Region </label>:<p>&nbsp;&nbsp;-</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">City </label>:<p>&nbsp;&nbsp;-</p>
        </div>
        <Link to="/become-an-agent">
          <Button variant="contained">Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default AgentDetailDescription;
