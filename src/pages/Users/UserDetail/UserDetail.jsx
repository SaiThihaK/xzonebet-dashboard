import { Button, Stack } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageTitleCard from '../../../components/UI/PageTitleCard/PageTitleCard'
import SuperMasterDesc from '../../SuperMaster/SuperMasterCard/SuperMasterDetail/SuperMasterDesc/SuperMasterDesc'
import classes from   "./UserDetail.module.css"
const UserDetail = () => {
 const navigate = useNavigate();
  return (
  <PageTitleCard title="User Detail">
      <div className={classes["card-body"]}>
      <SuperMasterDesc />
      </div>
      <Stack direction="row" 
      style={{display:"flex",justifyContent:"center",paddingBottom:20}}
      spacing={6}
      >
    <Button variant="contained">Bet List</Button>
    <Button variant="contained" onClick={()=>{navigate("/deposite-withdraw-table")}}>Deposite/WithDraw</Button>
      </Stack>
  </PageTitleCard>
  )
}

export default UserDetail