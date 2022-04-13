import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BasedColor } from '../../../Controller/BasedColor';
import Card from "../../../components/UI/Card";
import classes from "./ProfitTable.module.css";


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



const ProfitTable = () => {
  return (
      <>
    <Card>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell align="left">Date</StyledTableCell>
            <StyledTableCell align="left">User Name</StyledTableCell>
            <StyledTableCell align="left">Time</StyledTableCell>
            <StyledTableCell align="left">
              Transition ID
            </StyledTableCell>
            <StyledTableCell align="left">Amount</StyledTableCell>
           
            
            <StyledTableCell align="left">Type</StyledTableCell>
            <StyledTableCell align="left">Payment Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
           
            
        </TableBody>
      </Table>
    </TableContainer>
    </Card>
    <span className={classes["total-unit"]}>
  <span>Total Unit- 3000</span>
    </span>
    </>
  )
}

export default ProfitTable