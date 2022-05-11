import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import classes from "./NewbetModal.module.css";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import TextField from "@mui/material/TextField";

import { changeTimestamp } from "../../../../Controller/ChangeDate";
import { toast } from "react-toastify";
import axios from "axios";
import { PatchMethod } from "../../../../services/api-services";
import { logoutHandler } from "../../../Sidebar/Sidebar";
const style = {
  position: "absolute",
  top: "50%",
  left: "60%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "1px solid #FFF",
  borderRadius: "0.5rem",
  p: 4,
  overflowY: "auto",
  maxHeight: "calc(100vh - 100px)",
};
const  NewbetModal1 = ({ open, bettingData, closeHandler,render,setRender }) => {
  console.log(bettingData);
  const handleSplit = (str) => {
    let totalNumber =[];
    return [...totalNumber,{numbers:str?.split(/[+\-\=]/)}];

  }
  
const totalNumber = handleSplit(bettingData?.total);
console.log("numbers",totalNumber);



  const [newBet, setNewBet] = React.useState({
    oddType: "over",
    oddType1: "under",
    body:  "",
    body1: "",
    body2: "",
    total: "",
    total1: "",
    total2: "",
  });
  console.log("bettingData",bettingData);

  const handleChange = (prop) => (event) => {
    setNewBet({ ...newBet, [prop]: event.target.value });
  };

  const addNewBet = async (e) => {
    e.preventDefault();
    for (const property in newBet) {
      if (newBet[property] === "") {
        if (property === "body1") {
          continue;
        }
        toast.warning("please fill all the data");
        return;
      }
    }
    let overTeam = "";
    let underTeam = "";
    if (newBet.oddType === "over") {
      overTeam = "home";
      underTeam = "away";
    } else {
      overTeam = "away";
      underTeam = "home";
    }
    const addBetData = {
      // fixture_id: bettingData?.id,
      // over_team_id: bettingData?.teams?.[overTeam]?.id,
      // over_team_data: bettingData?.teams?.[overTeam],
      // under_team_data: bettingData?.teams?.[underTeam],
      // under_team_id: bettingData?.teams?.[underTeam]?.id,
      body_symbol1: newBet.body1,
      body_symbol2: newBet.body,
      body_symbol3: newBet.body2,
      total_symbol1: newBet.total1,
      total_symbol2: newBet.total,
      total_symbol3: newBet.total2,
      // fixture_timestamp: bettingData?.fixture_timestamp,
      // league_id: bettingData?.league?.id,
      // league_data: bettingData?.league,
    };
    try {
      const { data } = await axios.request(PatchMethod(`api/football-fixtures/${bettingData?.id}`,addBetData));

      if ((data.status = "success")) {
        toast.success(data.message);
        closeHandler();
        setNewBet({oddType: "over",
        oddType1: "under",
        body:  "",
        body1: "",
        body2: "",
        total: "",
        total1: "",
        total2: ""})
        setRender(!render);

   
        return;
      }
      if ((data.status = "error")) {
        toast.error(data.message);

        return;
      }
    } catch (error) {
      toast.error(error.response.data.message);
      if (
        error.response.status === 401 ||
        error.response.data.message === "Unauthenticated."
      ) {
        logoutHandler();
      }
    }
  };


  return (
    <div>
      <Modal
        open={open}
        onClose={closeHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="body-1"
            component="h2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            New bet
          </Typography>
          <Grid container spacing={1} marginBottom={5} marginTop={3}>
            <Grid item xs={6}>
              <div className={classes["container"]}>
                <label>Match Title</label>
                <p>
                  {`${bettingData?.over_team_data?.name} and ${bettingData?.under_team_data?.name}`}{" "}
                </p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes["container"]}>
                <label>Date and Time</label>
                <p>
                  {`${changeTimestamp(bettingData?.fixture_timestamp)[0]} | ${
                    changeTimestamp(bettingData?.fixture_timestamp)[1]
                  }`}
                </p>
              </div>
            </Grid>
          </Grid>
          {/* =======>============Team 1================================================== */}
          {/* <hr style={{margin:"20px 0px"}} /> */}
          <Grid container>
            <Grid item xs={6} style={{ padding: 15, paddingLeft: 0 }}>
              <div className={classes["team-container"]}>
                <label>Country</label>
                {/* <img
                  src={bettingData?.league_data?.flag}
                  style={{ marginRight: "10px" }}
                  width="30"
                  alt=""
                /> */}
                <p style={{ marginBottom: "10px" }}>
                  {bettingData?.league_data?.country}
                </p>
              </div>
              <div className={classes["team-container"]}>
                <label>League</label>
                <img
                  src={bettingData?.league_data?.logo}
                  style={{ marginRight: "10px" }}
                  width="30"
                  alt=""
                />
                <p>{bettingData?.league_data?.name}</p>
              </div>

              <div className={classes["team-con"]}>
                <label>Team 1</label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={bettingData?.over_team_data?.logo}
                    style={{ marginRight: "10px" }}
                    width="30"
                    alt=""
                  />
                  <p>{bettingData?.over_team_data?.name}</p>
                </div>
              </div>
              <FormControl style={{ marginLeft: 200, marginTop: 20 }}>
                <InputLabel id="demo-simple-select-label">
                  Under/Over
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Under/Over"
                  variant="outlined"
                  sx={{ width: 200 }}
                  value={newBet.oddType}
                  onChange={handleChange("oddType")}
                >
                  <MenuItem value="over">Over</MenuItem>
                  <MenuItem value="under">Under</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* ----------------Team 2------------------- */}
            <Grid
              item
              xs={6}
              style={{
                borderLeft: "1px solid gray",
                padding: "15px",
                paddingRight: 0,
              }}
            >
              <div className={classes["team-container"]}>
                <label>Country</label>
                <p style={{ marginBottom: "10px" }}>
                  {bettingData?.league_data?.country}
                </p>
              </div>
              <div className={classes["team-container"]}>
                <label>League</label>
                <img
                  src={bettingData?.league_data?.logo}
                  style={{ marginRight: "10px" }}
                  width="30"
                  alt=""
                />
                <p>{bettingData?.league_data?.name}</p>
              </div>

              <div className={classes["team-con"]}>
                <label>Team 2</label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={bettingData?.under_team_data?.logo}
                    style={{ marginRight: "10px" }}
                    width="30"
                    alt=""
                  />
                  <p>{bettingData?.under_team_data?.name}</p>
                </div>
              </div>
              <FormControl style={{ marginLeft: 200, marginTop: 20 }}>
                <InputLabel id="demo-simple-select-label">
                  Under/Over
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Under/Over"
                  variant="outlined"
                  sx={{ width: 200 }}
                  value={newBet.oddType1}
                  onChange={handleChange("oddType1")}
                >
                  <MenuItem value="over">Over</MenuItem>
                  <MenuItem value="under">Under</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <hr style={{ margin: "20px 0px" }} />

          {/* ---------------Body------------ */}
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <div className={classes["container"]}>
                <label>Body</label>
                <TextField
                  size="small"
                  type="number"
                  style={{ width: "100%" }}
                  value={newBet.body1}
                  onChange={handleChange("body1")}
                />
              </div>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth style={{ marginTop: 20 }}>
                <Select
                  size="small"
                  value={newBet.body}
                  onChange={handleChange("body")}
                >
                  <MenuItem
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItem: "center",
                      fontSize: "18px",
                    }}
                    value="-"
                  >
                    -
                  </MenuItem>
                  <MenuItem
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItem: "center",
                      fontSize: "18px",
                    }}
                    value="="
                  >
                    =
                  </MenuItem>
                  <MenuItem
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItem: "center",
                      fontSize: "18px",
                    }}
                    value="+"
                  >
                    +
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <div className={classes["container"]}>
                <TextField
                  size="small"
                  type="number"
                  style={{ width: "100%" }}
                  value={newBet.body2}
                  onChange={handleChange("body2")}
                />
              </div>
            </Grid>
          </Grid>
          {/* -------------------------Total------------------------------ */}
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <div className={classes["container"]}>
                <label>Total</label>
                <TextField
                  size="small"
                  type="number"
                  style={{ width: "100%" }}
                  value={newBet.total1}
                  onChange={handleChange("total1")}
                />
              </div>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth style={{ marginTop: 20 }}>
                <Select
                  size="small"
                  value={newBet.total}
                  onChange={handleChange("total")}
                >
                  <MenuItem
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItem: "center",
                      fontSize: "18px",
                    }}
                    value="-"
                  >
                    -
                  </MenuItem>
                  <MenuItem
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItem: "center",
                      fontSize: "18px",
                    }}
                    value="="
                  >
                    =
                  </MenuItem>
                  <MenuItem
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItem: "center",
                      fontSize: "18px",
                    }}
                    value="+"
                  >
                    +
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <div className={classes["container"]}>
                <TextField
                  size="small"
                  type="number"
                  value={newBet.total2}
                  onChange={handleChange("total2")}
                  style={{ width: "100%" }}
                />
              </div>
            </Grid>
          </Grid>
          <div className={classes["btn-container"]}>
            <Button variant="contained" size="large" onClick={addNewBet}>
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default NewbetModal1;
