import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard'
import DepartmentTable from '../AdminTeamAccount/Department/DepartmentTable/DepartmentTable'
import classes from "./AccountTitle.module.css"
const AccountTitle = () => {
  const navigate = useNavigate();

  const AccountTitleData = [
      {name:"NetWorth Account"},
      {name:"Betting Account"},
  ]
  return (
    <div>
    <PageTitleCard title="Account Title">
    <div className={classes["card-body"]}>
         <TextField size='small' sx={{width:600}}/>
     <div className={classes["create-btn"]}>
         <Button variant="contained"
         onClick={()=>navigate("/admin-team-account/department/create-department")}
         >Create Acount Title</Button>
     </div>
     </div>
      <DepartmentTable data={AccountTitleData} />
    </PageTitleCard>
</div>
  )
}

export default AccountTitle