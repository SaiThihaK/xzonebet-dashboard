import React,{useEffect, useState} from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import classes from "./MAgentTable.module.css";
import { Button } from "@mui/material";
import { BasedColor } from "../../../../../Controller/BasedColor";

const MAgentTable = ({Id,name}) => {
    const [open, setOpen] = useState(false);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: BasedColor.tableHead,
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
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">{Id}</StyledTableCell>
              <StyledTableCell align="right">{name}</StyledTableCell>
              <StyledTableCell align="right">Deposite Ammount</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterArr.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {index+1}
                </StyledTableCell>
                <StyledTableCell align="right">{row[0]}</StyledTableCell>
                <StyledTableCell align="right">{row[1]}</StyledTableCell>
                <StyledTableCell align="right">{row[1]}</StyledTableCell>
                <StyledTableCell align="right">{row[2]}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button size="small" variant="contained" color="success">pending</Button>
                </StyledTableCell>
        </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MAgentTable;