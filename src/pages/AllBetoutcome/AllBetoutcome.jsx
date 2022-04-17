import React from 'react'
import AllBetTable from '../../components/AllBetTable/AllBetTable'
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard'
import classes from "./AllBetoutcome.module.css"
const AllBetoutcome = () => {
  return (
    <PageTitleCard title="All Bet Outcome">
        <div className={classes["card-body"]}>
        <AllBetTable />
        </div>
    </PageTitleCard>
  )
}

export default AllBetoutcome