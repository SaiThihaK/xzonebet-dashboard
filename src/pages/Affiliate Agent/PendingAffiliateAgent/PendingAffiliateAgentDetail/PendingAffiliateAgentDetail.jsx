import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import classes from "./PendingAffiliateAgentDetail.module.css";
import axios from "axios";
import { getMethod } from "../../../../services/api-services";
import Card from "../../../../components/UI/Card";
import { logoutHandler } from "../../../../components/Sidebar/Sidebar";

const PendingAffiliateAgentDetail = () => {
const [user,setUser] = useState("");
const fetchUserDetail = async()=>{
  try{
    const {data} = await axios.request(getMethod(`/api/affiliate-register-lists/${id}`));
    // console.log(data.data);
    setUser(data.data);
  }catch(error){
    if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
    logoutHandler();
    }
  }
}

useEffect(()=>{
  fetchUserDetail();
  return ()=>setUser("");
},[])
const {id} = useParams();
// console.log(user);
  return (
    <div>
              <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Pending Agent Form Detail</h1>
        </div>
        <div className={classes["card-body"]}>
        <div className={classes["agent-user-image-group"]}>
        <img
          src="https://icon-library.com/images/user-icon-jpg/user-icon-jpg-14.jpg"
          className={classes["agent-user-image"]}
          alt=""
        />
        <div className={classes["agent-user-des"]}>
          <h3>{user.name}</h3>
          <span>ID - {user.id}</span>
        </div>
      </div>
      <div className={classes["detail-container"]}>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Email </label>:<p>&nbsp;&nbsp;{user.email}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Phone </label>:<p>&nbsp;&nbsp;{user.phone}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Country </label>:<p>&nbsp;&nbsp;{user.country}</p>
        </div>
        {/* <div className={classes["form-group-desc"]}>
          <label htmlFor="">Region </label>:<p>&nbsp;&nbsp;-</p>
        </div> */}
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">City </label>:<p>&nbsp;{user.city}&nbsp;</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Preferred Method of Contract</label>:<p>&nbsp;{user.preferred_method_of_contract}&nbsp;</p>
        </div>
        <Link to="/account/affiliate-agent/pending-affiliate-agent">
          <Button variant="contained">Back</Button>
        </Link>
      </div>
        </div>
      </Card>
  
     
    </div>
  );
};

export default PendingAffiliateAgentDetail;
