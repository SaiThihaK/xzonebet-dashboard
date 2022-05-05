import { Button } from '@mui/material'
import React from 'react'
import PageTitleCard from '../../../components/UI/PageTitleCard/PageTitleCard'
import classes from "./UserDetailDesTable.module.css";
import {useState} from "react"

import UserWithDrawTable from '../../../components/Table/UserWithDraw/UserWithDraw';
import AgentDeposite from '../../../Dashboard/AgentDashboard/Page/Deposite/AgentDeposite/AgentDeposite';
import MDepositeTable from '../../../components/Table/MDepostie/MDepositeTable';

const UserDetailDesTable = () => {
 const [isDeposite,setIsDeposite] = useState(false);
  return (
    <PageTitleCard title="User Deposite/WithDraw">
        <div className={classes["card-body"]}>
        <div className={classes["btn-container"]}>
        <Button variant="outlined" onClick={()=>setIsDeposite(!isDeposite)}>
       {
           isDeposite ? "WithDraw" : "Deposite"
       }
        </Button>
        
        </div>
        <div className={classes["table-margin"]}>
          {
              isDeposite ? <MDepositeTable/> : <UserWithDrawTable />
          }
        </div>
        </div>
      
    </PageTitleCard>
  )
}

export default UserDetailDesTable