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
import { DataGrid, selectedIdsLookupSelector } from "@mui/x-data-grid";


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
    renderCell:(params)=>ChangeDate(params.row.created_at)
     },
     {
      field: "transfer-amount",
      headerName: 'Transfer Amount',
      width: 150,
      headerAlign: 'center',
      editable: false,
      renderCell:(params)=><div  style={userData?.id === params.row.receiver_user.id ? {color:'green'}:{color:"red"}}>
      {userData?.id===params.row.receiver_user.id ? "+":"-"}{params.row.transfer_amount}
      </div>
       },
       {
        field: "from",
        headerName: 'From',
        width: 150,
        headerAlign: 'center',
        editable: false,
        renderCell:(params)=>params.row.sender_user.name
         },
         {
          field: "to",
          headerName: 'To',
          width: 150,
          headerAlign: 'center',
          editable: false,
          renderCell:(params)=>params.row.receiver_user.name
           },
           {
            field: "transition Name-note",
            headerName: 'Transition Name/Note',
            width: 300,
            headerAlign: 'center',
            editable: false,
            renderCell:(params)=>params.row.transaction_name || params.row.note
             },
  ]


  return (
    <>
    {
      loading ? (<div className={classes["table-margin"]}>
        
        {/* {
          data.length !==0 ? (<div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>No.</StyledTableCell>
                    <StyledTableCell align="right">Id</StyledTableCell>
                    <StyledTableCell align="right">Date</StyledTableCell>
                    <StyledTableCell align="right">Transfer Amount</StyledTableCell>
                    <StyledTableCell align="right">
                      From
                    </StyledTableCell>
                    <StyledTableCell align="right">To</StyledTableCell>
                    <StyledTableCell align="right">Transition Name / Note</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((row, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        {index+1}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.id}</StyledTableCell>
                      <StyledTableCell align="right">{ChangeDate(row.created_at)}</StyledTableCell>
                      <StyledTableCell align="right" 
                      style={userData?.id === row.receiver_user.id ? {color:'green'}:{color:"red"}}>
                        {userData?.id===row.receiver_user.id ? "+":"-"}{row.transfer_amount}
                        </StyledTableCell>
                      <StyledTableCell align="right">{row.sender_user.name}</StyledTableCell>
                     
                      <StyledTableCell align="right">{row.receiver_user.name}</StyledTableCell>
                      <StyledTableCell align="right">
                        {
                          row.transaction_name || row.note
                        }
                      </StyledTableCell>
              </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <CustomPagination totalPage={pagination?.meta?.last_page} setPage={setPage} />
            </div>):(<Nodata />)
        } */}
       
        {
        data.length !== 0 ? (<DataGrid columns={columns} rows={data} />) : (<Nodata />)
        }
   
    </div>):(<CustomLoading />)
    }
    </>
  );
};

export default TransitionHistoryTable;