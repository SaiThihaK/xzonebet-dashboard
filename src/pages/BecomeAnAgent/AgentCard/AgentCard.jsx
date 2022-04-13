import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as FaIcons from "react-icons/fa";
import classes from "./AgentCard.module.css";
import axios from "axios";
import { PostMethod } from "../../../services/api-services";
import { InputLabel } from "@mui/material";
import { logoutHandler } from "../../../components/Sidebar/Sidebar";
import {toast} from "react-toastify"
const AgentCard = ({
  user,
  num,
  setNum
}) => {
  const [age, setAge] = React.useState("");
  const [status,setStatus] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  console.log(user)
  const AlertToast = (toast,msg) => toast(msg);
  const diffForm_type = ()=>{
    if(age==="agent" || form_type === "agent"){
      return {user_type:age || user.form_type,master_id:1}
    }
    else{
      return {user_type:age || user.form_type}
    }
  }
  // console.log(user)
  const submitHandler = async(e)=>{
    e.preventDefault();
    
      try{
        const url = `api/affiliate-register-lists/${status || "accept"}/${user.id}`;
        const {data} = await axios.request(PostMethod(
          url,diffForm_type()
        ));
        if(data.status = "success"){
        AlertToast(toast.success,data.message);
        setNum(num+1);
        return;
        }
        if(data.status = "error"){
          AlertToast(toast.success,data.message);
         return;
        };
      }catch(error){
        if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
        logoutHandler();
        }
      }
    }


 
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
          <Link to={`/become-an-agent/detail/${user.id}`}>
            <button className={classes["view-detail"]}>
              <FaIcons.FaEye />
            </button>
          </Link>
        </div>
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            sx={{ fontSize: "15px", fontWeight: "600", color: "#504444" }}
          >
            {user.name}
          </Typography>
            <FormControl sx={{ width: "100%" }}>
             {/* <InputLabel labelid="demo-simple-select-label"
              id="demo-simple-select" size="small">{user.form_type}</InputLabel> */}
            <Select
              value={age || user.form_type}
              onChange={handleChange}
              size="small"
              labelid="demo-simple-select-label"
              id="demo-simple-select"
              // label={user.form_type}
              inputProps={{ "aria-label": "Without label" }}
              sx={{ backgroundColor: "#f3f3f3" }}
            >
              <MenuItem value={"master"} onClick={()=>setStatus("accept")}>Master</MenuItem>
              <MenuItem value={"agent"} onClick={()=>setStatus("accept")}>Agent</MenuItem>
              <MenuItem value={"affiliate-agent"} onClick={()=>setStatus("accept")}>Affiliate Agent</MenuItem>
              <MenuItem value={"reject"} onClick={()=>setStatus("rejet")}>Cancel</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
        <CardActions sx={{ padding: "0 16px 16px 16px" }}>
          <Button size="medium" variant="contained" sx={{ width: "100%" }} onClick={(e)=>submitHandler(e)}>
            Submit
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default AgentCard;
