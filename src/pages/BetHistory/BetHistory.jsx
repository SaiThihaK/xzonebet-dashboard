import React from 'react'
import PageTitleCard from "../../components/UI/PageTitleCard/PageTitleCard";
import classes from "./BetHistory.module.css"
import BetHistoryTable from './BetHistoryTable/BetHistoryTable';
import CustomGetFunction from "../../services/CustomGetFunction";
import CustomLoading from '../../components/CustomLoading/CustomLoading';
const BetHistory = () => {
const {data,loading} = CustomGetFunction("api/football-bettings",[]);

  return (
    <PageTitleCard title="Fixture-bet-history">
   <div className={classes["card-body"]}>
     {
       loading ?(
       <div>
        {
         data.map((data,index)=>(
           <BetHistoryTable key={index} data={data} />
         ))
       }
        </div>
        ):(<CustomLoading />)
     }
     
   
   </div>
    </PageTitleCard>
  )
}

export default BetHistory