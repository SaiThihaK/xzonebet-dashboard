import React,{useEffect, useState} from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import classes from "./TransitionHistoryTable.module.css";
import { BasedColor } from "../../../../../Controller/BasedColor";
import axios from "axios";
import { getMethod } from "../../../../../services/api-services";
import { logoutHandler } from "../../../../../components/Sidebar/Sidebar";
import CustomGetFunction from "../../../../../services/CustomGetFunction";
import { ChangeDate, getResDate } from "../../../../../Controller/ChangeDate";
import CustomLoading from "../../../../../components/CustomLoading/CustomLoading";
import Nodata from "../../../../../components/Nodata/Nodata";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:BasedColor.tableHead,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const TransitionHistoryTable = () => {
    const [page,setPage] = React.useState(1);
    const [transferData,setTransferData] = React.useState([]);
    const [userData,setUserData] = React.useState([]);
   const {data,loading} = CustomGetFunction(`api/wallet/transfer-record?sortColumn=id&sortDirection=desc&limit=10&page=${page}`,[page])
  const fetchUnit = async()=>{
    try{
      const response = await axios.request(getMethod("api/get-login-user"));
      console.log(response)
      if(response.data.status === "success"){
         setUserData(response.data.data);
         return;
      }
      
    }catch(error){
      console.log(error.response.data.message)
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated."){
        logoutHandler
        ();
      }
    }

  }
  useEffect(()=>{
    fetchUnit();
    return ()=>{
      setTransferData([])
    }
  },[page])
  
  const columns = [
    { title: '#', field: 'tableData.id', render:rowData => { return( <p>{rowData.tableData.id+1}</p> ) } },
    {
  field: "id",
  headerName: 'ID',
  width: 100,
  headerAlign: 'center',
  editable: false,
   },
   {
    field: "date",
    headerName: 'Date',
    width: 200,
    headerAlign: 'center',
    editable: false,
    valueGetter:(params)=>params.row.readable_date,
    renderCell:(params)=> ChangeDate(params.row.created_at)
     },
     {
      field: "transfer-amount",
      headerName: 'Transfer Amount',
      width: 150,
      headerAlign: 'center',
      editable: false,
      valueGetter:(params)=>  `${userData?.id===params.row.receiver_user.id ? "+":"-"} ${params.row.transfer_amount} `,
        renderCell:(params)=> { return( <div  style={userData?.id === params.row.receiver_user.id ? {color:'green'}:{color:"red"}}>
          {userData?.id===params.row.receiver_user.id ? "+":"-"}{params.row.transfer_amount}       </div> ) }

       },
       {
        field: "from",
        headerName: 'From',
        width: 150,
        headerAlign: 'center',
        editable: false,
        valueGetter:(params)=>params.row.sender_user.name
         },
         {
          field: "to",
          headerName: 'To',
          width: 150,
          headerAlign: 'center',
          editable: false,
          valueGetter:(params)=>params.row.receiver_user.name
           },
           {
            field: "transition Name-note",
            headerName: 'Transition Name/Note',
            width: 250,
            headerAlign: 'center',
            editable: false,
            valueGetter:(params)=>params.row.transaction_name || params.row.note
             },
  ]

  return (
    <>
    {
      loading ? (<div className={classes["table-margin"]}>
        
       
       
        {
        data.length !== 0 ? (<DataGrid columns={columns} rows={data}  components={{ Toolbar: GridToolbar }} hideFooter />) : (<Nodata />)
        }
   
    </div>):(<CustomLoading />)
    }
    </>
  );
};

export default TransitionHistoryTable;