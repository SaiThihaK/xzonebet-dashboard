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
import classes from "./UserListTable.module.css";
const UserListTable = ({allUsers}) => {
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

  // function createData(id, userid, name, email, phone, currency, action) {
  //   return {
  //     id,
  //     userid,
  //     name,
  //     email,
  //     phone,
  //     currency,
  //     action,
  //   };
  // }

  // const rows = [
  //   createData(
  //     1,
  //     15,
  //     "LION",
  //     "xyz@gmail.com",
  //     '555-555-5555',
  //     "MMK",
    
  //   ),
  // ];

    const rows = [{id:1,name:"Sai",email:"sai@gmail.com",balance:5435,country:"Myanmar",registeration_date:"22-3-2022",status:"Master",currency_type:"Crypto"}];

  let searchLists = [
    { label: "Master" },
    { label: "Agent" },
    { label: "User" },
  ];
  return (
    <div className={classes["table-container"]}>
      <div className={classes["search-header-flex"]}>
        <div className={classes.formGroup}>
          <Autocomplete
            size="small"
            disablePortal
            id="combo-box-demo"
            options={searchLists}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Search Name" />
            )}
          />
        </div>
        <div className={classes.formGroup}>
          <TextField
            sx={{ width: 300 }}
            size="small"
            id="outlined-basic"
            label="Search ID"
            variant="outlined"
          />
        </div>
      </div>
      <div className={classes["table-margin"]}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>No.</StyledTableCell>
                <StyledTableCell align="right">ID</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Email/Phone</StyledTableCell>
                <StyledTableCell align="right">Balance</StyledTableCell>
                <StyledTableCell align="right">Country</StyledTableCell>
                <StyledTableCell align="right">Registraion</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Currency_Type</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allUsers.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {index+1}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.id}</StyledTableCell>
                  <StyledTableCell align="right">{row.name}</StyledTableCell>
                  <StyledTableCell align="right">{row.email || row.phone}</StyledTableCell>
                  <StyledTableCell align="right">{row.balance}</StyledTableCell>
                  <StyledTableCell align="right">{row.country}</StyledTableCell>
                  <StyledTableCell align="right">{row.created_at}</StyledTableCell>
                  <StyledTableCell align="right">{row.type}</StyledTableCell>
                  <StyledTableCell align="right">{row.currency_type}</StyledTableCell>
                  <StyledTableCell align="right">
                  <Stack spacing={1} direction="row" sx={{justifyContent: 'flex-end'}}>
        <Button variant="contained">Detail</Button>
        <Button variant="outlined" color="error">Ban</Button>
        <Button variant="outlined" color="success">Unban</Button>
    </Stack></StyledTableCell>
       
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default UserListTable;
