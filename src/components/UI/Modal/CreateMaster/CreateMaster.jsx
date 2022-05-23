import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import classes from "./CreateMaster.module.css";
import CustomGetFunction from "../../../../services/CustomGetFunction"
import {Grid, MenuItem, Select,InputLabel,FormControl } from "@mui/material"
import axios from "axios";
import { PostMethod } from "../../../../services/api-services";
import { toast } from "react-toastify";
const CreateMaster = ({ open, handleClose ,render,setRender}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    border: "1px solid #FFF",
    borderRadius: "0.5rem",
    p: 4,
    overflowY: "auto",
  maxHeight: "calc(100vh - 100px)",
  };
  const [name,setName]= useState("");
  const [password,setPassword] = useState("");
  const [phone,setPhone]= useState("");
  const [email,setEmail] = useState("");
  const [country,setCountry] = useState("");
  const [state,setState] = useState("");
  const [city,setCity] = useState(""); 
  const [withdraw_percent,setwithdraw_percent] = useState("");
  const [deposit_percent,setdeposit_percent] = useState("");
  const {data:countryData} = CustomGetFunction(`api/countries`,[]);
  const {data:stateData} = CustomGetFunction(`api/states/${country.id}`,[country])
  const {data:cityData} = CustomGetFunction(`api/cities/${state.id}`,[state]);
  const createSuperMaster = async()=>{
    try{
  const response = await axios.request(PostMethod(`api/agents/super-master`,{
    name,
    email,
    phone,
    password,
    country:country.name,
    city:city.name,
    state:state.name,
    deposit_percent,
    withdraw_percent
  }));
  if(response.data.status==="success"){
    toast.success(response.data.message);
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setCountry("");
    setCity("");
    setState("");
    setdeposit_percent("");
    setwithdraw_percent("");
    setRender(!render);
    handleClose();
    return;
  }
  if(response.data.status ==="error"){
    toast.error(response.data.message);
    return;
  }
    }catch(error){
      toast.error(error.response.data.message)
    }
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Super Master
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
            <form action="">
            <TextField
              sx={{ width: "100%", mb: 1.5, mt: 2 }}
              size="small"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
            <TextField
              sx={{ width: "100%", mb: 1.5 }}
              size="small"
              id="outlined-basic"
              label="Gmail"
              variant="outlined"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
              sx={{ width: "100%", mb: 1.5 }}
              size="small"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
            <TextField
              sx={{ width: "100%", mb: 1.5 }}
              size="small"
              id="outlined-basic"
              label="Deposit Percent"
              variant="outlined"
              type="number"
              value={deposit_percent}
              onChange={(e)=>{setdeposit_percent(e.target.value)}}
            />
            <TextField
              sx={{ width: "100%", mb: 1.5 }}
              size="small"
              id="outlined-basic"
              label="Withdraw Percent"
              type="number"
              variant="outlined"
              value={withdraw_percent}
              onChange={(e)=>setwithdraw_percent(e.target.value)}
            />
           
          </form>
            </Grid>
            <Grid item xs={6}>
            <form action="">
            <TextField
              sx={{ width: "100%", mb: 1.5, mt: 2 }}
              size="small"
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
            />
            <FormControl fullWidth>
            <InputLabel id="demo-select-small">Country</InputLabel>
            <Select
              sx={{ width: "100%", mb: 1.5 }}
              labelId="demo-select-small"
              size="small"
              id="demo-select-small"
              label="Country"
              variant="outlined"
              value={country.name}
              onChange={(e)=>setCountry(e.target.value)}
            >
          {
            countryData?.map((coun,index)=>(
              <MenuItem value={coun} key={index}>
                {
                  coun.name
                }
              </MenuItem>
            ))
          }
            </Select>
            </FormControl>
            <FormControl fullWidth>
            <InputLabel id="demo-select-medium">State</InputLabel>
            <Select
              sx={{ width: "100%", mb: 1.5 }}
              size="small"
              labelId="demo-select-small"
              id="demo-select-medium"
              label="State"
              variant="outlined"
              value={state.name}
              onChange={(e)=>setState(e.target.value)}
            >
              {
                stateData.map((state,index)=>(
                  <MenuItem value={state} key={index}>
                    {
                      state.name
                    }
                  </MenuItem>
                ))
              }
            </Select>
            </FormControl>
            <FormControl fullWidth>
            <InputLabel id="demo-select-medium">Country</InputLabel>
            <Select
              sx={{ width: "100%", mb: 1.5 }}
              size="small"
              id="outlined-basic"
              labelId="demo-select-small"
              label="City"
              variant="outlined"
              value={city}
              onChange={(e)=>setCity(e.target.value)}
            >
              {
                cityData.map((city,index)=>(
                  <MenuItem key={index} value={city}>
                    {city.name}
                  </MenuItem>
                ))
              }
            </Select>
            </FormControl>

            </form>
            </Grid>
          </Grid>
          <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "center" }}
            >
              <Button variant="contained" type="submit" color="success" onClick={()=>{
                createSuperMaster();
              }}>
                confirm
              </Button>
              <Button onClick={handleClose} variant="contained" color="error">
                Cancel
              </Button>
            </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateMaster;
