import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from '@mui/material/Button';
import classes from "./GlobalSettingHeader.module.css";

const bookmarkers = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
];

const GlobalSettingHeader = () => {
  return (
    <div className={classes["search-header-flex"]}>
      <div className={classes.formGroup}>
        <form action="">
          <div className={classes['search-header-group']}>
            <Autocomplete
              size="small"
              disablePortal
              id=""
              options={bookmarkers}
              sx={{ width: 300,marginRight: '20px' }}
              renderInput={(params) => (
                <TextField {...params} label="Bookmarkers" />
              )}
            />
            <Button variant="contained" type="submit" size="large">SUBMIT</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GlobalSettingHeader;
