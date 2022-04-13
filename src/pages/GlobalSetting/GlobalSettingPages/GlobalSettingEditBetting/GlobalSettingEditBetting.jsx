import React, { useState } from "react";
import Button from "@mui/material/Button";
import Card from "../../../../components/UI/Card";
import GlobalSettingBettingEditModal from "../../../../components/UI/Modal/GlobalSettingBettingEditModal/GlobalSettingBettingEditModal";
import classes from "./GlobalSettingEditBetting.module.css";
const GlobalSettingEditBetting = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Booky Setting</h1>
        </div>
        <div className={classes["card-body"]}>
          <table className={classes.GlobalSettingTable}>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>
                  <span>1xBet</span>
                </td>
                <td>
                  <Button
                    onClick={handleOpen}
                    variant="contained"
                    color="success"
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
      <GlobalSettingBettingEditModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default GlobalSettingEditBetting;
