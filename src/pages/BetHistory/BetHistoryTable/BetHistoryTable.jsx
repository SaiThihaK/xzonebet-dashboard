import React, { useState } from "react";
import classes from "./BetHistoryTable.module.css";
import {
  Delete,
  KeyboardArrowDown,
  KeyboardArrowUp,
  SportsSoccer,
} from "@mui/icons-material";
import { changeTimestamp } from "../../../Controller/ChangeDate";
import { ChangeDate } from "../../../Controller/ChangeDate";
import { IconButton } from "@mui/material";
const BetHistoryTable = ({ data }) => {
  const [isToggle, setToggle] = useState(false);
  const toggleHandler = () => setToggle(!isToggle);
  console.log(data);
  console.log(data?.created_at);
  return (
    <div style={{ marginTop: 10 }}>
      <table className={isToggle && classes["main-table"]}>
        <tr>
          <th>William Willson</th>
          <th>
            <div>
              <p>№ 26194777845</p>
              <p>from {ChangeDate(data?.created_at)}</p>
            </div>
          </th>
          <th>
            <div>
              <p>
                {" "}
                {data?.bet_fixtures[0].football_fixture?.league_data?.country}
                {". "}
                {data?.bet_fixtures[0].football_fixture?.league_data?.name}
              </p>
              <p>
                {" "}
                {
                  data?.bet_fixtures[0].football_fixture?.over_team_data?.name
                } -{" "}
                {data?.bet_fixtures[0].football_fixture?.under_team_data?.name}
              </p>
            </div>
          </th>
          <th>
            <div>
              <p>Bet</p>
              <p>{data?.amount}MMK</p>
            </div>
          </th>
          <th>
            <div>
              <p>Bet Type</p>
              <p>{data?.bet_fixtures.length === 1 ? "body" : "maung"}</p>
            </div>
          </th>
          <th>
            <div>
              <p>Bet Slip Status</p>
              <p>Unsettled</p>
            </div>
          </th>
          <th>
            {" "}
            <p className={classes["total"]}>19990</p>
          </th>
          <th>
            <IconButton>
              <Delete color="error" />
            </IconButton>
          </th>
          <th>
            <IconButton onClick={toggleHandler}>
              {isToggle ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </th>
        </tr>
      </table>
      {isToggle &&
        data?.bet_fixtures?.map((k, index) => (
          <table className={classes["second-table"]}>
            <tr className={classes["detail-table"]}>
              <th className={classes["bet-tip"]}>
                <p>Time of processing Unsettled</p>
              </th>
              <th></th>
              <th className={classes["detail-league"]}>
                <SportsSoccer style={{ marginRight: 10 }} />
                {k.football_fixture?.league_data?.country}
                {". "}
                {k.football_fixture?.league_data?.name}
                <br />
                {k.football_fixture?.over_team_data?.name} -{" "}
                {k.football_fixture?.under_team_data?.name}
                <br />
                Start date and time:{" "}
                {`${
                  changeTimestamp(k.football_fixture?.fixture_timestamp)[0]
                } | ${
                  changeTimestamp(k.football_fixture?.fixture_timestamp)[1]
                }`}
                <br />
                Status: Not started yet
                <br />
              </th>
              <th>Results</th>
              <th>Event {k.bet_type}</th>
              <th>Event Status Unsettled</th>
              <p className={classes["total"]} style={{ marginTop: 20 }}>
                {k?.football_fixture?.body}
              </p>

              <th></th>
              <th></th>
            </tr>
          </table>
        ))}
    </div>
  );
};

export default BetHistoryTable;
