import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import classes from './UserListTable.module.css';
const UserListTable = () => {
    let searchLists = [
        { label: "Master" },
        { label: "Agent" },
        { label: "User" },
      ];
  return (
    <div className={classes["table-container"]}>
      <div className={classes["search-header-flex"]}>
        <div className={classes.formGroup}>
          <Autocomplete
            size="small"
            disablePortal
            id="combo-box-demo"
            options={searchLists}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Search Name" />
            )}
          />
        </div>
        <div className={classes.formGroup}>
          <TextField
            sx={{ width: 300 }}
            size="small"
            id="outlined-basic"
            label="Search ID"
            variant="outlined"
          />
        </div>
      </div>
      {/* <SuperMasterTableList /> */}
    </div>
  );
};

export default UserListTable;
