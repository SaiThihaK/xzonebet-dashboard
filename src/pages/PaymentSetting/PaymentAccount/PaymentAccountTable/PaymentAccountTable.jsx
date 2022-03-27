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
import classes from "./PaymentAccountTable.module.css";
import { Avatar } from "@mui/material";
import { BasedColor } from "../../../../Controller/BasedColor";
import axios from "axios";
import { getMethod } from "../../../../services/api-services";
import { useNavigate } from "react-router-dom";
const PaymentAccountTable = ({num}) => {
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

 
  const navigate = useNavigate();
  const [paymentAccount_table,setPaymentAccountTable] = useState([]);


  const fetch_PaymentAccount = async()=>{
    const response = await axios.request(getMethod(`api/dashboard/payment-accounts`));
    // console.log(response.data.data);
    setPaymentAccountTable(response.data.data);
  }


  useEffect(()=>{
  fetch_PaymentAccount();
  return ()=>setPaymentAccountTable([]);
  },[num]);

  // console.log(paymentAccount_table);
 
  return (
    <div className={classes["table-container"]}>
      <div className={classes["table-margin"]}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">No.</StyledTableCell>
                <StyledTableCell align="right">Payment Type</StyledTableCell>
                <StyledTableCell align="right">Payment Provider</StyledTableCell>
                <StyledTableCell align="right">Provider Logo</StyledTableCell>
                <StyledTableCell align="right">Account Number </StyledTableCell>
                <StyledTableCell align="right">Name </StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
              {paymentAccount_table.map((row,index)=>(
                   <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="right" >{row?.payment_type}</StyledTableCell>
                  <StyledTableCell align="right" >{row.payment_provider}</StyledTableCell>
                  <StyledTableCell align="right" >
                      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <Avatar style={{display:"flex",justifyContent:"center"}} src={row.provider_logo} variant="square" alt=""/>
                      </div>
                      
                  </StyledTableCell>
                  <StyledTableCell align="right" >{row.account_no}</StyledTableCell>
                  <StyledTableCell align="right" >{row.name}</StyledTableCell>
                  <StyledTableCell align="right">
                  <Stack spacing={1} direction="row" sx={{justifyContent: 'flex-end'}}>
                  <Button variant="contained"
                  onClick={()=>{
                    navigate(`/payment-setting/payment-account/edit/${row.id}`)
                  }}
                  >Edit</Button>
                   </Stack>
                  </StyledTableCell>
                  </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default PaymentAccountTable;
