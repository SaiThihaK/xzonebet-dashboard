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
import classes from "./PaymentTypeTable.module.css";
import EditPaymentModal from "../../../../components/UI/Modal/PaymentSetting/PaymentType/EditPaymentTypeModal";
import { BasedColor } from "../../../../Controller/BasedColor";
import Nodata from "../../../../components/Nodata/Nodata";
import { DataGrid } from "@mui/x-data-grid";
import {Edit} from "@mui/icons-material";
import {IconButton} from "@mui/material";
const PaymentTypeTable = ({payment_type,num,setNum}) => {
 
const [open, SetOpen] = useState(false);

const [typeId,setTypeId] = useState("");
const handleOpen = ()=>SetOpen(true);
const handleClose = ()=>SetOpen(false);
 useEffect(()=>{

 },[num]);
console.log("payment_type",payment_type)
 const columns = [
  {
    field: "id",
    headerName: 'ID',
    width: 100,
    headerAlign: 'center',
    editable: false,
  },
  {
    field:"name",
    headerName:"Payment Type",
    width:400,
    headerAlign:"center",
    editable:false,
  },
  {
    field:"action",
    headerName:"",
    width:400,
    headerAlign:"center",
    editable:false,
    renderCell:(params)=>
      <IconButton onClick={()=>{handleOpen();setTypeId(params.row.id)}}>
        <Edit />
      </IconButton>

  }
]


  return (
    <div className={classes["table-container"]}>
      <div className={classes["table-margin"]}>
        {
          payment_type?.length !==0 ?( 
          // <TableContainer component={Paper}>
          //   <Table sx={{ minWidth: 700 }} aria-label="customized table">
          //     <TableHead>
          //       <TableRow>
          //         <StyledTableCell align="left">No.</StyledTableCell>
          //         <StyledTableCell align="left">Payment Type</StyledTableCell>
          //         <StyledTableCell align="right">Action</StyledTableCell>
          //       </TableRow>
          //     </TableHead>
          //     <TableBody>
               
          //       {payment_type?.map((row,index)=>(
          //            <StyledTableRow key={index}>
          //             <StyledTableCell component="th" scope="row">
          //             {row.id}
          //           </StyledTableCell>
  
          //           <StyledTableCell align="left" >{row.name}</StyledTableCell>
          //           <StyledTableCell align="right">
          //           <Stack spacing={1} direction="row" sx={{justifyContent: 'flex-end'}}>
          //           <Button variant="contained" onClick={()=>{handleOpen();setTypeId(row.id)}}>Edit</Button>
          //            </Stack>
          //           </StyledTableCell>
          //           </StyledTableRow>
                                    
          //       ))}
          //     </TableBody>
            
          //   </Table>
          // </TableContainer>
          <div className={classes["table-grid"]}>
            <DataGrid rows={payment_type} columns={columns}/>
          </div>
          ):(<Nodata />)
        }
       
        <EditPaymentModal open={open} handleClose={handleClose} num={num} setNum={setNum} id={typeId} />
      </div>
    </div>
  );
};

export default PaymentTypeTable;
