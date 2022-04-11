import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import classes from "./MaungHeader.module.css";
import MaungSettingEdit from "../../../components/UI/Modal/MaungSettingEdit/MaungSettingEdit";
const MaungHeader = () => {
  const [open,setOpen] = useState(false);
  const handleOpen = ()=>setOpen(true);
  const handleClose = ()=>setOpen(false);

  const btnClick = ()=>{
    handleClose();
  }
  return (
    <div style={{display:"flex",justifyContent:"flex-end",marginBottom:20}}>
      {/* <div className={classes["search-header-flex"]}>
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
            label="Tax"
            variant="outlined"
          />
        </div>
        <div className={classes.formGroup}>
          <Button type="submit" variant="contained" size="large">
            Add
          </Button>
        </div>
      </div> */}
      
  <Button onClick={handleOpen} variant="contained">Create Maung</Button>
  <MaungSettingEdit open={open} handleClose={handleClose} btnName="Create Maung" btnClick={btnClick} />
    </div>
  );
};

export default MaungHeader;
