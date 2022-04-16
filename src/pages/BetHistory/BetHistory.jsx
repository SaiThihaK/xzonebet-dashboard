import React from 'react'
import PageTitleCard from "../../components/UI/PageTitleCard/PageTitleCard";
import classes from "./BetHistory.module.css"
import BetHistoryTable from './BetHistoryTable/BetHistoryTable';
const BetHistory = () => {
  return (
    <PageTitleCard title="Fixture-bet-history">
   <div className={classes["card-body"]}>
  <BetHistoryTable />
  <BetHistoryTable />
  <BetHistoryTable />
   </div>
    </PageTitleCard>
  )
}

export default BetHistory