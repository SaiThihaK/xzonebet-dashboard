import React from "react";
import Card from '../../../components/UI/Card';
import Grid from "@mui/material/Grid";
import classes from './CompleteMaster.module.css';
import { useState, useEffect   } from "react";
import axios from "axios";
import MasterCard from "../../../components/MasterCard/MasterCard";
import { getMethod } from "../../../services/api-services";
import { logoutHandler } from "../../../components/Sidebar/Sidebar";
import MemberCard from "../../../components/MemberCard/MemberCard";


const CompleteMaster = () => {
  const [completeMasters,setCompleteMasters] = useState([]);
  const fetchCompleteMaster = async()=>{
    try{
      const {data} = await axios.request(getMethod(`api/affiliate-register-lists?sortColumn=updated_at&sortDirection=desc&limit=30&status=complete&form_type=master`));
      if(data.status==="success"){
        setCompleteMasters(data.data);
        return;
      }
     

    }catch(error){
      console.log(error);
      console.log(error.response.data.message)
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
    }
  };
//  console.log(completeMasters);
  useEffect(()=>{
   fetchCompleteMaster();
   return ()=>setCompleteMasters([]);
  },[]);
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Complete Masters</h1>
        </div>
        <div className={classes["card-body"]}>
          {/* <Grid container spacing={3}>
           {completeMasters.length !==0 && completeMasters.map((completeMaster)=>
           (<MasterCard key={completeMaster?.id} user={completeMaster} path="/account/master/complete-master/detail/" />)
           )}
          </Grid> */}
           <Grid container spacing={5}>
            {
              completeMasters.length  !==0 && completeMasters.map((master,index)=>(
                <Grid item xs={6} key={index}>
                  <MemberCard partner={master} path={"/account/master/confirm-master/detail/"} />
                </Grid>
  ))
            }
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default CompleteMaster;