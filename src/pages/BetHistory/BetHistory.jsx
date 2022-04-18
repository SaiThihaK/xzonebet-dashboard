import React from 'react'
import PageTitleCard from "../../components/UI/PageTitleCard/PageTitleCard";
import classes from "./BetHistory.module.css"
import BetHistoryTable from './BetHistoryTable/BetHistoryTable';
import CustomGetFunction from "../../services/CustomGetFunction"
const BetHistory = () => {
const {data} = CustomGetFunction("api/football-bettings",[]);

  return (
    <PageTitleCard title="Fixture-bet-history">
   <div className={classes["card-body"]}>
   {
     data.map((data,index)=>(
       <BetHistoryTable key={index} data={data} />
     ))
   }
   </div>
    </PageTitleCard>
  )
}

export default BetHistory