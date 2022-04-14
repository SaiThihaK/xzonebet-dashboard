import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import classes from "./NewbetModal.module.css"
import { Button, Grid, MenuItem, Select } from "@mui/material";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

const style = {
  position: "absolute",
  top: "50%",
  left: "60%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "1px solid #FFF",
  borderRadius: "0.5rem",
  p: 4,
};

const NewbetModal = ({ open, closeHandler,}) => {
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
      setValue(newValue);
    };
  return (
    <div>
      <Modal
        open={open}
        onClose={closeHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" 
          variant="body-1" component="h2"
          style={{display:"flex",justifyContent:"center",alignItems:"center"}}
          >
            New bet
          </Typography>
          <div className={classes["container"]}>
        <label>Match Title</label>
        <TextField size="small" style={{width:"100%"}} />
          </div>
{/* ------------------------Date and time------------------------------------------------ */}
        <div className={classes["container"]}>
        <label>Date and Time</label>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
       
          label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} size="small" style={{width:"100%"}} />}
        />
        </LocalizationProvider>
          </div>
{/* ===================Team 1================================================== */}
         <Grid container spacing={3} style={{marginTop:20}}>
   <Grid item xs={2}>
   <label>Team 1</label>
   </Grid>
   <Grid item xs={6}>
   <TextField size="small" style={{width:"100%"}} />
   </Grid>
   <Grid item xs={4}>
   <Select size="small" style={{width:"100%"}}>
            <MenuItem>Over</MenuItem>
            <MenuItem>Under</MenuItem>
        </Select>
        </Grid>
         </Grid>

         {/* ----------------Team 2------------------- */}
         <Grid container spacing={3} style={{marginTop:20}}>
   <Grid item xs={2}>
   <label>Team 2</label>
   </Grid>
   <Grid item xs={6}>
   <TextField size="small" style={{width:"100%"}} />
   </Grid>
   <Grid item xs={4}>
   <Select size="small" style={{width:"100%"}}>
            <MenuItem>Over</MenuItem>
            <MenuItem>Under</MenuItem>
        </Select>
        </Grid>
         </Grid>
         {/* ---------------Body------------ */}
         <div className={classes["container"]}>
        <label>Body</label>
        <TextField size="small" style={{width:"100%"}} />
          </div>
          {/* -------------------------Total------------------------------ */}
          <div className={classes["container"]}>
        <label>Total</label>
        <TextField size="small" style={{width:"100%"}} />
          </div>
          <div className={classes["btn-container"]}>
         <Button variant="contained">Save</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default NewbetModal;
