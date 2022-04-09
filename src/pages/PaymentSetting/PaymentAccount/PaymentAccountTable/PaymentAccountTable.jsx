import React, { useEffect, useState } from "react";

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
import { useNavigate } from "react-router-dom";

import TableGetFunction from "../../../../services/TableGetFunction";
import CustomPagination from "../../../../components/Pagination/CustomPagination";
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


const PaymentAccountTable = ({num}) => {

 
  const navigate = useNavigate();
  const [page,setPage] = useState(1);
  const {data,pagination} = TableGetFunction(`api/dashboard/payment-accounts?sortColumn=id&sortDirection=desc&limit=10&page=${page}`,[num,page]);
  console.log(data)


 
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
              
              {data.map((row,index)=>(
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
        <CustomPagination setPage={setPage} totalPage={pagination?.meta?.last_page} />
      </div>
    </div>
  );
};

export default PaymentAccountTable;
