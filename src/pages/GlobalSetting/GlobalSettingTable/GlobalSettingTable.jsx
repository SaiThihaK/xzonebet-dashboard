import React, { useRef } from "react";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Button from "@mui/material/Button";

import Card from "../../../components/UI/Card";
import GlobalTable from "./GlobalTable/GlobalTable";
import classes from "./GlobalSettingTable.module.css";

let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1; //months from 1-12
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();
let todayDate = year + "-" + month + "-" + day;

const GlobalSettingTable = () => {
  const [endDateValue, setEndDateValue] = React.useState(todayDate);
  const endDateRef = useRef();
  const bettingDateSearchHandler = (event) => {
    event.preventDefault();
    setEndDateValue(endDateRef.current.value);
  };

  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Global Betting - 1</h1>
        </div>
        <div className={classes["card-body"]}>
          <div style={{display: 'flex',alignItems: 'center', justifyContent: 'space-between'}}>
            <div>
              <form action="#" onSubmit={bettingDateSearchHandler}>
                <div
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <div>
                    <label htmlFor="">Start Date</label>
                    <input
                      type="date"
                      style={{
                        outline: "none",
                        userSelect: "none",
                        padding: "0 10px",
                        border: "1px solid #a9a9a9",
                        borderRadius: "0.25rem",
                        fontSize: "16px",
                        color: "#212121",
                        marginRight: "10px",
                        display: "block",
                        height: "40px",
                        marginTop: "10px",
                      }}
                      readOnly
                      value={new Date().toJSON().slice(0, 10)}
                    />
                  </div>
                  <div>
                    <label htmlFor="">End Date</label>
                    <input
                      type="date"
                      style={{
                        outline: "none",
                        userSelect: "none",
                        padding: "0 10px",
                        border: "1px solid #a9a9a9",
                        borderRadius: "0.25rem",
                        fontSize: "16px",
                        color: "#212121",
                        marginRight: "10px",
                        display: "block",
                        height: "40px",
                        marginTop: "10px",
                      }}
                      ref={endDateRef}
                    />
                  </div>
                  <Button
                    sx={{ marginLeft: "10px", height: "40px" }}
                    type="submit"
                    variant="contained"
                  >
                    submit
                  </Button>
                </div>
              </form>
            </div>
            <div>
              <form action="#" onSubmit={bettingDateSearchHandler}>
                <div
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <div>
                    <label htmlFor="">Margin</label>
                    <input
                      type="text"
                      style={{
                        outline: "none",
                        userSelect: "none",
                        padding: "0 10px",
                        border: "1px solid #a9a9a9",
                        borderRadius: "0.25rem",
                        fontSize: "16px",
                        color: "#212121",
                        marginRight: "10px",
                        display: "block",
                        height: "40px",
                        marginTop: "10px",
                      }}
                      placeholder="Search Margin"
                    />
                  </div>
                  <Button
                    sx={{ marginLeft: "10px", height: "40px" }}
                    type="submit"
                    variant="contained"
                  >
                    Search
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <GlobalTable endDateValue={endDateValue} />
        </div>
      </Card>
    </div>
  );
};

export default GlobalSettingTable;
