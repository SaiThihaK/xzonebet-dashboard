import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import classes from "./SearchHeader.module.css";
import { fixtureBetting } from "../../../services/api-services";
import { oddByBookmaker } from "../../../services/api-services";

const SearchHeader = () => {
  const [fixturebydate, setFixturebydate] = useState([]);
  const [oddByDateState, setOddByDateState] = useState([]);

  // useEffect(() => {
  //   axios
  //     .request(fixtureBetting)
  //     .then((res) => {
  //       setFixturebydate(res.data.response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [fixtureBetting]);

  // ------------------------- odd by date -----------------
  // useEffect(() => {
  //   axios
  //     .request(oddByBookmaker)
  //     .then((res) => {
  //       clear();
  //       setOddByDateState(res.data.response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [oddByBookmaker]);

  let temp = [];
  fixturebydate.map((el, index) => {
    return temp.push(el.league.id);
  });

  let setTemp = [];
  let leagueName = [];
  const set = new Set(temp);
  setTemp = [...set];
  setTemp.map((item, index) => {
    fixturebydate.map((el, index) => {
      if (item === el.league.id) {
        leagueName.push(el.league.name);
      }
    });
  });

  let fixtureCate = [];
  const setLeagueName = new Set(leagueName);
  [...setLeagueName].map((el) => {
    return fixtureCate.push({ label: el });
  });

  let bookmarkers = [];
  oddByDateState.map((item) => {
    return bookmarkers.push({ id: item.id,label: item.name});
  });
  
  function clear() {
    temp = [];
    setTemp = [];
    leagueName = [];
    fixtureCate = [];
    bookmarkers = [];
  }
 
  return (
    <div className={classes["search-header-flex"]}>
      {/* <div className={classes.formGroup}>
        <Autocomplete
          size="small"
          disablePortal
          id=""
          options={bookmarkers}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Bookmarkers" />
          )}
        />
      </div> */}
      <div className={classes.formGroup}>
        <Autocomplete
          size="small"
          disablePortal
          id="combo-box-demo"
          options={fixtureCate}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Search League" />
          )}
        />
      </div>
      <div className={classes.formGroup}>
        <TextField
          sx={{ width: 300 }}
          size="small"
          id="outlined-basic"
          label="Search Team"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default SearchHeader;
