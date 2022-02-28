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
import Button from "@mui/material/Button";
import MasterDepositCancel from '../../../components/UI/Modal/MasterDepositCancel/MasterDepositCancel';
import classes from "./MasterDepositTable.module.css";
import axios from "axios";
const MasterDepositTable = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [rowData,setRowData] = useState([]);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#505B72",
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
  const fetchData = async()=>{
    const {data} = await axios.get("https://lapi.xzonebet.com/api/affiliate-register-lists-detail?sortColumn=id&sortDirection=desc&limit=3&status=deposit-pending");
    
    setRowData(data.data)
  }

  useEffect(()=>{
    fetchData();
  },[])
  function createData(
    id,
    userid,
    name,
    banktype,
    bankname,
    transitionid,
    amount,
    action
  ) {
    return {
      id,
      userid,
      name,
      banktype,
      bankname,
      transitionid,
      amount,
      action,
    };
  }
  
  const rows = [
    createData(
      1,
      15,
      "LION",
      "KBZ",
      "KBZ",    
      12,
      1000000,
      <Stack spacing={1} direction="row" sx={{display:'block'}}>
        <Button variant="contained" color="success" size="small">Confirm</Button>
        <Button variant="outlined" onClick={handleOpen} color="error" size="small">Reject</Button>
      </Stack>
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
              <StyledTableCell align="right">Payment&nbsp;Type</StyledTableCell>
              <StyledTableCell align="right">Payment&nbsp;Name</StyledTableCell>
              <StyledTableCell align="right">
                Transition&nbsp;ID
              </StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
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
                <StyledTableCell align="right">{row.banktype}</StyledTableCell>
                <StyledTableCell align="right">{row.bankname}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.transitionid}
                </StyledTableCell>
                <StyledTableCell align="right">{row.amount}</StyledTableCell>
                <StyledTableCell align="right">{row.action}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <MasterDepositCancel open={open} handleClose={handleClose}/>
      </TableContainer>
    </div>
  );
};

export default MasterDepositTable;
