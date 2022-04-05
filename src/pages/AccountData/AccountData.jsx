import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CreateAccountDataModal from '../../components/UI/Modal/AccountData/CreateAccountData/CreateAccountData'
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard'
import classes from "./AccountData.module.css"
import AccountTitleTable from './AccountTitleTable/AccountTitleTable'
const AccountData = () => {
    const navigate = useNavigate();
    const [open,setOpen] = useState(false);

    const openHandler = ()=>setOpen(true);
    const closeHandler =()=>setOpen(false);
  return (
    <div>
    <PageTitleCard title="Account Data">
    <div className={classes["card-body"]}>
         <TextField size='small' sx={{width:600}}/>
     <div className={classes["create-btn"]}>
         <Button variant="contained"
        onClick={openHandler}
         >Create Acount Data</Button>
     </div>
     </div>
     <AccountTitleTable />
    </PageTitleCard>
    <CreateAccountDataModal open={open} closeHandler={closeHandler} />
    </div>
  )
}

export default AccountData