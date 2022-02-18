import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import classes from "./MaungHeader.module.css";
const MaungHeader = () => {
  return (
    <form action="">
      <div className={classes["search-header-flex"]}>
        <div className={classes.formGroup}>
          <TextField
            sx={{ width: 300 }}
            size="small"
            id="outlined-basic"
            label="Team Number"
            variant="outlined"
          />
        </div>
        <div className={classes.formGroup}>
          <TextField
            sx={{ width: 300 }}
            size="small"
            id="outlined-basic"
            label="Percentage"
            variant="outlined"
          />
        </div>
        <div className={classes.formGroup}>
          <Button type="submit" variant="contained" size="large">
            Add
          </Button>
        </div>
      </div>
    </form>
  );
};

export default MaungHeader;
