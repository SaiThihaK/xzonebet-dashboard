import { Button, FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard';
import SuperMasterDesc from '../SuperMaster/SuperMasterCard/SuperMasterDetail/SuperMasterDesc/SuperMasterDesc';
import classes from "./ConnectWithChat.module.css";
import ConnectChatModal from "../../components/UI/Modal/ConnectChatModal/ConnectChatModal"
const ConnectWithChat = () => {
const [open,setOpen] = useState(false);
const [id,setId] = useState("");
const [password,setPassword] = useState("");
const openHandler = ()=>setOpen(true);
const closeHandler= ()=>setOpen(false);

  return (
    <PageTitleCard title="Connect with Chat">
        <div className={classes["card-body"]}>
         <div className={classes["btn-container"]}>
         <Button variant="contained" onClick={openHandler}>Connect with Chat</Button>
         </div>
         <SuperMasterDesc />
        
        </div>
<ConnectChatModal 
open={open} closeHandler={closeHandler}
id={id} setId={setId}
password={password} setPassword={setPassword}
 />
    </PageTitleCard>
  )
}

export default ConnectWithChat