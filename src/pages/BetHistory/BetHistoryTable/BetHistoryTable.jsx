import React, { useState } from "react";
import classes from "./BetHistoryTable.module.css";
import {
  Delete,
  KeyboardArrowDown,
  KeyboardArrowUp,
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
          <th className={classes["main-table-item"]}>William Willson</th>
          <th>
            <div className={classes["main-table-item"]}>
              <p>№ 26194777845</p>
              <p>from {ChangeDate(data?.created_at)}</p>
            </div>
          </th>
          <th className={classes["main-table-item-wide"]}>
            <div>
              <p>
                {/* {" "}
                {data?.bet_fixtures[0].football_fixture?.league_data?.country}
                {". "}
                {data?.bet_fixtures[0].football_fixture?.league_data?.name} */}
                Category
              </p>
              <p>
                {/* {" "}
                {
                  data?.bet_fixtures[0].football_fixture?.over_team_data?.name
                } -{" "}
                {data?.bet_fixtures[0].football_fixture?.under_team_data?.name} */}
                 Sport/Football
              </p>
            </div>
          </th>
          <th className={classes["main-table-item"]}>
            <div>
              <p>Bet</p>
              <p>{data?.amount}MMK</p>
            </div>
          </th>
          <th className={classes["main-table-item"]}>
            <div>
              <p>Bet Type</p>
              <p>{data?.bet_fixtures.length === 1 ? "body" : "maung"}</p>
            </div>
          </th>
          <th className={classes["main-table-item"]}>
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
            <th className={classes["second-table-item"]}></th>
              <th className={classes["bet-tip"]}>
                <p>Time of processing Unsettled</p>
              </th>
              <th className={classes["detail-league"]}>
                {/* <SportsSoccer style={{ marginRight: 10 }} /> */}
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
              <th className={classes["second-table-item"]}>Results</th>
              <th className={classes["second-table-item"]}>Event {k.bet_type}</th>
              <th className={classes["second-table-item"]}>Event Status Unsettled</th>
              <p className={classes["total"]} style={{ marginTop: 20 }}>
                {k?.football_fixture?.body}
              </p>

             
            </tr>
          </table>
        ))}
    </div>
  );
};

export default BetHistoryTable;
