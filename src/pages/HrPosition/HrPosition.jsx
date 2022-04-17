import { Button, TextField } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard';
import CustomGetFunction from '../../services/CustomGetFunction';
import PositionTable from '../AdminTeamAccount/Position/PositionTable/PositionTable';
import classes from "./HrPosition.module.css"
const HrPosition = () => {
    const navigate = useNavigate();
    const PositionData = [
        {name:"Provider"},
        {name:"Senior Account"},
        {name:"Junior Account"}
      ]
  const {data} = CustomGetFunction("api/positions",[]);
  console.log(data)
  return (
    <div>
        <PageTitleCard title="Position">
        <div className={classes["card-body"]}>
             <TextField size='small' sx={{width:600}}/>
         <div className={classes["create-btn"]}>
             <Button variant="contained"
             onClick={()=>navigate("/admin-team-account/position/create-position")}
             >Create Department</Button>
         </div>
         </div>

          <PositionTable position data={data}  />
        </PageTitleCard>
    </div>
  )
}

export default HrPosition;