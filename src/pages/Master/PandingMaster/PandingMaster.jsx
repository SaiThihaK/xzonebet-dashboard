import React from "react";
import Card from '../../../components/UI/Card';
import Grid from "@mui/material/Grid";
import PandingMasterCard from "./PandingMasterCard/PandingMasterCard";
import classes from './PandingMaster.module.css';
const PandingMaster = () => {
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Panding Master</h1>
        </div>
        <div className={classes["card-body"]}>
          <Grid container spacing={3}>
            <PandingMasterCard />
            <PandingMasterCard />
            <PandingMasterCard />
            <PandingMasterCard />
            <PandingMasterCard />
            <PandingMasterCard />
            <PandingMasterCard />
            <PandingMasterCard />
            <PandingMasterCard />
            <PandingMasterCard />
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default PandingMaster;
