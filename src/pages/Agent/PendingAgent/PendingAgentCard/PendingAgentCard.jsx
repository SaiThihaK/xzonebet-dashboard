import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as FaIcons from "react-icons/fa";
import classes from "./PendingAgentCard.module.css";
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { getMethod } from "../../../../services/api-services";
import { logoutHandler } from "../../../../components/Sidebar/Sidebar";
const PendingAgentCard = ({user,path}) => {
    const [master, setMaster] = React.useState('');
    const [completeMasters,setCompleteMasters] = useState([]);
    const handleChange = (event) => {
        setMaster(event.target.value);
      };
   
  const fetchCompleteMaster = async()=>{
    try{
      const {data} = await axios.request(getMethod('api/affiliate-register-lists?sortColumn=updated_at&sortDirection=desc&limit=30&status=complete&form_type=master'));
      setCompleteMasters(data.data);
    }catch(error){
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
    }
  };
  useEffect(()=>{
    fetchCompleteMaster() ;
  },[]);

  // console.log(completeMasters);
  return (
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 345 }}>
        <div className={classes["user-image-hover-detail"]}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140px"
            image="https://icon-library.com/images/user-icon-jpg/user-icon-jpg-14.jpg"
          />
          <Link to={path+user.id}>
            <button className={classes["view-detail"]}>
              <FaIcons.FaEye />
            </button>
          </Link>
        </div>
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            className={classes["card-title"]}
            sx={{ fontSize: "15px", fontWeight: "600", color: "#504444" }}
          >
            {user.name}
          </Typography>
          <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label" size="small" >Master</InputLabel>
  <Select
    labelid="demo-simple-select-label"
    id="demo-simple-select"
    value={master}
    label="Choose"
    inputProps={{ "aria-label": "Without label" }}
    size="small"
    onChange={handleChange}
  > 
  {completeMasters.map((master,index)=>(
  <MenuItem key={index} value={master.id}>{master.name}</MenuItem>
  ))}
  </Select>
  <Button variant="contained" style={{marginTop:10}}>Confirm</Button>
</FormControl>
         
        </CardContent>
        {/* <CardActions sx={{ padding: "0 16px 16px 16px",float:'right' }}>
           <span className={classes['panding-status']}>Panding</span>
        </CardActions> */}
      </Card>
    </Grid>
  );
};

export default PendingAgentCard;