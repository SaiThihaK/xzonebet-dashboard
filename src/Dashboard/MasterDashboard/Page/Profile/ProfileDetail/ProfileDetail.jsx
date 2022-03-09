import axios from "axios";
import React from "react";
import Card from "../../../../../components/UI/Card";
import classes from "./ProfileDetail.module.css";

const ProfileDetail = () => {
  return (
    <div>
        <div className={classes["agent-user-image-group"]}>
        <img
          src="https://icon-library.com/images/user-icon-jpg/user-icon-jpg-14.jpg"
          className={classes["agent-user-image"]}
          alt=""
        />
        </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",padding:10,width:"100%"}}>
          <Card>
          <div className={classes["form-group-desc"]}>
          <label htmlFor="">Name </label>
          :<p>&nbsp;&nbsp;Han Zar Moe Win</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Date of Birth </label>
          :<p>&nbsp;&nbsp;20/12/1998</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">National Identity Card Number </label>
          :<p>&nbsp;&nbsp;Mama-1500</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Passport  Number</label>
          :<p>&nbsp;&nbsp;2343wsd3</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Phone</label>
          :<p>&nbsp;&nbsp;09234728424</p>
        </div>
      </Card>
      {/* ---------------------------------------------------------------- */}
       <Card>
          <div className={classes["form-group-desc"]}>
          <label htmlFor="">Email </label>
          :<p>&nbsp;&nbsp;HanzarMoeWin@gmail.com</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Nationality </label>
          :<p>&nbsp;&nbsp;Myanmar</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Country </label>
          :<p>&nbsp;&nbsp;Myanmar</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Region</label>
          :<p>&nbsp;&nbsp;Yangon</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Currency Type</label>
          :<p>&nbsp;&nbsp;Crypto</p>
        </div>
       </Card>
        </div>
    </div>
  );
};

export default ProfileDetail;
