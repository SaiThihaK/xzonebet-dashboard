import React,{useEffect, useState} from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import classes from "./FixtureTable.module.css";
import { BasedColor } from "../../../Controller/BasedColor";
import { Button } from "@mui/material";



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
const FixtureTable = () => {

  return (
    <div className={classes["table-margin"]}>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Time</StyledTableCell>
              <StyledTableCell align="right" style={{width:300}}>Team 1</StyledTableCell>
              <StyledTableCell align="right" style={{width:300}}>Team 2</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
        
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
              
                </StyledTableCell>
                <StyledTableCell align="right">eeew</StyledTableCell>
                <StyledTableCell align="right">eee</StyledTableCell>
        
                <StyledTableCell align="right">eee</StyledTableCell>
               
                <StyledTableCell align="right">www</StyledTableCell>
                <StyledTableCell align="right">
                 <Button variant="contained">New Bet</Button>
                </StyledTableCell>
        </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* <CustomPagination totalPage={pagination?.meta?.last_page} setPage={setPage} /> */}
    </div>
  );
};

export default FixtureTable;