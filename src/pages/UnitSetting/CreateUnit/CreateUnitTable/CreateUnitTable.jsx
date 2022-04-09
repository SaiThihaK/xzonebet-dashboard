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

import classes from "./CreateUnitTable.module.css";
import { BasedColor } from "../../../../Controller/BasedColor";
import { getMethod } from "../../../../services/api-services";
import {toast} from "react-toastify";
import { logoutHandler } from "../../../../components/Sidebar/Sidebar";
import axios from "axios";
import { ChangeDate, getResDate } from "../../../../Controller/ChangeDate";
import CustomGetFunction from "../../../../services/CustomGetFunction";
import TableGetFunction from "../../../../services/TableGetFunction";

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

const CreateUnitTable = ({render}) => {

const AlertToast = (toast,msg) => toast(msg);

const {data}  = TableGetFunction('api/wallet/admin-create-record?sortColumn=id&sortDirection=desc&limit=10',[render]);

  return (
    <div className={classes["table-margin"]}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">User Id</StyledTableCell>
              <StyledTableCell align="right">User Name</StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {index+1}
                </StyledTableCell>
                <StyledTableCell align="right">{getResDate(row.created_at)}</StyledTableCell>
                <StyledTableCell align="right">{row.user_id}</StyledTableCell>
                <StyledTableCell align="right">--</StyledTableCell>

                <StyledTableCell align="right">{row.amount}</StyledTableCell>
          
        </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CreateUnitTable;