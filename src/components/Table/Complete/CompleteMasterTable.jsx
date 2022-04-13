import React from "react";
import TextField from "@mui/material/TextField"; 
import CompleteTable from "./AgentTable/CompleteTable";
import classes from "./CompleteMasterTable.module.css";
import Card from "../../UI/Card";

const CompleteMasterTable = () => {
  
  return (
    
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Agent Table</h1>
        </div>
        <div className={classes["card-body"]}>
          <div className={classes["table-container"]}>
            <div className={classes["search-header-flex"]}>
             
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
            <CompleteTable />
          </div>
        </div>
      </Card>
    </div>
  
  );
};

export default CompleteMasterTable;
