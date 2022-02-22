import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import TwodThreedTimeEdit from "../../../components/UI/Modal/TwodThreedTimeEdit/TwodThreedTimeEdit";
import classes from "./ThreedTimeTable.module.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#505B72',
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

function createData(
  openingtime,
  closingtime,
  action
) {
  return {
    openingtime,
    closingtime,
    action
  };
}

const ThreedTimeTable = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const rows = [
    createData(
      "17-02-2022, 12:00 PM",
      "16-02-2022, 10:53 PM",
      <Button variant="contained" onClick={handleOpen} color="primary">Edit</Button>
    )
  ];
  return (
    <div className={classes["table-margin"]}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Disable&nbsp;Date/ Time</StyledTableCell>
              <StyledTableCell align="left">Updated&nbsp;Date</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row,index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.openingtime}
                </StyledTableCell>
                <StyledTableCell align="left">{row.closingtime}</StyledTableCell>
                <StyledTableCell align="left">{row.action}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TwodThreedTimeEdit open={open} handleClose={handleClose} />
      
    </div>
  );
};

export default ThreedTimeTable;
