


import { Button, FormControl, TextField } from "@mui/material";
import Card from "../../../../../components/UI/Card";
import classes from "./EditProfile.module.css"


const EditProfile = ()=>{

return(
    <div style={{padding:20}}>
        <Card>
     <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Edit Profile</h1>
     </div>
     <div style={{paddingBottom:20}}>
     <div className={classes["card-body"]}>
     <div style={{padding:"0px 20px"}}>
         <FormControl fullWidth style={{marginBottom:10}}>
             <label>Name</label>
             <TextField  size="small" />
         </FormControl>
         <FormControl fullWidth style={{marginBottom:10}}>
             <label>Date of Birth</label>
             <TextField  size="small" />
         </FormControl>
         <FormControl fullWidth style={{marginBottom:10}}>
             <label>Phone</label>
             <TextField  size="small" />
         </FormControl>
     </div>
     {/* --------------------Grid Right----------------- */}
     <div style={{padding:"0px 20px"}}>
         <FormControl fullWidth style={{marginBottom:10}}>
             <label>Country</label>
             <TextField  size="small" />
         </FormControl>
         <FormControl fullWidth style={{marginBottom:10}}>
             <label>Region</label>
             <TextField  size="small" />
         </FormControl>
         <FormControl fullWidth style={{marginBottom:10}}>
             <label>E-mail</label>
             <TextField  size="small" />
         </FormControl>
     </div>
    </div>
         
     <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
        <Button variant="contained">Confirm</Button>
    </div>
     </div>

        </Card>
    </div>
)

}

export default EditProfile;