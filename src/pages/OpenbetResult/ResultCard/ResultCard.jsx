import { Button } from "@mui/material";
import React from "react";
import Card from "../../../components/UI/Card";
import { changeTimestamp } from "../../../Controller/ChangeDate";
import classes from "./ResultCard.module.css";

const ResultCard = ({ resultData }) => {
  return (
    <div className={classes["card"]}>
      <div className={classes["title"]}>
        <p>Premier League</p>
        <p>
          {changeTimestamp(resultData.fixture_timestamp)[0]}
          <br />
          {changeTimestamp(resultData.fixture_timestamp)[1]}
        </p>
      </div>
      <div className={classes["card-body"]}>
        <div>
          <img
            with="50"
            height="50"
            src={resultData.over_team_data.logo}
            alt="img"
          />
          <p>{resultData.over_team_data.name}</p>
        </div>

        <p>2:1</p>
        <div>
          <img
            width="50"
            height="50"
            src={resultData.under_team_data.logo}
            alt="team-logo"
          />
          <p>{resultData.under_team_data.name}</p>
        </div>
      </div>
      <div className={classes["btn-container"]}>
        <Button variant="contained" style={{ width: 20, fontSize: 12 }}>
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default ResultCard;
