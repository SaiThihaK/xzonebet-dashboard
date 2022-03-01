import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import MasterDepositTable from "./MasterDepositTable/MasterDepositTable";
import classes from "./MasterDeposit.module.css";
import Card from "../../components/UI/Card";
const MasterDeposit = () => {
  let searchLists = [
    { label: "Master" },
    { label: "Agent" },
    { label: "User" },
  ];
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Master Deposit Transition</h1>
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

            <MasterDepositTable />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MasterDeposit;
