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

import MasterDepositeConfirm from "../../../components/UI/Modal/MasterDeposite/MasterDepositeConfirm";
import { logoutHandler } from "../../../components/Sidebar/Sidebar";
import { BasedColor } from "../../../Controller/BasedColor";
import CustomPagination from "../../../components/Pagination/CustomPagination";
import CustomGetFunction from "../../../services/CustomGetFunction"
import { ChangeDate } from "../../../Controller/ChangeDate";
import CustomLoading from "../../../components/CustomLoading/CustomLoading";
const MasterDepositTable = (filterId) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [rowData,setRowData] = useState([]);
    const [totalPage,setTotalPage] = useState(0);
    const [page,setPage] =  useState(1);
  //  Comfirm
  const [confirmOpen,setConfirmOpen] = useState(false);
  const confirmOpenHandler = ()=>setConfirmOpen(true);
  const confirmCloseHandler = ()=>setConfirmOpen(false);
 

  // -----------------
  const [ammount,setAmmount] = useState('');
  const handleAmmount = (e)=>setAmmount(e.target.value);
  // console.log(ammount);
    const [id,setId] = useState(0);
    const AlertToast = (toast,message) => toast(message);
    const [num,setNum] = useState(0);
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
  const {data,pagination} = CustomGetFunction(`api/affiliate-register-lists-detail?sortColumn=updated_at&sortDirection=desc&limit=10&status=deposit-pending&page=${page}`,[num,page])
  

 

  const confirmHandler = async(id)=>{
    try{
    const response = await axios.request(
      PostMethod(`api/affiliate-register-lists/accept/${id}`,
      {user_type:"deposit-confirm"},
    ));
  
    if(response.data.status="success"){
      setNum(num+1);
      AlertToast(toast.success(response.data.message));
      return;
    }
    if(response.data.status="error"){
      AlertToast(toast.error(response.data.message));
      return;
    }
    }catch(error){
      console.log(error)
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
      return;
    }
  }

console.log(rowData)

const filterIddata = rowData.filter((data)=>data.id === filterId);
console.log("filter",filterIddata)
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
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
   
          <TableBody>
            {data
            .map((row, index) => (
              <StyledTableRow key={index}
              >
                <StyledTableCell component="th" scope="row">
                  {index+1}
                </StyledTableCell>
                <StyledTableCell align="right">{row.id}</StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.payment_type}</StyledTableCell>
                <StyledTableCell align="right">{row.payment_name}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.transition_id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.amount}</StyledTableCell>
                <StyledTableCell align="right">{ChangeDate(row.created_at)}</StyledTableCell>
                <StyledTableCell align="right">
                <Stack spacing={1} direction="row">
        <Button variant="contained" color="success" size="small" onClick={()=>{
          confirmOpenHandler();setId(row.id)}
          }>Confirm</Button>
        <Button variant="outlined" onClick={()=>{handleOpen();setId(row.id)}} color="error" size="small">Reject</Button>
         </Stack> 
        </StyledTableCell>
        </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <MasterDepositCancel open={open} handleClose={handleClose} setNum={setNum} id={id} num={num} handleAmmount={handleAmmount} alertToast={AlertToast}/>
        <MasterDepositeConfirm open={confirmOpen} handleClose={confirmCloseHandler} setNum={setNum} num={num} submitHandler={confirmHandler} id={id} />
      </TableContainer>
      <CustomPagination totalPage={pagination?.meta?.last_page} setPage={setPage}/>
    </div>
  );
};

export default MasterDepositTable;
