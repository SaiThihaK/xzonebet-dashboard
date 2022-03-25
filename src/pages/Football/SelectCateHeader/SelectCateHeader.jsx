import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from '@mui/material/Button';
import classes from "./SelectCateHeader.module.css";
const SelectCateHeader = () => {
  const [age, setAge] = useState("");
  const [bettingStatus, setBettingStatus] = useState("");
  const [bettingType, setBettingType] = useState("");
  const [betWinner, setBetWinner] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const bettingStatusHandler = (event) => {
    setBettingStatus(event.target.value);
  };
  const bettingTypeHandler = (event) => {
    setBettingType(event.target.value);
  };
  const betWinnderHandler = (event) => {
    setBetWinner(event.target.value);
  };
  return (
    <div>
      <form action="#">
        <Box sx={{ width: "100%", display: "flex" }}>
          <FormControl size="small" sx={{ width: "100%", marginRight: "5px" }}>
            <InputLabel id="demo-simple-select-label">ID</InputLabel>
            <Select
            id="demo-simple-select-label"
              value={age}
              label="ID"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ width: "100%", marginRight: "5px" }}>
            <InputLabel id="demo-simple-select-label">
              Betting Status
            </InputLabel>
            <Select
              labelid="demo-simple-select-label"
              id="demo-simple-select"
              value={bettingStatus}
              label="Betting Status"
              onChange={bettingStatusHandler}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ width: "100%", marginRight: "5px" }}>
            <InputLabel id="demo-simple-select-label">Betting Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={bettingType}
              label="Betting Type"
              onChange={bettingTypeHandler}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-label">Bet Winner</InputLabel>
            <Select
              labelid="demo-simple-select-label"
              id="demo-simple-select"
              value={betWinner}
              label="Bet Winner"
              onChange={betWinnderHandler}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button variant="contained" size="large" sx={{width: '100%',marginTop:'10px'}}>APPLY</Button>
      </form>
    </div>
  );
};

export default SelectCateHeader;
