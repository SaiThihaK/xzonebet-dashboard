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
import FootballDetail from "../../../../components/UI/Modal/FootballDetail/FootballDetail";
import classes from "./TableData.module.css";

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
  id,
  userid,
  username,
  bettingamount,
  bettingstatus,
  btype,
  winAmount,
  betdetail,
  betwin,
  bodymaung
) {
  return {
    id,
    userid,
    username,
    bettingamount,
    bettingstatus,
    btype,
    winAmount,
    betdetail,
    betwin,
    bodymaung
  };
}

const rows = [
  createData(
    1,
    15,
    "heinpyae",
    24,
    "success",
    "Goal Over",
    10000,
    "Detail",
    "Bet Winner",
    "Maung"
  ),
  createData(
    1,
    15,
    "heinpyae",
    24,
    "success",
    "Goal Over",
    10000,
    "Detail",
    "Bet Winner",
    "Maung"
  ),
  createData(
    1,
    15,
    "heinpyae",
    24,
    "success",
    "Goal Over",
    10000,
    "Detail",
    "Bet Winner",
    "Maung"
  ),
  createData(
    1,
    15,
    "heinpyae",
    24,
    "success",
    "Goal Over",
    10000,
    "Detail",
    "Winner",
    "Maung"
  ),
  createData(
    1,
    15,
    "heinpyae",
    24,
    "success",
    "Goal Over",
    10000,
    "Detail",
    "Bet Winner",
    "Maung"
  ),
];

const TableData = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={classes["table-margin"]}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell align="right">User&nbsp;ID</StyledTableCell>
              <StyledTableCell align="right">User&nbsp;Name</StyledTableCell>
              <StyledTableCell align="right">
                Betting&nbsp;Amount
              </StyledTableCell>
              <StyledTableCell align="right">
                Betting&nbsp;Status
              </StyledTableCell>
              <StyledTableCell align="right">Betting&nbsp;Type</StyledTableCell>
              <StyledTableCell align="right">
                Winner&nbsp;Amount
              </StyledTableCell>
              <StyledTableCell align="right">
                Betting&nbsp;Detail
              </StyledTableCell>
              <StyledTableCell align="right">Bet&nbsp;Winner</StyledTableCell>
              <StyledTableCell align="right">Body&#47;&nbsp;Maung</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row,index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.userid}</StyledTableCell>
                <StyledTableCell align="right">{row.username}</StyledTableCell>
                <StyledTableCell align="right">{row.bettingamount}</StyledTableCell>
                <StyledTableCell align="right">
                     <span style={{backgroundColor: '#28a745',borderRadius: '5px',color:'#FFF',padding: '2px 10px'}}>{row.bettingstatus}</span>
                </StyledTableCell>
                <StyledTableCell align="right">{row.btype}</StyledTableCell>
                <StyledTableCell align="right">{row.winAmount}</StyledTableCell>
                <StyledTableCell align="right">
                   <Button variant="contained" size="small" onClick={handleOpen}>{row.betdetail}</Button>
                </StyledTableCell>
                <StyledTableCell align="right">{row.betwin}</StyledTableCell>
                <StyledTableCell align="right">{row.bodymaung}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <FootballDetail handleClose={handleClose} open={open} />
    </div>
  );
};

export default TableData;
