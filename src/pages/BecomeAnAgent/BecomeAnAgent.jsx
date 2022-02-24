import React from "react";
import Card from "../../components/UI/Card";
import Grid from "@mui/material/Grid";
import AgentCard from "./AgentCard/AgentCard";
import classes from "./BecomeAnAgent.module.css";
const BecomeAnAgent = () => {
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Become Agent List</h1>
        </div>
        <div className={classes["card-body"]}>
          <Grid container spacing={3}>
             <AgentCard />
             <AgentCard />
             <AgentCard />
             <AgentCard />
             <AgentCard />
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default BecomeAnAgent;
