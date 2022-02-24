import React from "react";
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
const AgentCard = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(age);
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
          <Link to="/become-an-agent/detail/1">
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
            Agent Name
          </Typography>
          <FormControl sx={{ width: "100%" }}>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              size="small"
              sx={{ backgroundColor: "#f3f3f3" }}
            >
              <MenuItem value="">Choose</MenuItem>
              <MenuItem value={"master"}>Master</MenuItem>
              <MenuItem value={"agent"}>Agent</MenuItem>
              <MenuItem value={"affiliate"}>Affiliate Agent</MenuItem>
              <MenuItem value={"cancel"}>Cancel</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
        <CardActions sx={{ padding: "0 16px 16px 16px" }}>
          <Button size="medium" variant="contained" sx={{ width: "100%" }}>
            Submit
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default AgentCard;
