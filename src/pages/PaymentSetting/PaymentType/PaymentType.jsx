import React from "react";
import TextField from "@mui/material/TextField"; 
import classes from "./PaymentType.module.css";
import Card from "../../../components/UI/Card";


const PaymentType = () => {
  
  return (
    
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Payment Type</h1>
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
          </div>
        </div>
      </Card>
    </div>
  
  );
};

export default PaymentType;
