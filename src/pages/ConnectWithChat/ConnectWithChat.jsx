import { Button, FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard';
import SuperMasterDesc from '../SuperMaster/SuperMasterCard/SuperMasterDetail/SuperMasterDesc/SuperMasterDesc';
import classes from "./ConnectWithChat.module.css";

const ConnectWithChat = () => {
    const [id,setId] = useState("");
    const [isTrue,setTrue] = useState(false);

  return (
    <PageTitleCard title="Connect with Chat">
        <div className={classes["card-body"]}>
         <div style={{display:"flex"}}>
          <TextField size='small' value={id} onChange={(e)=>setId(e.target.value)}  sx={{width:600}} placeholder="Search with Id"/>
         <Button variant="contained" 
         size="small" style={{marginLeft:30}} onClick={()=>setTrue(true)}>Search</Button>
         </div>
        {
            isTrue && (<SuperMasterDesc />)
        } 
        </div>

    </PageTitleCard>
  )
}

export default ConnectWithChat