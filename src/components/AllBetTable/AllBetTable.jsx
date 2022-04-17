import React,{useEffect, useState} from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { BasedColor } from "../../Controller/BasedColor";
import Paper from "@mui/material/Paper";
import classes from "./AllbetTable.module.css"
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
const AllBetTable= (props) => {
    const {income} = props;
  return (
    <div className={classes["table-margin"]}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell align="center">Date</StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">
                  {income ? "income":"outcome"}
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <StyledTableRow>
                <StyledTableCell align="left">
                  1
                </StyledTableCell>
                <StyledTableCell align="center">
                 22-3-2022 02:30:44  
                </StyledTableCell>
                <StyledTableCell align="center">
                  Man U vs LiverPool
                </StyledTableCell>
                <StyledTableCell align="center">
                  300
                </StyledTableCell>
                
        </StyledTableRow>
         
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllBetTable;