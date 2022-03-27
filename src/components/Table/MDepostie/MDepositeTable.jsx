import React,{useEffect, useState} from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import classes from "./MDepositeTable.module.css";
import { Button, FormControl, MenuItem, Select,Pagination } from "@mui/material";
import Card from "../../UI/Card";
import { BasedColor } from "../../../Controller/BasedColor";
import axios from "axios";
import { getMethod, PostMethod } from "../../../services/api-services";
import { logoutHandler } from "../../Sidebar/Sidebar";
import { toast } from "react-toastify";
import DepositeModal from "../../UI/Modal/DepositeModal/DepositeModal";




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
const MDepositeTable = ({setNum,num,filterStatus}) => {
   const [open,setOpen] = useState(false);
   const [value,setValue] = useState("");
   const [ID,setID] = useState(null);
   const [toggle,setToggle] = useState(false);
   const [user_deposite,setUser_deposite] = useState([]);
   const [page,setPage] = useState(1);
   const [totalPage,setTotalPage] = useState(0);
   const onChangeValue = (e)=>setValue(e.target.value);
   const AlertToast = (toast,msg)=> toast(msg);
   const openHandler = ()=>setOpen(true);
   const closeHandler = ()=>setOpen(false);
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



 const confirmHandler = async()=>{
   if(value === "approve"){
     console.log("approve")
    try{
      const response = await axios.request(PostMethod(`api/user-deposit/action/${ID}`,{
        status:"approve"
      }));
      console.log(response);
      if(response.data.status==="success"){
        AlertToast(toast.success,response.data.message);
        setID("");
        setNum(num+1);
        setValue("")
        return;
      }
      if(response.data.status === "error"){
        AlertToast(toast.error,response.data.message);
        setID("");
        setNum(num+1);
        setValue("");
        return;
      }
      }catch(error){
       if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
         logoutHandler();
         }
       }
       return;
   }
  if(value === "pending"){
    setID("");
    setValue("");
    return;
  }
  if(value === "re-ject"){
    openHandler();
    
    return;
  }
 } 

 const differStatus = (user)=>{
   if(user.status === "pending"){
     return <StyledTableCell align="left">
     {
         ID !==user.id ?
         (
         <Button onClick={()=>handleClick(user.id)}    color="success" variant="contained">
           {user.status}
         </Button>
         )
         :(<FormControl className={classes["form-control"]}>
         <Select value={value} onChange={onChangeValue} size="small">
             <MenuItem value="pending">Pending</MenuItem>
             <MenuItem value="approve">Approve</MenuItem>
             <MenuItem value="re-ject">Reject</MenuItem>
         </Select>
         <Button onClick={confirmHandler}>Confirm</Button>
         </FormControl>)
     }
   
    </StyledTableCell> 
   }
   if(user.status === "approve"){
     return  <StyledTableCell align="left">
       <Button variant="contained" >Approve</Button>
     </StyledTableCell>
   }
   if(user.status === "rejected"){
    return  <StyledTableCell align="left">
      <Button variant="contained" color="error">Reject</Button>
    </StyledTableCell>
  }
 }
 



 const fetchUserDeposite = async()=>{
   try{
    const response = await axios.request(getMethod(`api/user-deposit?sortColumn=id&sortDirection=desc&limit=10&page=${page}${filterStatus}`));
    // console.log(response.data.meta);
    if(response.data.status==="success"){
      setTotalPage(response.data.meta.last_page);
      setUser_deposite(response.data.data);
      return;
    }
    if(response.data.status==="error"){
      AlertToast(toast.error,response.data.message);
      return;
    }
  
   }catch(error){
    if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
      logoutHandler();
      }
    }
   }
   const ChangeDate=(date)=>{
    const dateNo=new Date(date);
    return dateNo.toISOString().replace(/([^T]+)T([^\.]+).*/g, '$1 $2') 
  };
 useEffect(()=>{
   fetchUserDeposite();
 },[num,page,filterStatus]);
 console.log(user_deposite);
  return (
    <div className={classes["table-margin"]}>
      <Card>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No</StyledTableCell>
              <StyledTableCell align="left">user-ID</StyledTableCell>
              <StyledTableCell align="left">Account Name</StyledTableCell>
              <StyledTableCell align="left">Phone/Account No</StyledTableCell>
              <StyledTableCell align="left">
                Transition ID
              </StyledTableCell>
              <StyledTableCell align="left">Payment Provider</StyledTableCell>
              <StyledTableCell align="left">Amount</StyledTableCell>
             
              
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="left">Payment Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           {user_deposite.map((user,index)=>(
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                {index+1}
                </StyledTableCell>
                <StyledTableCell align="left">{user.user_id}</StyledTableCell>
                <StyledTableCell align="left">{user.account_name}</StyledTableCell>
                <StyledTableCell align="left">{user.account_no}</StyledTableCell>
                <StyledTableCell align="left">
                {user.transaction_no}
                </StyledTableCell>
                <StyledTableCell align="left">{user.payment_provider_name}</StyledTableCell>
                <StyledTableCell align="left">{user.amount}</StyledTableCell>
                
            
                {
                  differStatus(user)
                }
                {/* <StyledTableCell align="left">
                 {
                     ID !==user.id ?
                     (
                     <Button onClick={()=>handleClick(user.id)}   size="small" color="success" variant="contained">
                       {user.status}
                     </Button>
                     )
                     :(<FormControl className={classes["form-control"]}>
                     <Select value={value} onChange={onChangeValue} size="small">
                         <MenuItem value="pending">Pending</MenuItem>
                         <MenuItem value="approve">Approve</MenuItem>
                         <MenuItem value="re-ject">Reject</MenuItem>
                     </Select>
                     <Button onClick={confirmHandler}>Confirm</Button>
                     </FormControl>)
                 }
               
                </StyledTableCell> */}
                <StyledTableCell align="left">
                {
                  ChangeDate(user.created_at)
                }
                </StyledTableCell>
        </StyledTableRow>
                  ))}
        {/* --------------------------------------------------Test */}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes["pagination"]}>
      <Pagination
        count={totalPage}
        style={{ marginTop: 20, backgroundColor: "white" }}
        color="primary"
        onChange={(e) => {
          setPage(e.target.textContent);
        }}
      />
    </div>
      </Card>
     <DepositeModal 
     open={open}
     closeHandler={closeHandler}
     num={num}
     setNum={setNum}
     id={ID}
     AlertToast={AlertToast}
     setID={setID}
     setValue={setValue}
     />
    </div>
  );
};

export default MDepositeTable;