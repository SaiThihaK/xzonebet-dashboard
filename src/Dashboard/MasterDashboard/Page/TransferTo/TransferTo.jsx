

import { FormControl, TextField } from "@mui/material";
import Card from "../../../../components/UI/Card";
import classes from "./TransferTo.module.css"


const TransferTo = ()=>{

return(
    <div style={{padding:20}}>
        <Card>
     <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Transfer To</h1>
     </div>
     <div className={classes["card-body"]}>
         <FormControl sx={{width:700}}>
    <label></label>
       <TextField />
         </FormControl>
    </div>
    </Card>
    </div>
)

}

export default TransferTo;