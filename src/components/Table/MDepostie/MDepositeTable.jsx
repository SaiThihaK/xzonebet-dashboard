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

import classes from "./MDepositeTable.module.css";
import { Button, FormControl, MenuItem, Select } from "@mui/material";

const MDepositeTable = () => { 
   const [toggle,setToggle] = useState(false);
   const handleOpen = ()=>setToggle(true);
   const handleClose = ()=>setToggle(false);
   const [value,setValue] = useState("");


   const onChangeValue = (e)=>setValue(e.target.value);
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
 
  return (
    <div className={classes["table-margin"]}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No</StyledTableCell>
              <StyledTableCell align="left">Agent-ID</StyledTableCell>
              <StyledTableCell align="left">Agent Name</StyledTableCell>
              <StyledTableCell align="left">Payment Provider</StyledTableCell>
              <StyledTableCell align="left">Amount</StyledTableCell>
              <StyledTableCell align="left">Phone/Account</StyledTableCell>
              <StyledTableCell align="left">
                Transition ID
              </StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="left">Payment Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           
              <StyledTableRow >
                <StyledTableCell component="th" scope="row">
                1
                </StyledTableCell>
                <StyledTableCell align="left">1003</StyledTableCell>
                <StyledTableCell align="left">Wai Yan</StyledTableCell>
                <StyledTableCell align="left">K-pay</StyledTableCell>
                <StyledTableCell align="left">30000</StyledTableCell>
                <StyledTableCell align="left">093468326</StyledTableCell>
                <StyledTableCell align="left">
                345353536
                </StyledTableCell>
                <StyledTableCell align="left">
  
                 {!toggle &&   <Button onClick={handleOpen}   size="small" color="success" variant="contained">Pending</Button>}
                 {
                     toggle && 
                     <FormControl style={{display:"flex",flexDirection:"column"}}>
                     <Select value={value} onChange={onChangeValue} size="small">
                         <MenuItem value="pending">Pending</MenuItem>
                         <MenuItem value="approve">Approve</MenuItem>
                         <MenuItem value="reject">Reject</MenuItem>
                     </Select>
                     <Button onClick={handleClose}>Confirm</Button>
                     </FormControl>
                 }
               
                </StyledTableCell>
                <StyledTableCell align="left">
                 22-3-2022
                </StyledTableCell>
        </StyledTableRow>
        {/* --------------------------------------------------Test */}
        <StyledTableRow >
                <StyledTableCell component="th" scope="row">
                1
                </StyledTableCell>
                <StyledTableCell align="left">1003</StyledTableCell>
                <StyledTableCell align="left">Wai Yan</StyledTableCell>
                <StyledTableCell align="left">K-pay</StyledTableCell>
                <StyledTableCell align="left">30000</StyledTableCell>
                <StyledTableCell align="left">093468326</StyledTableCell>
                <StyledTableCell align="left">
                345353536
                </StyledTableCell>
                <StyledTableCell align="left">
  
                 {!toggle &&   <Button onClick={handleOpen}   size="small" color="success" variant="contained">Pending</Button>}
                 {
                     toggle && 
                     <FormControl style={{display:"flex",flexDirection:"column"}}>
                     <Select value={value} onChange={onChangeValue} size="small">
                         <MenuItem value="pending">Pending</MenuItem>
                         <MenuItem value="approve">Approve</MenuItem>
                         <MenuItem value="reject">Reject</MenuItem>
                     </Select>
                     <Button onClick={handleClose}>Confirm</Button>
                     </FormControl>
                 }
               
                </StyledTableCell>
                <StyledTableCell align="left">
                 22-3-2022
                </StyledTableCell>
        </StyledTableRow>


          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MDepositeTable;