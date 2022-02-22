import React, { useState, useEffect } from "react";
import axios from "axios";
import flag from "./images/logo.png";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import classes from "./TableList.module.css";
import { fixtureBetting } from "../../../services/api-services";
// import { oddByDate } from "../../../services/api-services";
import { bettingData } from "../../../features/betting";
import {useDispatch,useSelector} from 'react-redux';

let dt = new Date();
let year = dt.getFullYear();
let month = (dt.getMonth() + 1).toString().padStart(2, "0");
let day = dt.getDate().toString().padStart(2, "0");

const TableList = ({oddByState}) => {
  const [fixturebydate, setFixturebydate] = useState([]);
  
  const dispatch = useDispatch();
  const betting = useSelector(state => state.betting);
  useEffect(()=>{
     dispatch(bettingData())
  },[dispatch])
  console.log(betting)
  // const [oddByState, setOddByState] = useState([]);
  // useEffect(() => {
  //   axios
  //     .request(fixtureBetting)
  //     .then((res) => {
  //       clear();
  //       setFixturebydate(res.data.response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  // }, [fixtureBetting]);
  // -------------------- testing odd by date ------------------------

  let leagueIds = [];
  let leagueNames = [];
  let fixtureIds = [];
  let leagueCountries = [];
  let countryFlag = [];
  let tempBetsData = [];  

  function clear() {
    leagueIds = [];
    leagueNames = [];
    fixtureIds = [];
    leagueCountries = [];
    countryFlag = [];
    tempBetsData = [];
  }
  
  fixturebydate.forEach((jsonData) => {
    leagueIds.push(jsonData.league.id);
    leagueNames.push(jsonData.league.name);
    leagueCountries.push(jsonData.league.country);
    fixtureIds.push(jsonData.fixture.id);
    countryFlag.push(jsonData.league.flag);
  });



  const uniqueLeagueIds = [...new Set(leagueIds)];
  const uniqueLeagueNames = [...new Set(leagueNames)];
  const uniqueLeagueCountries = [...new Set(leagueCountries)];
  const uniqueCountryFlag = [...new Set(countryFlag)];


  const label = { inputProps: { "aria-label": "Switch demo" } };
  const checkbox = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <form action="#">
      <div>
        <div style={{ marginBottom: "20px" }}>
          {uniqueLeagueIds.map((id, index) => {
            return (
              <div key={index}>
                <h1 className={classes["table-title"]}>
                  <div className={classes["country-club"]}>
                    <Checkbox {...checkbox} />
                    <img
                      src={uniqueCountryFlag[index]}
                      className={classes.logoSize}
                      alt=""
                    />
                    <div style={{ marginRight: "10px" }}>
                      {uniqueLeagueCountries[index]} :
                      <span>{uniqueLeagueNames[index]}</span>
                    </div>
                    <Button type="submit" variant="contained">
                      submit
                    </Button>
                    <span className={classes["betting-date"]}>
                      - {day} / {month} / {year}
                    </span>
                  </div>
                </h1>
                <table className={classes["betting-table"]}>
                  <tbody>
                    <tr>
                      <td>#</td>
                      <td>Time</td>
                      <td>Team 1</td>
                      <td>Team 2</td>
                      <td>H</td>
                      <td>X</td>
                      <td>A</td>
                      <td>Up</td>
                      <td>Down</td>
                      <td>
                        <div style={{ display: "flex" }}>
                          <Switch
                            defaultChecked
                            {...label}
                            color="success"
                            size="medium"
                          />
                        </div>
                      </td>
                    </tr>
                    {fixturebydate.map((item, index) => {
                      if (id === item.league.id) {
                        return (
                          <tr key={index}>
                            <td>
                              <Checkbox {...checkbox} />
                            </td>
                            <td>18:30</td>
                            <td>{item.teams.home.name}</td>
                            <td>{item.teams.away.name}</td>

                            <td>
                              <input type="text" />
                            </td>
                            <td>
                              <input type="text" />
                            </td>
                            <td>
                              <input type="text" />
                            </td>
                            
                            <td>
                              <input type="text" />
                            </td>
                            <td>
                              <input type="text" />
                            </td>
                            <td>
                              <div style={{ display: "flex" }}>
                                <Switch
                                  defaultChecked
                                  {...label}
                                  color="success"
                                  size="medium"
                                />
                                <Button
                                  type="submit"
                                  variant="contained"
                                  size="small"
                                >
                                  submit
                                </Button>
                              </div>
                            </td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              </div>
            );
            // ------------------ body -------------
          })}
        </div>
      </div>
    </form>
  );
};

export default TableList;
