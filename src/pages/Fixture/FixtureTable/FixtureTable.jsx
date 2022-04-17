import React, { useState } from "react";
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
import NewbetModal from "../../../components/UI/Modal/Newbet/NewbetModal";
import { ChangeDate } from "../../../Controller/ChangeDate";

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
const FixtureTable = ({ bettingData }) => {
  console.log(bettingData);

  const [id, setId] = useState("");
  const [open, setOpen] = useState(false);
  const openHandler = (id) => {
    setOpen(true);
    setId(id);
  };

  const closeHandler = () => setOpen(false);
  return (
    <div className={classes["table-margin"]}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              {/* <StyledTableCell align="right">Time</StyledTableCell> */}
              <StyledTableCell align="right">Country</StyledTableCell>
              <StyledTableCell align="right">League</StyledTableCell>
              <StyledTableCell align="right">Team 1</StyledTableCell>
              <StyledTableCell align="right">Team 2</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bettingData.map((el, key) => {
              return (
                <StyledTableRow key={key}>
                  <StyledTableCell align="right">{key + 1}</StyledTableCell>
                  <StyledTableCell align="right">
                    {ChangeDate(el?.fixture?.date)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {el?.league?.country}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {el?.league?.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {el?.teams?.home?.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {el?.teams?.away?.name}
                  </StyledTableCell>
                  <StyledTableCell align="right" sx={{ width: "200px" }}>
                    <Button
                      onClick={() => {
                        openHandler(key);
                      }}
                      variant="contained"
                    >
                      New Bet
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
            {/* <StyledTableCell align="right">eeew</StyledTableCell>
                <StyledTableCell align="right">eee</StyledTableCell>
                <StyledTableCell align="right">eee</StyledTableCell>
                <StyledTableCell align="right">www</StyledTableCell>
                <StyledTableCell align="right">
                 <Button onClick={openHandler} variant="contained">New Bet</Button>
                </StyledTableCell> */}
          </TableBody>
        </Table>
      </TableContainer>
      <NewbetModal
        open={open}
        bettingData={bettingData[id]}
        closeHandler={closeHandler}
      />
      {/* <CustomPagination totalPage={pagination?.meta?.last_page} setPage={setPage} /> */}
    </div>
  );
};

export default FixtureTable;
