import React from 'react'
import AllBetTable from '../../components/AllBetTable/AllBetTable'
import PageTitleCard from "../../components/UI/PageTitleCard/PageTitleCard"
import classes from "./Allbetincome.module.css"
const Allbetincome = () => {
  return (
    <PageTitleCard title="All Bet Income">
   <div className={classes["card-body"]}>
   <AllBetTable  income/>
   </div>
    </PageTitleCard>
  )
}

export default Allbetincome