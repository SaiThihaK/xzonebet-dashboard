import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ToggleBtn from "../../../../../../../components/UI/ToggleBtn/ToggleBtn";
import classes from "./SuperMasterTableList.module.css";
import { BasedColor } from "../../../../../../../Controller/BasedColor";
const SuperMasterTableList = () => {
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

  function createData(id, userid, name, agentlevel, detail, status) {
    return {
      id,
      userid,
      name,
      agentlevel,
      detail,
      status,
    };
  }

  const rows = [
    createData(
      1,
      15,
      "LION",
      "Master",
      <Button variant="contained" size="small">Detail</Button>,
      <ToggleBtn />
    ),
    createData(
      1,
      15,
      "LION",
      "Master",
      <Button variant="contained" size="small">Detail</Button>,
      <ToggleBtn />
    ),
    createData(
      1,
      15,
      "LION",
      "Master",
      <Button variant="contained" size="small">Detail</Button>,
      <ToggleBtn />
    ),
    createData(
      1,
      15,
      "LION",
      "Master",
      <Button variant="contained" size="small">Detail</Button>,
      <ToggleBtn />
    ),
    createData(
      1,
      15,
      "LION",
      "Master",
      <Button variant="contained" size="small">Detail</Button>,
      <ToggleBtn />
    ),
  ];

  return (
    <div className={classes["table-margin"]}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell align="right">ID</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Agent&nbsp;Level</StyledTableCell>
              <StyledTableCell align="right">Detail</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.userid}</StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.agentlevel}
                </StyledTableCell>
                <StyledTableCell align="right">{row.detail}</StyledTableCell>
                <StyledTableCell align="right">{row.status}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SuperMasterTableList;
