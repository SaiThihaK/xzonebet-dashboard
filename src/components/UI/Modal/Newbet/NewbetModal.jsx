import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import classes from "./NewbetModal.module.css"
import { Button, Grid, MenuItem, Select ,Stack} from "@mui/material";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import DateTimePicker from '@mui/lab/DateTimePicker';

const style = {
  position: "absolute",
  top: "50%",
  left: "60%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "1px solid #FFF",
  borderRadius: "0.5rem",
  p: 4,
};

const NewbetModal = ({ open, closeHandler,}) => {
    const [value, setValue] = React.useState(new Date('2022-08-18T21:11:54'));

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
          <Grid container spacing={1}>
            <Grid item xs={6}>
            <div className={classes["container"]}>
        <label>Match Title</label>
        <p>Nigma and Og pwal</p>
          </div>
            </Grid>
            <Grid item xs={6}>
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
            </Grid>
          </Grid>
         

       
{/* ===================Team 1================================================== */}
<hr style={{margin:"20px 0px"}} />
         <Grid container spacing={3}>
   <Grid item xs={2}>
   <label>Team 1</label>
   </Grid>
   <Grid item xs={6}>
   <p>TEAM OG</p>
   </Grid>
   <Grid item xs={4}>
   <Select size="small" style={{width:"100%"}}>
            <MenuItem>Over</MenuItem>
            <MenuItem>Under</MenuItem>
        </Select>
        </Grid>
         </Grid>


    <Grid container spacing={1}>
      <Grid item xs={6} style={{marginTop:10}}>
    <div className={classes["team-container"]}> 
   <label>Country</label>
   <p>UAE</p>
    </div>
      </Grid>
      <Grid item xs={6} style={{marginTop:10}}>
    <div className={classes["team-container"]}> 
   <label>League</label>
   <p>DPC Major</p>
    </div>
      </Grid>
    </Grid>
    <hr style={{margin:"20px 0px"}} />
         {/* ----------------Team 2------------------- */}
      
         <Grid container spacing={3}>
   <Grid item xs={2}>
   <label>Team 2</label>
   </Grid>
   <Grid item xs={6}>
  <p>Team Nigma Glaxy</p>
   </Grid>
   <Grid item xs={4}>
   <Select size="small" style={{width:"100%"}}>
            <MenuItem>Over</MenuItem>
            <MenuItem>Under</MenuItem>
        </Select>
        </Grid>
         </Grid> 
      <Grid container spacing={1} >
      <Grid item xs={6} style={{marginTop:10}}>
    <div className={classes["team-container"]}> 
   <label>Country</label>
   <p>Danemad</p>
    </div>
      </Grid>
      <Grid item xs={6} style={{marginTop:10}}>
    <div className={classes["team-container"]}> 
   <label>League</label>
   <p>DPC Major</p>
    </div>
      </Grid>
    </Grid>
    <hr style={{marginTop:20}} />

         {/* ---------------Body------------ */}
         <Grid container spacing={3}>
           <Grid item xs={4}>
           <div className={classes["container"]}>
        <label>Body</label>
        <TextField size="small" type="number" style={{width:"100%"}} />
          </div>
           </Grid>
           <Grid item xs={4}>
           <div className={classes["container"]}>
            <Select size="small" style={{width:150}}>
              <MenuItem style={{display:"flex",justifyContent:"center",alignItem:"center",fontSize:"18px"}}>-</MenuItem>
              <MenuItem  style={{display:"flex",justifyContent:"center",alignItem:"center",fontSize:"18px"}}>=</MenuItem>
              <MenuItem  style={{display:"flex",justifyContent:"center",alignItem:"center",fontSize:"18px"}}>+</MenuItem>
            </Select>
            </div>
           </Grid>
           <Grid item xs={4}>
             <div className={classes["container"]}>
             <TextField size="small" type="number" style={{width:"100%"}} />
             </div>
          
           </Grid>
         </Grid>
         <hr style={{marginTop:20}} />
          {/* -------------------------Total------------------------------ */}
          <Grid container spacing={3}>
           <Grid item xs={4}>
           <div className={classes["container"]}>
        <label>Body</label>
        <TextField size="small" type="number" style={{width:"100%"}} />
          </div>
           </Grid>
           <Grid item xs={4}>
           <div className={classes["container"]}>
            <Select size="small" style={{width:150}}>
              <MenuItem style={{display:"flex",justifyContent:"center",alignItem:"center",fontSize:"18px"}}>-</MenuItem>
              <MenuItem  style={{display:"flex",justifyContent:"center",alignItem:"center",fontSize:"18px"}}>=</MenuItem>
              <MenuItem  style={{display:"flex",justifyContent:"center",alignItem:"center",fontSize:"18px"}}>+</MenuItem>
            </Select>
            </div>
           </Grid>
           <Grid item xs={4}>
             <div className={classes["container"]}>
             <TextField size="small" type="number" style={{width:"100%"}} />
             </div>
          
           </Grid>
         </Grid>
         <div className={classes["btn-container"]}>
          <Button variant="contained" size="large">Save</Button>
         </div>
        </Box>
      </Modal>
    </div>
  );
};

export default NewbetModal;
