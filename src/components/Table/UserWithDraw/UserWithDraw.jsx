import React,{useEffect, useState} from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import classes from "./UserWithDraw.module.css";
import { Button, FormControl, MenuItem, Select,Pagination, Stack } from "@mui/material";

import axios from "axios";


import { toast, ToastContainer } from "react-toastify";
import { getMethod } from "../../../services/api-services";
import Card from "../../UI/Card";
import { BasedColor } from "../../../Controller/BasedColor";
import { logoutHandler } from "../../Sidebar/Sidebar";
import ApproveActionModal from "../../UI/Modal/UserWithDraw/ApproveActionModal";
import RejectActionModal from "../../UI/Modal/UserWithDraw/RejectActionModal";





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
const UserWithDrawTable = ({}) => {
   const [open,setOpen] = useState(false);
   const [cancelopen,setCancelOpen] = useState(false);
   const [page,setPage] = useState(1);
   const [totalPage,setTotalPage] = useState();
   const AlertToast = (toast,msg)=> toast(msg);
   const openHandler = ()=>setOpen(true);
   const closeHandler = ()=>setOpen(false);
   const CancelopenHandler = ()=>setCancelOpen(true);
   const CancelcloseHandler = ()=>setCancelOpen(false);
   const [userWithDraw,setUserWithDraw] = useState([]);
   const [id,setId] = useState("");
   const [num,setNum] = useState(0);
 
 const fetchUserWithDraw = async()=>{
   try{
    const response = await axios.request(getMethod(`api/user-withdraw?sortColumn=id&sortDirection=desc&limit=20&status=pending&page=${page}`));
    // console.log(response.data.meta);
    setTotalPage(response.data.meta.last_page);
    setUserWithDraw(response.data.data)
   }catch(error){
    if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
    }
   }

 useEffect(()=>{
    fetchUserWithDraw();
  //  return ()=>{
  //   setUserWithDraw([])
  //  }
 },[page,num]);
 console.log(userWithDraw);

  return (
    <div className={classes["table-margin"]}>
        <ToastContainer />
      <Card>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No</StyledTableCell>
              <StyledTableCell align="left">user-ID</StyledTableCell>
              <StyledTableCell align="left">User Name</StyledTableCell>
              <StyledTableCell align="left">Payment Provider</StyledTableCell>
              <StyledTableCell align="left">Amount</StyledTableCell>
              <StyledTableCell align="left">Phone/Account</StyledTableCell>
              <StyledTableCell align="left">Payment Date</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
              
          </TableHead>
          <TableBody>
           {userWithDraw.map((user,index)=>(
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                {index+1}
                </StyledTableCell>
                <StyledTableCell align="left">{user.user_id}</StyledTableCell>
                <StyledTableCell align="left">{user.account_name}</StyledTableCell>
                <StyledTableCell align="left">{user.payment_provider_name}</StyledTableCell>
                <StyledTableCell align="left">{user.amount}</StyledTableCell>
                <StyledTableCell align="left">{user.account_no}</StyledTableCell>
                <StyledTableCell align="left">
                 22-3-2022
                </StyledTableCell>
       
                <StyledTableCell align="right" >
                <Stack spacing={1} direction="row" sx={{display:'block'}}>
                     <Button onClick={()=>{
                         openHandler();
                         setId(user.id)
                     }}  size="small"  variant="contained">
                       Approve
                     </Button>
                     <Button onClick={(e)=>{
                        CancelopenHandler()
                         setId(user.id)
                     }}   size="small" color="error" variant="contained">
                       Reject
                    </Button>
                    </Stack>
                </StyledTableCell>
                </StyledTableRow>
                  ))}
        {/* --------------------------------------------------Test */}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes["pagination"]}>
      <Pagination
        count={parseInt(totalPage)}
        style={{ marginTop: 20, backgroundColor: "white" }}
        color="primary"
        onChange={(e) => {
          setPage(e.target.textContent);
        }}
      />
    </div>
      </Card>
      <ApproveActionModal 
      open={open} 
      handleClose={closeHandler} 
      id={id} 
      AlertToast={AlertToast}
      num={num}
      setNum={setNum}
      />
      <RejectActionModal 
      open={cancelopen} 
      handleClose={CancelcloseHandler} 
      id={id} 
      AlertToast={AlertToast}
      num={num}
      setNum={setNum}
      />
    </div>
  );
};

export default UserWithDrawTable;