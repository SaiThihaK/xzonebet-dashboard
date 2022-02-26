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
const UserListTable = () => {
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

  function createData(id, userid, name, email, phone, currency, action) {
    return {
      id,
      userid,
      name,
      email,
      phone,
      currency,
      action,
    };
  }

  const rows = [
    createData(
      1,
      15,
      "LION",
      "xyz@gmail.com",
      '555-555-5555',
      "MMK",
      <Stack spacing={1} direction="row" sx={{justifyContent: 'flex-end'}}>
        <Button variant="contained">Detail</Button>
        <Button variant="outlined" color="error">Ban</Button>
        <Button variant="outlined" color="success">Unban</Button>
    </Stack>
    ),
  ];

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
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Phone</StyledTableCell>
                <StyledTableCell align="right">Currency</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
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
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default UserListTable;
