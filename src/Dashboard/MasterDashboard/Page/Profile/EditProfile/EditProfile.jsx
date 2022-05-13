


import { Button, FormControl, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../../../../components/UI/Card";
import { userInfo } from "../../../../../features/UserInfo";
import classes from "./EditProfile.module.css"


const EditProfile = ()=>{
    const userData = useSelector(userInfo)
    console.log(userData);
   const [name,setName] = useState("");
   const [dateOfBirth,setDateOfBirth] = useState("");
   const [Nid,setNid] = useState("");
   const [passport,setPassPort] = useState("");
   const [country,setCountry] = useState("");
   const [nationality,setNationality] = useState("");
   const [region,setRegion] =    useState("");
   const [currency,setCurrency] = useState("");

   useEffect(()=>{
   if(userData){
       setName(userData?.name)
       setDateOfBirth("22/4/1990");
       setCountry(userData?.agent?.country)
       setNationality()
       setRegion()
       setCurrency()
   }
   },[])

return(
    <div className={classes["container"]}>
        <Card>
     <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Edit Profile</h1>
     </div>
     <div className={classes["form-container"]}>
     <div className={classes["card-body"]}>
     <div className={classes["grid-item"]}>
         <FormControl fullWidth className={classes["form-control"]}>
             <label>Name</label>
             <TextField  size="small" value={name} />
         </FormControl>
         <FormControl fullWidth className={classes["form-control"]}>
             <label>Date of Birth</label>
             <TextField  size="small" value={dateOfBirth} />
         </FormControl>
         <FormControl fullWidth className={classes["form-control"]}>
             <label>National Identity Card Number</label>
             <TextField  size="small" value={Nid} />
         </FormControl>
         <FormControl fullWidth className={classes["form-control"]}>
             <label>Passport Name</label>
             <TextField  size="small" value={passport} />
         </FormControl>
     </div>
     {/* --------------------Grid Right----------------- */}
     <div className={classes["grid-item"]}>
         <FormControl fullWidth className={classes["form-control"]}>
             <label>Country</label>
             <TextField  size="small" value={country} />
         </FormControl>
         <FormControl fullWidth className={classes["form-control"]}>
             <label>Nationality</label>
             <TextField  size="small" value={nationality} />
         </FormControl>
         <FormControl fullWidth className={classes["form-control"]}>
             <label>Region</label>
             <TextField  size="small" value={region} />
         </FormControl>
         <FormControl fullWidth className={classes["form-control"]}>
             <label>Currency Type</label>
             <TextField  size="small" value={currency} />
         </FormControl>
     </div>
    </div>
         
     <div className={classes["btn-container"]}>
        <Button variant="contained">Confirm</Button>
    </div>
     </div>

        </Card>
    </div>
)

}

export default EditProfile;