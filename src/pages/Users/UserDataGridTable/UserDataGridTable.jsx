import React from 'react'
import classes from "./UserDataGridTable.module.css"
import Nodata from "../../../components/Nodata/Nodata"
import { DataGrid } from '@mui/x-data-grid'
import {ChangeDate, getResDate} from "../../../Controller/ChangeDate"
import { Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const UserDataGridTable = ({data}) => {
  const navigate = useNavigate();
  console.log("data",data);
 const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90,
    headerAlign: 'center',
    editable: true,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 200,
    headerAlign: 'center',
    editable: true,
  },
  {
    field: 'address',
    headerName: 'Email/Phone',
    width: 200,
    headerAlign: 'center',
    editable: true,
    renderCell:(param)=>param.row.email || param.row.phone
  },
  {
    field: 'balance',
    headerName: 'Balance',
    width: 200,
    headerAlign: 'center',
    editable: true,
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 200,
    headerAlign: 'center',
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Registeration',
    width: 200,
    headerAlign: 'center',
    editable: true,
    renderCell:(param)=>ChangeDate(param.row.created_at)
  },
  {
    field: 'type',
    headerName: 'Status',
    width: 150,
    headerAlign: 'center',
    editable: true,
  },
  {
    field: 'currency_type',
    headerName: 'Currency Type',
    width: 150,
    headerAlign: 'center',
    editable: true,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 300,
    headerAlign: 'center',
    editable: true,
    renderCell:(params)=><Stack spacing={1} direction="row" sx={{justifyContent: 'flex-end'}}>
    <Button variant="contained" onClick={()=>{navigate(`/dashboard/account/user/user-detail/${params.row.id}`)}}>Detail</Button>
    <Button variant="outlined" color="error">Ban</Button>
    <Button variant="outlined" color="success">Unban</Button>
    </Stack>
  },
 ]
  return (
    <div style={{width:"100%",height:"70vh"}}>
    {
      data.length !==0 ? (<DataGrid columns={columns} rows={data} />) : (<Nodata />)
    }
    </div>
  )
}

export default UserDataGridTable