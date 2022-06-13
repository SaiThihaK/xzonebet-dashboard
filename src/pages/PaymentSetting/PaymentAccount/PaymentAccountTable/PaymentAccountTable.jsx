import React, { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import Stack from "@mui/material/Stack";

import classes from "./PaymentAccountTable.module.css";
import { Avatar, IconButton } from "@mui/material";
import { BasedColor } from "../../../../Controller/BasedColor";
import { useNavigate } from "react-router-dom";

import Nodata from "../../../../components/Nodata/Nodata";
import { Delete, Edit } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { toast } from "react-toastify";
import axios from "axios";
import { DeleteMethod } from "../../../../services/api-services";
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


const PaymentAccountTable = ({data}) => {
const navigate = useNavigate();



const deleteHandler = async(id)=>{
  console.log(id)
  try{
 const response = await axios.request(DeleteMethod(`api/dashboard/payment-providers/${id}`));
 if(response.data.status==="succeess"){
   toast.success(response.data.message);
   return;
 }
 if(response.data.message === "error"){
   toast.error(response.data.message);
   return;
 }
  }catch(error){
    toast.error(error.response.data.message)
  }
}

const columns = [
  {
    field: "id",
    headerName: 'Payment-ID',
    width: 100,
    headerAlign: 'center',
    editable: false,
  },
  {
    field: "payment_type",
    headerName: 'Payment Type',
    width: 200,
    headerAlign: 'center',
    editable: false,
   
  },
  {
    field: "payment_provider",
    headerName: 'Payment Provider',
    width: 200,
    headerAlign: 'center',
    editable: false,
  },
  {
    field: "provider_logo",
    headerName: 'Provider Logo',
    width: 120,
    headerAlign: 'center',
    editable: false,
    renderCell:(params)=> <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <Avatar style={{display:"flex",justifyContent:"center"}} src={params.row.logo} variant="square" alt=""/>
    </div>
  },
  {
    field: "account_no",
    headerName: 'Account Number',
    width: 200,
    headerAlign: 'center',
    editable: false,
  },
  {
    field: "name",
    headerName: 'Account Name',
    width: 200,
    headerAlign: 'center',
    editable: false,
  },
  {
    field: "action",
    headerName: 'Action',
    width: 90,
    headerAlign: 'center',
    editable: false,
    renderCell:(params)=> <Stack spacing={1} direction="row" sx={{justifyContent: 'flex-end'}}>
    <IconButton
    onClick={()=>{
      navigate(`/dashboard/payment-setting/payment-account/edit/${params.row.id}`)
    }}
    ><Edit />
    </IconButton>
    {/* <IconButton onClick={()=>{deleteHandler(params.row.id)}}>
      <Delete />
    </IconButton> */}
     </Stack>
  },

  
     ]
  return (
    <div className={classes["table-container"]}>
 
        {
          data?.length !== 0 ? (<div className={classes["table-margin"]}>

        <DataGrid rows={data} columns={columns} />
      </div>):(<Nodata />)
        }
        
    </div>
  );
};

export default PaymentAccountTable;
