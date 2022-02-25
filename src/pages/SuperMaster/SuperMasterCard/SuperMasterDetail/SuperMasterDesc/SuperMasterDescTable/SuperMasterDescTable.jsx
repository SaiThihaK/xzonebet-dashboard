import React from "react";
import classes from "./SuperMasterDescTable.module.css";
import Card from "../../../../../../components/UI/Card";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SuperMasterTableList from "./SuperMasterTableList/SuperMasterTableList";
const SuperMasterDescTable = () => {
  let searchLists = [
    { label: "Master" },
    { label: "Agent" },
    { label: "User" },
  ];
  return (
    <div style={{marginTop: '20px'}}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Super Master Detail List</h1>
        </div>
        <div className={classes["card-body"]}>
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
            <SuperMasterTableList />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SuperMasterDescTable;
