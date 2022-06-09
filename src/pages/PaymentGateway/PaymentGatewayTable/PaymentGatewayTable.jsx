import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import classes from "./PaymentGatewayTable.module.css"
import Nodata from "../../../components/Nodata/Nodata"
import {Stack,Button} from "@mui/material"
const PaymentGatewayTable = ({data}) => {
  const columns = [
    {
      field: 'user id',
      headerName: 'User ID',
      width: 90,
      headerAlign: 'center',
      editable: true,
      renderCell:(param)=>param?.row?.user?.id
    },
    {
      field: 'user name',
      headerName: 'User Name',
      width: 150,
      headerAlign: 'center',
      editable: true,
      renderCell:(param)=>param?.row?.user?.name
    },
    {
      field: 'Account',
      headerName: 'Account',
      width: 150,
      headerAlign: 'center',
      editable: true,
      renderCell:(param)=>
      <div>
   <p>{param?.row.phone_or_acc}</p>
      </div>
    },
    {
      field: 'Agent Name',
      headerName: 'Agent Name',
      width: 150,
      headerAlign: 'center',
      editable: true,
      renderCell:(param)=>param?.row?.agent_user?.name
    },
    {
      field: 'Agent ID',
      headerName: 'Agent ID',
      width: 100,
      headerAlign: 'center',
      editable: true,
      renderCell:(param)=>param?.row?.agent_user?.id
    },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 150,
      headerAlign: 'center',
      renderCell:(param)=>param.row.amount
    },
    {
      field: 'user_action',
      headerName: 'User Action',
      width: 200,
      headerAlign: 'center',
      editable: true,
      renderCell:(param)=><p className={classes["btn"]} style={{backgroundColor:param.row.user_action==="Complete" ? "green" : "red"}}>
      {
        param.row.user_action
      }
      </p>
    },
    {
      field: 'agent_action',
      headerName: 'Agent Action',
      width: 200,
      headerAlign: 'center',
      editable: true,
      renderCell:(param)=><p className={classes["btn"]} style={{backgroundColor:param.row.agent_action==="Complete" ? "green" : "red"}}>
      {
        param.row.agent_action
      }
      </p>
    },
    {
      field: 'Action',
      headerName: 'Action',
      width: 300,
      headerAlign: 'center',
      editable: true,
      renderCell:(param)=><Stack direction="row" spacing={3}>
        <Button variant="outlined" size="small">Move to User</Button>
        <Button variant="outlined" size="small">Move to Agent</Button>
      </Stack>
    },
  ];
  return (
    <div className={classes["table"]}>
      {
        data.length !==0 ?( <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowHeight={45}
          hideFooter
        />):(<Nodata />)
      }
    
    </div>
  )
}

export default PaymentGatewayTable