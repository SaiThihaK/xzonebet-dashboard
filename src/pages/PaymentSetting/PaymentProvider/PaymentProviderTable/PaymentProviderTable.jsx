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
import classes from "./PaymentProviderTable.module.css";
import { Avatar } from "@mui/material";
import axios from "axios"
import {getMethod} from "../../../../services/api-services"
import { logoutHandler } from "../../../../components/Sidebar/Sidebar";
import { BasedColor } from "../../../../Controller/BasedColor";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PaymentType } from "../../../../features/PaymentSetting";

const PaymentProviderTable = () => {

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
  // State
  const [payment_provider,setPayment_provider] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const FetchPayment_type = async()=>{
    try{
      const response = await  axios.request(getMethod(`api/dashboard/payment-providers`));
      if(response.data.status==="success"){
        setPayment_provider(response.data.data);
        return;
      }
      // console.log(response.data.data);
    

    }catch(error){
      console.log(error);
      console.log(error.response.data.message)
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
    }
  }
  
  useEffect(()=>{
    FetchPayment_type()
  },[]);

  const Arr = [{id:"1",payment_type:"E-wallet",payment_provider:"Wave",provider_logo:"https://play-lh.googleusercontent.com/rPq4GMCZy12WhwTlanEu7RzxihYCgYevQHVHLNha1VcY5SU1uLKHMd060b4VEV1r-OQ"}];
 
  return (
    <div className={classes["table-container"]}>
      <div className={classes["table-margin"]}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">No.</StyledTableCell>
                <StyledTableCell align="center">Payment Type</StyledTableCell>
                <StyledTableCell align="center">Payment Provider</StyledTableCell>
                <StyledTableCell align="center">Provider Logo</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {rows.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.userid}</StyledTableCell>
                  <StyledTableCell align="right">{row.name}</StyledTableCell>
                  <StyledTableCell align="right">{row.email}</StyledTableCell>
                  <StyledTableCell align="right">{row.phone}</StyledTableCell>
                  <StyledTableCell align="right">{row.currency}</StyledTableCell>
                  <StyledTableCell align="right">{row.action}</StyledTableCell>
                </StyledTableRow>
              ))} */}
              {payment_provider.map((row,index)=>(
                   <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="center" >{row.payment_type}</StyledTableCell>
                  <StyledTableCell align="center" >{row.name}</StyledTableCell>
                  <StyledTableCell align="center" >
                      <div className={classes["logo-container"]}>
                      <Avatar className={classes['logo']} src={row.logo} variant="square" alt=""/>
                      </div>
                      
                  </StyledTableCell>
                  <StyledTableCell align="right">
                  <Stack spacing={1} direction="row" sx={{justifyContent: 'flex-end'}}>
                  <Button variant="contained" onClick={()=>{
                    navigate(`/master/payment-setting/payment-provider/edit/${row.id}`)
                    dispatch(PaymentType(row.payment_type))
                  }}>Edit</Button>
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

export default PaymentProviderTable;
