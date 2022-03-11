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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMethod, PostMethod } from "../../../services/api-services";
import { FormControl, MenuItem, Select } from "@mui/material";
const MasterDepositTable = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [rowData,setRowData] = useState([]);
    const [toggle,setToggle] =  useState(false);
    const [id,setId] = useState(0);
    const alertToast = (message) => toast(message);
    const [num,setNum] = useState(0);

    const toggleOpen = ()=>setToggle(true);
    const toggleClose = ()=>setToggle(false);
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
    const {data} = await axios.request(getMethod(`/api/affiliate-register-lists-detail?sortColumn=updated_at&sortDirection=desc&limit=30&status=deposit-pending`));
    
    setRowData(data.data)
  }

  useEffect(()=>{
    fetchData();
  },[num])
  const confirmHandler = async(id)=>{
    try{
    const response = await axios.request(
      PostMethod(`/api/affiliate-register-lists/accept/${id}`,
      {user_type:"deposit-confirm"},
    ));
  
    if(response.data.status="success"){
      alertToast(response.data.message.toUpperCase());
      setNum(num+1);
      return;
    }
    }catch(error){

    }
  }

  const filterArr = rowData.map((r)=>([r.id,r.name,r.payment_type,r.payment_name,r.transition_id,r.amount]));

  return (
    <div className={classes["table-margin"]}>
      <ToastContainer />
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
            {filterArr.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {index+1}
                </StyledTableCell>
                <StyledTableCell align="right">{row[0]}</StyledTableCell>
                <StyledTableCell align="right">{row[1]}</StyledTableCell>
                <StyledTableCell align="right">{row[2]}</StyledTableCell>
                <StyledTableCell align="right">{row[3]}</StyledTableCell>
                <StyledTableCell align="right">
                  {row[4]}
                </StyledTableCell>
                <StyledTableCell align="right">{row[5]}</StyledTableCell>
                <StyledTableCell align="right">
                <Stack spacing={1} direction="row" sx={{display:'block'}}>
        <Button variant="contained" color="success" size="small" onClick={()=>confirmHandler(row[0])}>Confirm</Button>
        <Button variant="outlined" onClick={()=>{handleOpen();setId(row[0])}} color="error" size="small">Reject</Button>
         </Stack> 
        </StyledTableCell>
        </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <MasterDepositCancel open={open} handleClose={handleClose} setNum={setNum} id={id} num={num}/>
      </TableContainer>
    </div>
  );
};

export default MasterDepositTable;
