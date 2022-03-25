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
const [unitTableData,setUnitTableData] = useState([]);

const fetchUnit = async()=>{
    try{
      const response =await axios.request((getMethod("api/wallet/admin-create-record?sortColumn=id&sortDirection=desc&limit=10")));
      console.log(response);
      setUnitTableData(response.data.data);
    }catch(error){
      console.log(error);
      if(error.response.statusText ==="error"){
        AlertToast(toast.error(error.response.data.message))
        return;
      }
    if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
            logoutHandler();
            return;
            }
          }
  }

  useEffect(()=>{
    fetchUnit();

  },[render])
 
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
            {unitTableData.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {index+1}
                </StyledTableCell>
                <StyledTableCell align="right">--</StyledTableCell>
                <StyledTableCell align="right">--</StyledTableCell>
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