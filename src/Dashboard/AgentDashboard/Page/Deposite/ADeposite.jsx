



import { useEffect, useState } from "react";

import MDepositeTable from "../../../../components/Table/MDepostie/MDepositeTable";
import Card from "../../../../components/UI/Card";
import classes from "./ADeposite.module.css";
import 'react-toastify/dist/ReactToastify.css';
import { FormControl, MenuItem, Select } from "@mui/material";

const ADeposite = ()=>{
const [num,setNum] = useState(0);
const [filterStatus,setFilterStatus] = useState("");
const type = localStorage.getItem('type');
useEffect(()=>{

},[num]);
return(
    <div>
        <Card>
     <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>
             Deposite Table
          </h1>
     </div>
     <div className={classes["card-body"]}>
     <FormControl sx={{width:200}} style={{marginbottom:10}}>
         <label>Status Filter</label>
         <Select value={filterStatus} onChange={(e)=>setFilterStatus(e.target.value)} size="small">
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

export default ADeposite;