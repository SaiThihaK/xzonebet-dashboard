import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./BettingNav.module.css";
import Bettingnavitemcontainer from "./BettingNavItem/BettingNavItemContainer";
const BettingNav = () => {
  const [fixture, setFixture] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
      params: { date: "2022-02-05", league: "39", season: "2021" },
      headers: {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "",
      },
    };

    axios
      .request(options)
      .then(function (res) {
        setFixture(res.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className={classes["betting-nav"]}>
      <div className={classes["live-category"]}>
        <Bettingnavitemcontainer
          fixture={fixture}
          icon={"fas fa-futbol"}
          name={"football"}
        />
        <Bettingnavitemcontainer
          fixture={fixture}
          icon={"fas fa-baseball-ball"}
          name={"tennis"}
        />
        <Bettingnavitemcontainer
          fixture={fixture}
          icon={"fas fa-basketball-ball"}
          name={"basketball"}
        />
        <Bettingnavitemcontainer
          fixture={fixture}
          icon={"fas fa-futbol"}
          name={"football"}
        />
        <Bettingnavitemcontainer
          fixture={fixture}
          icon={"fas fa-baseball-ball"}
          name={"tennis"}
        />
        <Bettingnavitemcontainer
          fixture={fixture}
          icon={"fas fa-basketball-ball"}
          name={"basketball"}
        />
        <Bettingnavitemcontainer
          fixture={fixture}
          icon={"fas fa-futbol"}
          name={"football"}
        />
        <Bettingnavitemcontainer
          fixture={fixture}
          icon={"fas fa-baseball-ball"}
          name={"tennis"}
        />
        <Bettingnavitemcontainer
          fixture={fixture}
          icon={"fas fa-basketball-ball"}
          name={"basketball"}
        />
        <Bettingnavitemcontainer
          fixture={fixture}
          icon={"fas fa-futbol"}
          name={"football"}
        />
        <Bettingnavitemcontainer
          fixture={fixture}
          icon={"fas fa-baseball-ball"}
          name={"tennis"}
        />
      </div>
    </div>
  );
};

export default BettingNav;
