import React from "react";
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
import { BasedColor } from "../../../Controller/BasedColor";
const UserListTable = ({allUsers}) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: BasedColor.tableHead,
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

   
// console.log(allUsers)
  let searchLists = [
    { label: "Master" },
    { label: "Agent" },
    { label: "User" },
  ];

const getResDate = (date)=>{
let d = new Date(date);
let ResDate = d.toISOString().split('T')[0];
return ResDate;
  }
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
                <StyledTableCell align="left">ID</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Email/Phone</StyledTableCell>
                <StyledTableCell align="left">Balance</StyledTableCell>
                <StyledTableCell align="left">Country</StyledTableCell>
                <StyledTableCell align="left">Registraion</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="left">Currency_Type</StyledTableCell>
                <StyledTableCell align="left">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allUsers?.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {index+1}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.id}</StyledTableCell>
                  <StyledTableCell align="left">{row.name}</StyledTableCell>
                  <StyledTableCell align="left">{row.email || row.phone}</StyledTableCell>
                  <StyledTableCell align="left">{row.balance}</StyledTableCell>
                  <StyledTableCell align="left">{row.country}</StyledTableCell>
                  <StyledTableCell align="left" spacing={1} direction="row">&nbsp;{getResDate(row.created_at)}</StyledTableCell>
                  <StyledTableCell align="left">{row.type}</StyledTableCell>
                  <StyledTableCell align="left">{row.currency_type}</StyledTableCell>
                  <StyledTableCell align="left">
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
