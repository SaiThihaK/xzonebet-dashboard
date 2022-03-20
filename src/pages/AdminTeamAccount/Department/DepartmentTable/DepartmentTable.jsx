
import React from "react";

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
import classes from "./DepartmentTable.module.css";
import { BasedColor } from "../../../../Controller/BasedColor";


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
const DepartmentTable = () => {
  return (
    <div>
        <div className={classes["table-margin"]}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>No.</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Department Name</StyledTableCell>
                <StyledTableCell align="left">Position</StyledTableCell>
                <StyledTableCell align="left">Salary</StyledTableCell>
                <StyledTableCell align="left">Percentage</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="left">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
          
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    1
                  </StyledTableCell>
                  <StyledTableCell align="left">Roger</StyledTableCell>
                  <StyledTableCell align="left">HR Department</StyledTableCell>
                  <StyledTableCell align="left">Head Office</StyledTableCell>
                  <StyledTableCell align="left">1000USD</StyledTableCell>
                  <StyledTableCell align="left">-</StyledTableCell>
                  <StyledTableCell align="left">
                      <Button 
                      variant="contained" color="success"
                      size="small"
                      >Active</Button>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                  <Stack spacing={1} direction="row" >
        <Button variant="contained">Detail</Button>
        <Button variant="outlined" color="error">Ban</Button>
        <Button variant="outlined" color="success">Unban</Button>
    </Stack></StyledTableCell>
       
                </StyledTableRow>
        
            </TableBody>
          </Table>
        </TableContainer>
        </div>
    </div>
  )
}

export default DepartmentTable