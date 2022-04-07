import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
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
import classes from "./PaymentTypeTable.module.css";
import EditPaymentModal from "../../../../components/UI/Modal/PaymentSetting/PaymentType/EditPaymentTypeModal";
import { BasedColor } from "../../../../Controller/BasedColor";
const PaymentTypeTable = ({payment_type,num,setNum}) => {
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

 


const [open, SetOpen] = useState(false);

const [typeId,setTypeId] = useState("");
const handleOpen = ()=>SetOpen(true);
const handleClose = ()=>SetOpen(false);
 useEffect(()=>{

 },[num]);
  return (
    <div className={classes["table-container"]}>
      <div className={classes["table-margin"]}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">No.</StyledTableCell>
                <StyledTableCell align="left">Payment Type</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
             
              {payment_type?.map((row,index)=>(
                   <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>

                  <StyledTableCell align="left" >{row.name}</StyledTableCell>
                  <StyledTableCell align="right">
                  <Stack spacing={1} direction="row" sx={{justifyContent: 'flex-end'}}>
                  <Button variant="contained" onClick={()=>{handleOpen();setTypeId(row.id)}}>Edit</Button>
                   </Stack>
                  </StyledTableCell>
                  </StyledTableRow>
                                  
              ))}
            </TableBody>
          
          </Table>
        </TableContainer>
        <EditPaymentModal open={open} handleClose={handleClose} num={num} setNum={setNum} id={typeId} />
      </div>
    </div>
  );
};

export default PaymentTypeTable;
