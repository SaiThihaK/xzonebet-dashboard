import React,{ useState} from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import classes from "./MDepositeTable.module.css";
import { Button, FormControl, MenuItem, Select } from "@mui/material";
import { BasedColor } from "../../../Controller/BasedColor";
import axios from "axios";
import { PostMethod } from "../../../services/api-services";
import { toast } from "react-toastify";
import DepositeModal from "../../UI/Modal/DepositeModal/DepositeModal";
import { useDispatch, useSelector } from "react-redux";
import { getRender, selectedRender } from "../../../features/render";
import CustomGetFunction from "../../../services/CustomGetFunction";
import CustomLoading from "../../../components/CustomLoading/CustomLoading"
import MasterDepositeConfirm from "../../../components/UI/Modal/MasterDeposite/MasterDepositeConfirm"
import { DataGrid } from '@mui/x-data-grid';
import Nodata from "../../Nodata/Nodata";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: BasedColor.tableHead,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const MDepositeTable = ({setNum,num,filterStatus}) => {
   const [open,setOpen] = useState(false);
   const [value,setValue] = useState("");
   const [ID,setID] = useState(null);
   const [toggle,setToggle] = useState(false);
  
   const [page,setPage] = useState(1);

   const onChangeValue = (e)=>setValue(e.target.value);
   const AlertToast = (toast,msg)=> toast(msg);
   const openHandler = ()=>setOpen(true);
   const closeHandler = ()=>setOpen(false);
   const dispatch = useDispatch();
   const [modalOpen,setModalOpen] = useState(false);
   const ModalOpenHandler = ()=>setModalOpen(true);
   const ModalCloseHandler= ()=>setModalOpen(false);
   const [amount,setAmount] = useState("");
   const handleAmmount = (e)=>setAmount(e.target.value);
   
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

 const render = useSelector(selectedRender);
 console.log(render)

 const confirmHandler = async()=>{
   if(value === "approve"){
    //  console.log("approve")
    // ModalOpenHandler();
    submitHandler();
    
    // try{
    //   const response = await axios.request(PostMethod(`api/deposit/action/${ID}`,{
    //     status:"approve"
    //   }));
    //   console.log(response);
    //   if(response.data.status==="success"){
    //     AlertToast(toast.success,response.data.message);
    //     setID("");
    //     setNum(num+1);
    //     setValue("");
    //     dispatch(getRender({render: !render}))
    //     return;
    //   }
    //   if(response.data.status === "error"){
    //     AlertToast(toast.error,response.data.message);
    //     setID("");
    //     setNum(num+1);
    //     setValue("");
    //     return;
    //   }
    //   }catch(error){
    //    if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
    //      toast.error(error.response.data.message)
    //      logoutHandler();
    //      }
    //    }
    //    return;
   }
  if(value === "pending"){
    setID("");
    setValue("");
    return;
  }
  if(value === "rejected"){
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
         <Button onClick={()=>handleClick(user.id)} style={{width:80}}    color="success" variant="contained">
           {user.status}
         </Button>
         )
         :(<FormControl className={classes["form-control"]}>
         <Select value={value} onChange={onChangeValue} size="small">
             {/* <MenuItem value="pending">Pending</MenuItem> */}
             <MenuItem value="approve">Approve</MenuItem>
             <MenuItem value="rejected">Reject</MenuItem>
         </Select>
         <Button onClick={confirmHandler}>Confirm</Button>
         </FormControl>)
     }
   
    </StyledTableCell> 
   }
   if(user.status === "approve"){
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
 const submitHandler = async()=>{
  
  try{
      const response = await axios.request(PostMethod(`api/deposit/action/${ID}`,{
        status:"approve",
      }));
      console.log(response);
      if(response.data.status==="success"){
        AlertToast(toast.success,response.data.message);
        setID("");
        setNum(num+1);
        setValue("");
        dispatch(getRender({render: !render}));
        ModalCloseHandler();
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
      console.log("This is error")
     toast.error(error.response.data.message)
   }
 }
 const columns = [
  { 
    field: 'id', 
    headerName: 'User-ID',
    width: 90,
    renderCell:(param)=>param.row.submit_user?.id
 },
  {
    field: 'account_name',
    headerName: 'Account Name',
    width: 150,
    renderCell:(param)=> param.row.account_name
  },
  {
    field: 'account number',
    headerName: 'Account No/Account Name',
    width: 200,
    renderCell:(param)=> param.row.account_no
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 100,
    // renderCell:(param)=> param.row.account_no
  },
  {
    field: 'transaction_no',
    headerName: 'Trasitoin ID',
    type: 'number',
    width: 200,

  },
  {
    field: 'payment_provider_name',
    headerName: 'Payment Provider',
    width: 160,
    renderCell:(param)=>param.row.payment_provider_name
  },
  {
    field: 'Payment Date',
    headerName: 'Payment Date',
    width: 160,
    renderCell:(param)=><p>{ChangeDate(param.row.created_at)}</p>
    
  },
  {
    field: 'Status',
    headerName: 'Status',
    width: 150,
    renderCell:(param)=><div>
      {differStatus(param.row)}
    </div>
    
  },
];



 const {data,loading} = CustomGetFunction(`api/deposit-receive?sortColumn=id&sortDirection=desc&limit=20&page=${page}${filterStatus}`,[num,page,filterStatus])
 console.log(data);
   const ChangeDate=(date)=>{
    const dateNo=new Date(date);
    return dateNo.toISOString().replace(/([^T]+)T([^\.]+).*/g, '$1 $2') 
  };
 
  return (
    <div className={classes["table-margin"]}>
    {
      loading ? ( 
      <div className={classes["table-margin"]}>
      {/* <Card>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No</StyledTableCell>
              <StyledTableCell align="left">User-ID</StyledTableCell>
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
           {data?.map((user,index)=>(
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                {index+1}
                </StyledTableCell>
                <StyledTableCell align="left">{user.submit_user?.id}</StyledTableCell>
                <StyledTableCell align="left">{user.account_name}</StyledTableCell>
                <StyledTableCell align="left">{user.account_no}</StyledTableCell>
                <StyledTableCell align="left">
                {user.transaction_no}
                </StyledTableCell>
                <StyledTableCell align="left">{user.payment_provider_name}</StyledTableCell>
                <StyledTableCell align="left">{user.amount}</StyledTableCell>
                <StyledTableCell align="left">
                {
                  ChangeDate(user.created_at)
                }
                </StyledTableCell>
            
                {
                  differStatus(user)
                }

        </StyledTableRow>
                  ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Card> */}
    
    
      {
        data.length !== 0 ? (<DataGrid
          rows={data}
          columns={columns}
          hideFooter
          rowHeight={100}
        />):(<Nodata />)
      }
    </div>) : (<CustomLoading />)
    }    <DepositeModal 
    open={open}
    closeHandler={closeHandler}
    num={num}
    setNum={setNum}
    id={ID}
    AlertToast={AlertToast}
    setID={setID}
    setValue={setValue}
    />
       <MasterDepositeConfirm open={modalOpen} handleClose={ModalCloseHandler} submitHandler={submitHandler} handleAmmount={handleAmmount} />
   </div>
  );
};

export default MDepositeTable;