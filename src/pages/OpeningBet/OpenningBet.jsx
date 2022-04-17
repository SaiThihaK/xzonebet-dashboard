import React, { useState } from "react";
import PageTitleCard from "../../components/UI/PageTitleCard/PageTitleCard";
import classes from "./Openningbet.module.css";

import { Avatar, Button, Stack } from "@mui/material";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import NewbetModal from "../../components/UI/Modal/Newbet/NewbetModal";
const OpenningBet = () => {
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen(true);
  };

  const closeHandler = () => setOpen(false);
  const array = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return (
    <PageTitleCard title="Opening Bet">
      <div className={classes["card-body"]}>
        <Stack direction="row" spacing={7}>
          <div style={{ display: "flex" }}>
            <Avatar
              size="small"
              style={{ marginRight: 10 }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdxKj5LbvxwB1MRqLK74MCI6OCOHbOHutG1A&usqp=CAU"
              alt="country"
            />
            <span style={{ fontSize: 16, marginTop: 5 }}>England</span>
          </div>
          <div style={{ display: "flex" }}>
            <Avatar
              size="small"
              style={{ marginRight: 10 }}
              src="https://assets.turbologo.com/blog/en/2020/01/19084653/Premier-League-symbol.png"
              alt="country"
            />
            <span style={{ fontSize: 16, marginTop: 5 }}>Premier League</span>
          </div>
        </Stack>
        <table className={classes["table-container"]}>
          <tr>
            <th></th>
            <th></th>
            <th>H</th>
            <th>A</th>
            <th>O</th>
            <th>Total</th>
            <th>U</th>
            <th></th>
          </tr>

          {array.map((bet, index) => (
            <tr key={index} className={classes["body-row"]}>
              <td>
                <p>22-4-2022</p>
                <p>02:33:56</p>
              </td>
              <td className={classes["teams"]}>
                <p className={classes["t-1"]}>
                  Team OG
                  <ArrowUpward style={{ fontSize: 14, color: "green" }} />
                </p>
                <p className={classes["t-2"]}>
                  Team Nigma galaxy
                  <ArrowDownward style={{ fontSize: 14, color: "red" }} />
                </p>
              </td>
              <td className={classes["bet-amount"]} align="center">
                <span>3.4</span>
              </td>
              <td className={classes["bet-amount"]} align="center">
                <span>3.4</span>
              </td>
              <td className={classes["bet-amount"]} align="center">
                <span>3.4</span>
              </td>
              <td className={classes["bet-amount"]} align="center">
                <span>3.4</span>
              </td>
              <td className={classes["bet-amount"]} align="center">
                <span>3.4</span>
              </td>
              <td align="center">
                <Button onClick={openHandler} size="small" variant="contained">
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <NewbetModal open={open} closeHandler={closeHandler} />
    </PageTitleCard>
  );
};

export default OpenningBet;
