import React,{useEffect, useState} from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


import classes from "./MPayMentAccountTable.module.css";
import { Button } from "@mui/material";

const MPaymentAccountTable = () => {
  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#505B72",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const filterArr = [23,"HellFire","Yolo",23,45,"reiyrieuy"];
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
 
  return (
    <div className={classes["table-margin"]}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell align="left">Payment Provider</StyledTableCell>
              <StyledTableCell align="left">Logo</StyledTableCell>
              <StyledTableCell align="left">Phone</StyledTableCell>
              <StyledTableCell align="left">Owner</StyledTableCell>
              <StyledTableCell align="left">
                Action
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
              <StyledTableRow >
                <StyledTableCell align="left">
                 1
                </StyledTableCell>
                <StyledTableCell align="left">K-Pay</StyledTableCell>
                <StyledTableCell align="left">reerwrre</StyledTableCell>
                <StyledTableCell align="left">093473872</StyledTableCell>
                <StyledTableCell align="left">Hein Yan</StyledTableCell>
                <StyledTableCell align="left">
                    <Button variant="contained">Edit</Button>
                </StyledTableCell>
        </StyledTableRow>
           
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MPaymentAccountTable;