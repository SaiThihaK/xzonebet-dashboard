import React from "react";
import ToggleBtn from "../../../components/UI/ToggleBtn/ToggleBtn";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import classes from "./Games.module.css";

const Games = ({ src }) => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <Card sx={{ width: '19%',boxShadow: '0 0 5px 0 rgb(43 43 43 / 10%), 0 11px 6px -7px rgb(43 43 43 / 10%)',border: '1px solid #cecece',marginBottom:'1%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140px"
          image={src}
          alt="green iguana"
          sx={{objectFit: 'contain'}}
        />
        <CardContent>
          <Typography gutterBottom component="div" sx={{fontSize: '15px',fontWeight: 'bolder',height:'25px'}}>
            Game Title
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{justifyContent:'flex-end'}}>
         <ToggleBtn defaultChecked= "true" />
      </CardActions>
    </Card>
  );
};

export default Games;
