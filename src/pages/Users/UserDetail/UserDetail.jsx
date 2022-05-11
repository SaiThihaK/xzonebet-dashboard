import { Button, Stack } from '@mui/material'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageTitleCard from '../../../components/UI/PageTitleCard/PageTitleCard'
import SuperMasterDesc from '../../SuperMaster/SuperMasterCard/SuperMasterDetail/SuperMasterDesc/SuperMasterDesc'
import classes from   "./UserDetail.module.css";

import CustomGetFunction from '../../../services/CustomGetFunction'
const UserDetail = () => {
 const navigate = useNavigate();
 const {id} = useParams();
 console.log(id);
 const {data,loading} = CustomGetFunction(`api/users/${id}`,[id]);
 console.log(data);
  return (
  <PageTitleCard title="User Detail">
      <div className={classes["card-body"]}>
      <SuperMasterDesc master agent userInfo={data} />
      </div>
      <Stack direction="row" 
      style={{display:"flex",justifyContent:"center",paddingBottom:20}}
      spacing={6}
      >
    <Button variant="contained">Bet History</Button>
    <Button variant="contained" onClick={()=>{navigate("/dashboard/deposite-withdraw-table")}}>Deposite/WithDraw</Button>
      </Stack>
  </PageTitleCard>
  )
}

export default UserDetail