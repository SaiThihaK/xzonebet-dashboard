import React from 'react'
import classes from "./BalanceSheet.module.css"
import PageTitleCard from "../../components/UI/PageTitleCard/PageTitleCard"
import { DataGrid } from '@mui/x-data-grid'
const BalanceSheet = () => {
const columns = [
    { field: 'date', headerName: "Date", width: 200, headerAlign: 'center', },
    {
      field: 'title',
      headerName: 'Title',
      width: 200,
      editable: true,
      headerAlign: 'center',
    },
    {
        field: 'In',
        headerName: 'In',
        width: 200,
        editable: true,
        headerAlign: 'center',
    },
    {
        field: 'out',
        headerName: 'Out',
        width: 200,
        editable: true,
        headerAlign: 'center',
      },
]


    
  return (
  <PageTitleCard title="Balance Sheet">
      <div className={classes["card-body"]}>
      <div className={classes["table-margin"]}>
   <DataGrid columns={columns}      disableSelectionOnClick />
    </div>
      </div>
  </PageTitleCard>
  )
}

export default BalanceSheet