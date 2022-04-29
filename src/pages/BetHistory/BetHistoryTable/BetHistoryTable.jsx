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
        <tablehead>
        <tr>
          <th className={classes["main-table-item"]}>William Willson</th>
          <th>
            <div className={classes["main-table-item"]}>
              <p>id - {data.id}</p>
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
              <p>{data?.stake}MMK</p>
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
              <p>{data?.total_bet_result?.bet_status}</p>
            </div>
          </th>
          <th>
            {" "}
            <p className={classes["total"]}>{data?.total_bet_result?.bet_amount}</p>
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
        </tablehead>
      </table>
      {isToggle &&
        data?.bet_fixtures?.map((k, index) => (
          <table className={classes["second-table"]} key={index}>
            <tablehead>
            <tr className={classes["detail-table"]}>
            <th className={classes["second-table-item"]}></th>
              <th className={classes["bet-tip"]}>
             <p> Start date and time:</p>
             <p>{`${
                  changeTimestamp(k.football_fixture?.fixture_timestamp)[0]
                }`}</p>
                <p>{`${
                  changeTimestamp(k.football_fixture?.fixture_timestamp)[1]
                }`}</p>
               
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
              
                
                {k?.football_fixture?.body}
                <br />
              </th>
              <th className={classes["second-table-item"]}>
                <div>Results</div>
              <div> {k.football_fixture?.goals?.over} {' - '} {k.football_fixture?.goals?.under}  </div>
              </th>
              <th className={classes["second-table-item"]}>Event <div>{k.bet_type}</div> </th>
              <th className={classes["second-table-item"]}>Event Status <div>{k?.bet_result?.status}</div></th>
              <p className={classes["total"]} style={{ marginTop: 20 }}>
                {k.bet_result.amount ? (k.bet_result.amount) :(k?.bet_result?.status) }
              </p>
            </tr>
            </tablehead>
          </table>
        ))}
    </div>
  );
};

export default BetHistoryTable;
