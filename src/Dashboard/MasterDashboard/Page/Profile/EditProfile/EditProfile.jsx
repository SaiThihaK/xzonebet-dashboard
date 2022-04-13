


import { Button, FormControl, TextField } from "@mui/material";
import Card from "../../../../../components/UI/Card";
import classes from "./EditProfile.module.css"


const EditProfile = ()=>{

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
             <TextField  size="small" />
         </FormControl>
         <FormControl fullWidth className={classes["form-control"]}>
             <label>Date of Birth</label>
             <TextField  size="small" />
         </FormControl>
         <FormControl fullWidth className={classes["form-control"]}>
             <label>National Identity Card Number</label>
             <TextField  size="small" />
         </FormControl>
         <FormControl fullWidth className={classes["form-control"]}>
             <label>Passport Name</label>
             <TextField  size="small" />
         </FormControl>
     </div>
     {/* --------------------Grid Right----------------- */}
     <div className={classes["grid-item"]}>
         <FormControl fullWidth className={classes["form-control"]}>
             <label>Country</label>
             <TextField  size="small" />
         </FormControl>
         <FormControl fullWidth className={classes["form-control"]}>
             <label>Nationality</label>
             <TextField  size="small" />
         </FormControl>
         <FormControl fullWidth className={classes["form-control"]}>
             <label>Region</label>
             <TextField  size="small" />
         </FormControl>
         <FormControl fullWidth className={classes["form-control"]}>
             <label>Currency Type</label>
             <TextField  size="small" />
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