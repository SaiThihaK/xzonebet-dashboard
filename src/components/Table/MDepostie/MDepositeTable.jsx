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
import Card from "../../UI/Card";

const MDepositeTable = () => { 

   const [value,setValue] = useState("");
   const [ID,setID] = useState(null);
   const [toggle,setToggle] = useState(false);
const DummyArr = [
  {id:"1",name:"Yoshi",provider:"K-pay",ammount:"3000",phone:"0934387483",transiitionId:"342834283",status:"active",payment_date:"22/3/2022"},
  {id:"2",name:"Yoshi",provider:"K-pay",ammount:"3000",phone:"0934387483",transiitionId:"342834283",status:"active",payment_date:"22/3/2022"},
  {id:"3",name:"Yoshi",provider:"K-pay",ammount:"3000",phone:"0934387483",transiitionId:"342834283",status:"active",payment_date:"22/3/2022"}
]
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
 const handleClick = (id)=>{
   setID(id);
   if(id===ID){
     setToggle(true);
   }

 const handleClose = (id)=>{
   if(id===ID){
     setToggle(false);
   }
 }
 }
  return (
    <div className={classes["table-margin"]}>
      <Card>
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
           {DummyArr.map((a,index)=>(
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                {index+1}
                </StyledTableCell>
                <StyledTableCell align="left">{a.id}</StyledTableCell>
                <StyledTableCell align="left">{a.name}</StyledTableCell>
                <StyledTableCell align="left">K-pay</StyledTableCell>
                <StyledTableCell align="left">30000</StyledTableCell>
                <StyledTableCell align="left">093468326</StyledTableCell>
                <StyledTableCell align="left">
                345353536
                </StyledTableCell>
                <StyledTableCell align="left">
                 {
                     ID !==a.id ?
                     (<Button onClick={()=>handleClick(a.id)}   size="small" color="success" variant="contained">Pending</Button>)
                     :(<FormControl className={classes["form-control"]}>
                     <Select value={value} onChange={onChangeValue} size="small">
                         <MenuItem value="pending">Pending</MenuItem>
                         <MenuItem value="approve">Approve</MenuItem>
                         <MenuItem value="reject">Reject</MenuItem>
                     </Select>
                     <Button onClick={()=>{setID(null)}}>Confirm</Button>
                     </FormControl>)
                 }
               
                </StyledTableCell>
                <StyledTableCell align="left">
                 22-3-2022
                </StyledTableCell>
        </StyledTableRow>
                  ))}
        {/* --------------------------------------------------Test */}
          </TableBody>
        </Table>
      </TableContainer>
      </Card>
    </div>
  );
};

export default MDepositeTable;