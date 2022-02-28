import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as FaIcons from "react-icons/fa";
import classes from "./CompleteMasterCard.module.css";

const CompleteMasterCard = ({completeMaster}) => {
     console.log(completeMaster)
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
          <Link to={`/account/master/complete-master/detail/99`}>
            <button className={classes["view-detail"]}>
              <FaIcons.FaEye />
            </button>
          </Link>
        </div>
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            style={{display:"flex",justifyContent:"center",alignItems:"center"}}
            sx={{ fontSize: "15px", fontWeight: "600", color: "#504444" }}
          >
            NOne
          </Typography>
          
        </CardContent>
        {/* <CardActions sx={{ padding: "0 16px 16px 16px",float:'right' }}>
           <span className={classes['panding-status']}>Panding</span>
        </CardActions> */}
      </Card>
    </Grid>
  );
};

export default CompleteMasterCard;