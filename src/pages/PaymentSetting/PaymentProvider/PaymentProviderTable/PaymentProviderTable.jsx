import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import classes from "./PaymentProviderTable.module.css";
import { Avatar, IconButton } from "@mui/material";
import axios from "axios"
import {getMethod} from "../../../../services/api-services"
import { logoutHandler } from "../../../../components/Sidebar/Sidebar";
import { BasedColor } from "../../../../Controller/BasedColor";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PaymentType } from "../../../../features/PaymentSetting";
import CustomGetFunction from "../../../../services/CustomGetFunction";
import Nodata from "../../../../components/Nodata/Nodata";
import { Delete, Edit } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
const PaymentProviderTable = ({data}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const columns = [
    {
      field: "id",
      headerName: 'Provider ID',
      width: 100,
      headerAlign: 'center',
      editable: false,
    },
    {
      field: "payment_type",
      headerName: 'Payment Type',
      width: 200,
      headerAlign: 'center',
      editable: false,
    },
    {
      field: "name",
      headerName: 'Payment Provider',
      width: 200,
      headerAlign: 'center',
      editable: false,
    },
    {
      field: "logo",
      headerName: 'Logo',
      width: 150,
      headerAlign: 'center',
      editable: false,
      renderCell:(params)=> <div className={classes["logo-container"]}>
                     <Avatar className={classes['logo']} src={params.row.logo} variant="square" alt=""/>
                    </div>
    },
    {
      field: "action",
      headerName: 'Action',
      width: 150,
      headerAlign: 'center',
      editable: false,
      renderCell:(params)=>  <Stack spacing={1} direction="row" sx={{justifyContent: 'flex-end'}}>
              <IconButton onClick={()=>{
                   navigate(`/dashboard/payment-setting/payment-provider/edit/${params.row.id}`)
                   dispatch(PaymentType(params.row.payment_type))
                 }}>
                 <Edit />
                 </IconButton>
                 {/* <IconButton>
                   <Delete />
                 </IconButton> */}
                  </Stack>
    },
  ]
 console.log("data",data);
  return (
    <div className={classes["table-container"]}>
      <div className={classes["table-margin"]}>
        {
          data?.length !==0 ?( 
          // <TableContainer component={Paper}>
          //   <Table sx={{ minWidth: 700 }} aria-label="customized table">
          //     <TableHead>
          //       <TableRow>
          //         <StyledTableCell align="left">No.</StyledTableCell>
          //         <StyledTableCell align="center">Payment Type</StyledTableCell>
          //         <StyledTableCell align="center">Payment Provider</StyledTableCell>
          //         <StyledTableCell align="center">Provider Logo</StyledTableCell>
          //         <StyledTableCell align="right">Action</StyledTableCell>
          //       </TableRow>
          //     </TableHead>
          //     <TableBody>
          //       {data?.map((row,index)=>(
          //            <StyledTableRow key={index}>
          //             <StyledTableCell component="th" scope="row">
          //             {row.id}
          //           </StyledTableCell>
          //           <StyledTableCell align="center" >{row.payment_type}</StyledTableCell>
          //           <StyledTableCell align="center" >{row.name}</StyledTableCell>
          //           <StyledTableCell align="center" >
          //               <div className={classes["logo-container"]}>
          //               <Avatar className={classes['logo']} src={row.logo} variant="square" alt=""/>
          //               </div>
                        
          //           </StyledTableCell>
          //           <StyledTableCell align="right">
          //           <Stack spacing={1} direction="row" sx={{justifyContent: 'flex-end'}}>
          //           <IconButton onClick={()=>{
          //             navigate(`/payment-setting/payment-provider/edit/${row.id}`)
          //             dispatch(PaymentType(row.payment_type))
          //           }}>
          //           <Edit />
          //           </IconButton>
          //           <IconButton>
          //             <Delete />
          //           </IconButton>
          //            </Stack>
          //           </StyledTableCell>
          //           </StyledTableRow>
          //       ))}
          //     </TableBody>
          //   </Table>
          // </TableContainer>
          <div className={classes["margin-table"]}>
           <DataGrid rows={data} columns={columns} />
          </div>
          ):(<Nodata />)
        }
       
      </div>
    </div>
  );
};

export default PaymentProviderTable;
