import React, { useState } from "react";
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
import classes from "./PaymentAccountTable.module.css";
import { Avatar } from "@mui/material";
const PaymentAccountTable = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#505B72",
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

 

  // const rows = [
  //   createData(
  //     1,
  //     15,
  //     "LION",
  //     "xyz@gmail.com",
  //     '555-555-5555',
  //     "MMK",
  //     <Stack spacing={1} direction="row" sx={{justifyContent: 'flex-end'}}>
  //       <Button variant="contained">Edit</Button>
  //       <Button variant="contained" color="success">Confirm</Button>
  //   </Stack>
  //   ),
  // ];


  const Arr = [{id:"1",payment_type:"E-wallet",payment_provider:"Wave",provider_logo:"https://play-lh.googleusercontent.com/rPq4GMCZy12WhwTlanEu7RzxihYCgYevQHVHLNha1VcY5SU1uLKHMd060b4VEV1r-OQ",acc_num:"4322344fd",name:"Sai"}];
 
  return (
    <div className={classes["table-container"]}>
      <div className={classes["table-margin"]}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">No.</StyledTableCell>
                <StyledTableCell align="right">Payment Type</StyledTableCell>
                <StyledTableCell align="right">Payment Provider</StyledTableCell>
                <StyledTableCell align="right">Provider Logo</StyledTableCell>
                <StyledTableCell align="right">Account Number </StyledTableCell>
                <StyledTableCell align="right">Name </StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {rows.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.userid}</StyledTableCell>
                  <StyledTableCell align="right">{row.name}</StyledTableCell>
                  <StyledTableCell align="right">{row.email}</StyledTableCell>
                  <StyledTableCell align="right">{row.phone}</StyledTableCell>
                  <StyledTableCell align="right">{row.currency}</StyledTableCell>
                  <StyledTableCell align="right">{row.action}</StyledTableCell>
                </StyledTableRow>
              ))} */}
              {Arr.map((row,index)=>(
                   <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="right" >{row.payment_type}</StyledTableCell>
                  <StyledTableCell align="right" >{row.payment_provider}</StyledTableCell>
                  <StyledTableCell align="right" >
                      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <Avatar style={{display:"flex",justifyContent:"center"}} src={row.provider_logo} variant="square" alt=""/>
                      </div>
                      
                  </StyledTableCell>
                  <StyledTableCell align="right" >{row.acc_num}</StyledTableCell>
                  <StyledTableCell align="right" >{row.name}</StyledTableCell>
                  <StyledTableCell align="right">
                  <Stack spacing={1} direction="row" sx={{justifyContent: 'flex-end'}}>
                  <Button variant="contained">Edit</Button>
                   </Stack>
                  </StyledTableCell>
                  </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default PaymentAccountTable;
