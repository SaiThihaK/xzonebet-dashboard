import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import classes from "./NewbetModal.module.css"
import { Button, FormControl, Grid, MenuItem, Select ,Stack} from "@mui/material";
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
         

       
{/* =======>============Team 1================================================== */}
<hr style={{margin:"20px 0px"}} />
      <Grid container spacing={7}>
  
   <Grid item xs={6}>
     <div style={{display:'flex',justifyContent:"space-around",marginBottom:10}}>
     <label>Team 1</label>
     <p>Team OG</p>
     </div>
   <Select size="small" style={{width:"100%"}}>
            <MenuItem>Over</MenuItem>
            <MenuItem>Under</MenuItem>
        </Select>
  
    <div className={classes["team-container"]}> 
   <label>Country</label>
   <p>UAE</p>
    </div>
    <div className={classes["team-container"]}> 
   <label>League</label>
   <p>DPC Major</p>
    </div>
    </Grid>
   

         {/* ----------------Team 2------------------- */}
      

   <Grid item xs={6}>
   <div style={{display:'flex',justifyContent:"space-evenly",marginBottom:10}}>
     <label>Team 2</label>
     <p>Team Nigma Galaxy</p>
     </div>
   <Select size="small" style={{width:"100%"}}>
            <MenuItem>Over</MenuItem>
            <MenuItem>Under</MenuItem>
        </Select>
      
    <div className={classes["team-container"]}> 
   <label>Country</label>
   <p>Danemad</p>
    </div>
    
    <div className={classes["team-container"]}> 
   <label>League</label>
   <p>DPC Major</p>
    </div>
    </Grid>
    </Grid>  
<hr style={{margin:"20px 0px"}} />

         {/* ---------------Body------------ */}
         <Grid container spacing={3}>
           <Grid item xs={5}>
           <div className={classes["container"]}>
        <label>Body</label>
        <TextField size="small" type="number" style={{width:"100%"}} />
          </div>
           </Grid>
           <Grid item  xs={3}>
           <FormControl fullWidth style={{marginTop:20}}>
            <Select size="small" >
              <MenuItem style={{display:"flex",justifyContent:"center",alignItem:"center",fontSize:"18px"}}>-</MenuItem>
              <MenuItem  style={{display:"flex",justifyContent:"center",alignItem:"center",fontSize:"18px"}}>=</MenuItem>
              <MenuItem  style={{display:"flex",justifyContent:"center",alignItem:"center",fontSize:"18px"}}>+</MenuItem>
            </Select>
            </FormControl>
           </Grid>
           <Grid item xs={3}>
             <div className={classes["container"]}>
             <TextField size="small" type="number" style={{width:"100%"}} />
             </div>
          
           </Grid>
         </Grid>
         
          {/* -------------------------Total------------------------------ */}
          <Grid container spacing={3}>
           <Grid item xs={5}>
           <div className={classes["container"]}>
        <label>Total</label>
        <TextField size="small" type="number" style={{width:"100%"}} />
          </div>
           </Grid>
           <Grid item  xs={3}>
           <FormControl fullWidth style={{marginTop:20}}>
            <Select size="small" >
              <MenuItem style={{display:"flex",justifyContent:"center",alignItem:"center",fontSize:"18px"}}>-</MenuItem>
              <MenuItem  style={{display:"flex",justifyContent:"center",alignItem:"center",fontSize:"18px"}}>=</MenuItem>
              <MenuItem  style={{display:"flex",justifyContent:"center",alignItem:"center",fontSize:"18px"}}>+</MenuItem>
            </Select>
            </FormControl>
           </Grid>
           <Grid item xs={3}>
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
