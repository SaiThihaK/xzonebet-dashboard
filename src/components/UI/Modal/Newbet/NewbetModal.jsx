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
import { ChangeDate } from "../../../../Controller/ChangeDate";
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

const NewbetModal = ({ open,bettingData, closeHandler,}) => {
  console.log(bettingData);
 
    const [value, setValue] = React.useState(new Date(bettingData?.fixture?.date));

    const handleChange = (newValue) =>
      {
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
          style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            New bet
          </Typography>
          <Grid container spacing={1} marginBottom={5}  marginTop={3}>
            <Grid item xs={6}>
            <div className={classes["container"]}  >
        <label>Match Title</label>
        <p>{`${bettingData?.teams?.home?.name} and ${bettingData?.teams?.away?.name}` } </p>
          </div>
            </Grid>
            <Grid item xs={6} >
            <div className={classes["container"]}  >
        <label>Date and Time</label>
    <p> {ChangeDate(bettingData?.fixture?.date)} </p>
          </div>
            </Grid>
          </Grid>      
{/* =======>============Team 1================================================== */}
{/* <hr style={{margin:"20px 0px"}} /> */}
      <Grid container>
   <Grid item xs={6} style={{padding: 15 ,paddingLeft: 0}}>
     <div  className={classes["team-con"]} >
     <label>Team 1</label>
     <div style={{display : "flex", alignItems : "center"}}>

    
<img src={bettingData?.teams?.home?.logo} style={{marginRight: "10px" }} width="30" alt="" />
   <p>{bettingData?.teams?.home?.name}</p>
   </div>
     </div>
     <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
     <Select size="small" sx={{width:200}}>
            <MenuItem>Over</MenuItem>
            <MenuItem>Under</MenuItem>
        </Select>
     </div>

  
    <div className={classes["team-container"]}> 
   <label>Country</label>
  <p>{bettingData?.league?.country}</p>
    </div>
    <div className={classes["team-container"]}> 
   <label>League</label>
   <p>{  bettingData?.league?.name}</p>
    </div>
    </Grid>
         {/* ----------------Team 2------------------- */}
   <Grid item xs={6} style={{borderLeft:"1px solid gray",padding: "15px" , paddingRight: 0 }}>
   <div className={classes["team-con"]}>
     <label>Team 2</label>
     <div style={{display : "flex", alignItems : "center"}}>

    
     <img src={bettingData?.teams?.away?.logo} style={{marginRight: "10px" }} width="30" alt="" />
     <p>{bettingData?.teams?.away?.name}</p>
     </div>
     </div>
     <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
     <Select size="small" sx={{width:200}}>
            <MenuItem>Over</MenuItem>
            <MenuItem>Under</MenuItem>
        </Select>
     </div>
  
      
  <div className={classes["team-container"]}> 
   <label>Country</label>
   <p>{bettingData?.league?.country}</p>
    </div>
    
    <div className={classes["team-container"]}> 
   <label>League</label>
   <p>{bettingData?.league?.name}</p>
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
