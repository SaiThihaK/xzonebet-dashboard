import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { bettingData } from "../../../features/betting";
import { useDispatch, useSelector } from "react-redux";
import classes from "./TableList.module.css";

let dt = new Date();
let year = dt.getFullYear();
let month = (dt.getMonth() + 1).toString().padStart(2, "0");
let day = dt.getDate().toString().padStart(2, "0");

const TableList = () => {
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.betting.data);
  useEffect(() => {
    dispatch(bettingData());
  }, [dispatch]);

  console.log(data)
  data && data.map(item => {
    console.log(item.league_id)
  })
 
  

  const label = { inputProps: { "aria-label": "Switch demo" } };
  const checkbox = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <form action="#">
      <div>
        <div style={{ marginBottom: "20px" }}>
          <div>
            <h1 className={classes["table-title"]}>
              <div className={classes["country-club"]}>
                <Checkbox {...checkbox} />
                <img src="" className={classes.logoSize} alt="" />
                <div style={{ marginRight: "10px" }}>
                  Country -<span> League Name</span>
                </div>
                <Button type="submit" variant="contained">
                  submit
                </Button>
                <span className={classes["betting-date"]}>- 10 / 2 / 2022</span>
              </div>
            </h1>
            <div style={{ overflowX: "auto" }} className="scroll-hide">
              <table className={classes["betting-table"]}>
                <tbody>
                  <tr>
                    <td><h4>#</h4></td>
                    <td><h4>Time</h4></td>
                    <td><h4>Team 1</h4></td>
                    <td><h4>Team 2</h4></td>
                    <td><h4>H</h4></td>
                    <td><h4>X</h4></td>
                    <td><h4>A</h4></td>
                    <td colSpan="2">
                      <div
                        style={{
                          display: "flex",
                          alignItem: "center",
                          justifyContent: "space-around",
                        }}
                      >
                        <FaIcons.FaArrowAltCircleUp />
                        <h4>Body</h4>
                        <FaIcons.FaArrowAltCircleDown />
                      </div>
                    </td>
                    <td colSpan="2">
                      <div
                        style={{
                          display: "flex",
                          alignItem: "center",
                          justifyContent: "space-around",
                        }}
                      >
                        <FaIcons.FaArrowAltCircleUp />
                        <h4>Total Goal</h4>
                        <FaIcons.FaArrowAltCircleDown />
                      </div>
                    </td>
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
                  <tr>
                    <td>
                      <Checkbox {...checkbox} />
                    </td>
                    <td>18:30</td>
                    <td>Home</td>
                    <td>Away</td>

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
                      <div className={classes["body-goal-flex"]}>
                        <div>
                          <select name="" id="">
                            <option value="">0</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                          </select>
                        </div>
                        <div>
                          <select name="" id="">
                            <option value="">+</option>
                            <option value="">=</option>
                            <option value="">-</option>
                          </select>
                        </div>
                        <div>
                          <select name="" id="">
                            <option value="">0</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                          </select>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className={classes["body-goal-flex"]}>
                        <div>
                          <select name="" id="">
                            <option value="">0</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                          </select>
                        </div>
                        <div>
                          <select name="" id="">
                            <option value="">+</option>
                            <option value="">=</option>
                            <option value="">-</option>
                          </select>
                        </div>
                        <div>
                          <select name="" id="">
                            <option value="">0</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                          </select>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className={classes["body-goal-flex"]}>
                        <div>
                          <select name="" id="">
                            <option value="">0</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                          </select>
                        </div>
                        <div>
                          <select name="" id="">
                            <option value="">+</option>
                            <option value="">=</option>
                            <option value="">-</option>
                          </select>
                        </div>
                        <div>
                          <select name="" id="">
                            <option value="">0</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                          </select>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className={classes["body-goal-flex"]}>
                        <div>
                          <select name="" id="">
                            <option value="">0</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                          </select>
                        </div>
                        <div>
                          <select name="" id="">
                            <option value="">+</option>
                            <option value="">=</option>
                            <option value="">-</option>
                          </select>
                        </div>
                        <div>
                          <select name="" id="">
                            <option value="">0</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                          </select>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: "flex" }}>
                        <Switch
                          defaultChecked
                          {...label}
                          color="success"
                          size="medium"
                        />
                        <Button type="submit" variant="contained" size="small">
                          submit
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TableList;
