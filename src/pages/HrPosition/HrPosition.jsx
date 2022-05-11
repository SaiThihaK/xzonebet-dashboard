import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard';
import CustomGetFunction from '../../services/CustomGetFunction';
import PositionTable from '../AdminTeamAccount/Position/PositionTable/PositionTable';
import classes from "./HrPosition.module.css"
import CustomLoading from "../../components/CustomLoading/CustomLoading"
const HrPosition = () => {
    const navigate = useNavigate();
    const PositionData = [
        {name:"Provider"},
        {name:"Senior Account"},
        {name:"Junior Account"}
      ];
      const [render,setRender] = useState(false);
  const {data,loading} = CustomGetFunction("api/positions",[render]);
  console.log(data)
  
  return (
    <div>
        <PageTitleCard title="Position">
        <div className={classes["card-body"]}>
             <TextField size='small' sx={{width:600}}/>
         <div className={classes["create-btn"]}>
             <Button variant="contained"
             onClick={()=>navigate("/dashboard/admin-team-account/position/create-position")}
             >Create Position</Button>
         </div>
         </div>
         <div className={classes["table-margin"]}>
         {
          loading ?(<PositionTable position data={data} render={render} setRender={setRender} />):(<CustomLoading />)
        }
         </div>
        
          
        </PageTitleCard>
    </div>
  )
}

export default HrPosition;