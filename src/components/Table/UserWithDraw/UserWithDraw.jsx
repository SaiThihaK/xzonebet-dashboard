import React,{ useState} from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import classes from "./UserWithDraw.module.css";
import { Button, FormControl, MenuItem, Select, Stack } from "@mui/material";
import Card from "../../UI/Card";
import { BasedColor } from "../../../Controller/BasedColor";
import ApproveActionModal from "../../UI/Modal/UserWithDraw/ApproveActionModal";
import RejectActionModal from "../../UI/Modal/UserWithDraw/RejectActionModal";
import CustomPagination from "../../Pagination/CustomPagination";
import TableGetFunction from "../../../services/TableGetFunction";
import {ChangeDate} from "../../../Controller/ChangeDate"
import KSHFunction from "../../../services/KSHFunction";
import CustomLoading from "../../../components/CustomLoading/CustomLoading"
import axios from "axios";
import { toast } from "react-toastify";
import { PostMethod } from "../../../services/api-services";


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
   const [agent_action,setAgent_action] = useState("");
   const AlertToast = (toast,msg)=> toast(msg);
   const openHandler = ()=>setOpen(true);
   const closeHandler = ()=>setOpen(false);
   const CancelopenHandler = ()=>setCancelOpen(true);
   const CancelcloseHandler = ()=>setCancelOpen(false);
   const [userWithDraw,setUserWithDraw] = useState([]);
   const [id,setId] = useState(0);
   const [num,setNum] = useState(0);
   console.log(agent_action)
 const {data,loading} =  KSHFunction(`api/user/withdrawals`,[page,num]);
 console.log("userWithdraw",data);
 const confirmHandler = async()=>{
   try{
  const response = await axios.request(PostMethod(`api/user/withdrawal/agent-action/${id}`,{
    agent_action,
  }));
  if(response.data.success){
    toast.success(response.data.message);
    setNum(num+1)
    setId(0);
    return; 
  }
  console.log(response);
   }catch(error){
     toast.error(error.response.data.message)
   }
 }
 const differStatus = (user)=>{
  if(user.agent_action === "Uncomplete"){
    return <StyledTableCell align="left">
    {
        id !==user.id ?
        (
        <Button onClick={()=>setId(user.id)} style={{width:120}}    color="success" variant="contained">
          Pending
        </Button>
        )
        :(<FormControl   className={classes["form-control"]}>
        <Select  size="small" value={agent_action} onChange={(e)=>setAgent_action(e.target.value)}>
            {/* <MenuItem value="pending">Pending</MenuItem> */}
            <MenuItem value={1}>Approve</MenuItem>
            <MenuItem value={0}>Reject</MenuItem>
        </Select>
        <Button onClick={confirmHandler}>Confirm</Button>
        </FormControl>)
    }
  
   </StyledTableCell> 
  }
  if(user.agent_action === "Complete"){
    return  <StyledTableCell align="left">
      <p className={classes["btn"]} style={{backgroundColor:"blue"}} >Approve</p>
    </StyledTableCell>
  }
  if(user.status === "rejected"){
   return  <StyledTableCell align="left">
     <p className={classes["btn"]} style={{backgroundColor:"red"}} >Reject</p>
   </StyledTableCell>
 }
}
  return (
    <div className={classes["table-margin"]}>
   {
     loading ? (<Card>
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
              <StyledTableCell align="left">User Action</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
              
          </TableHead>
          <TableBody>
           {data?.map((user,index)=>(
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                {index+1}
                </StyledTableCell>
                <StyledTableCell align="left">{user.user.id}</StyledTableCell>
                <StyledTableCell align="left">{user.user.name}</StyledTableCell>
                <StyledTableCell align="left">{user.payment_provider.name}</StyledTableCell>
                <StyledTableCell align="left">{user.amount}</StyledTableCell>
                <StyledTableCell align="left">{user.account_no}</StyledTableCell>
                
                <StyledTableCell align="left">
                 {
                   ChangeDate(user?.created_at)
                 }
                </StyledTableCell>
                <StyledTableCell align="left">
                <p className={classes["btn"]} style={{backgroundColor:user.user_action==="Complete" ? "green" : "red"}}>
                {
                  user.user_action
                }
                </p>
                </StyledTableCell>
  
                <StyledTableCell align="right" >
                  {
                    differStatus(user)
                  }
                {/* <Stack spacing={1} direction="row">
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
                    </Stack> */}
                </StyledTableCell>
                </StyledTableRow>
                  ))}
        {/* --------------------------------------------------Test */}
          </TableBody>
        </Table>
      </TableContainer>
     
      </Card>):(<CustomLoading />)
   }
      
      {/* <CustomPagination setPage={setPage} totalPage={pagination?.meta?.last_page} /> */}
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