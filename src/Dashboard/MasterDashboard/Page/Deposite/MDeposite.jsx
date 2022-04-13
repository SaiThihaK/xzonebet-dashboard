

import { useState } from "react";
import { ToastContainer } from "react-toastify";
import MDepositeTable from "../../../../components/Table/MDepostie/MDepositeTable";
import Card from "../../../../components/UI/Card";
import 'react-toastify/dist/ReactToastify.css';
import classes from "./MDeposite.module.css";
import { FormControl, MenuItem, Select } from "@mui/material";

const MDeposite = ()=>{
const [num,setNum] = useState(0);

const [filterStatus,setFilterStatus] = useState("");
return(
    <div>
        <Card>
            <ToastContainer />
     <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Deposite</h1>
     </div>
     <div className={classes["card-body"]}>
     <FormControl sx={{width:200}}>
         <Select size="small" value={filterStatus} onChange={(e)=>setFilterStatus(e.target.value)}>
            <MenuItem value="">
             All
             </MenuItem>
             <MenuItem value="&status=pending">
             Pending
             </MenuItem>
             <MenuItem value="&status=approve">
             Approve
             </MenuItem>
             <MenuItem value="&status=rejected">
             Reject
             </MenuItem>

         </Select>
         </FormControl>
     <MDepositeTable num={num} setNum={setNum} filterStatus={filterStatus}/>
    </div>
   
        </Card>
        
    </div>
)

}

export default MDeposite;