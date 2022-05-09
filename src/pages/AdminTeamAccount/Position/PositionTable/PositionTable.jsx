
import React from "react";

import { styled } from "@mui/material/styles";
import { DataGrid } from '@mui/x-data-grid';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import classes from "./PositionTable.module.css";
import {useNavigate} from "react-router-dom";
import { BasedColor } from "../../../../Controller/BasedColor";
import { IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { DeleteMethod } from "../../../../services/api-services";
import axios from "axios";
import { toast } from "react-toastify";
import ToggleBtn from "../../../../components/UI/ToggleBtn/ToggleBtn";
import Nodata from "../../../../components/Nodata/Nodata";


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
const PositionTable = ({name,position,salary,percentage,status,data,render,setRender}) => {
  const navigate = useNavigate();
  console.log(data);
  const banPosition = async(id)=>{
    try{
  const response = await axios.request(DeleteMethod(`api/positions/${id}`));
  if(response.data.status==="success"){
  toast.success(response.data.message);
  setRender(!render);
  }
  if(response.data.status==="error"){
    toast.error(response.data.message)
  }
    }catch(error){
      toast.error(error.response.data.message)
    }
  }
 console.log("position",data);

 const columns = [
  {
    field: "id",
    headerName: 'No',
    width: 100,
    headerAlign: 'center',
    editable: false,

  },
  {
    field:"department_Name",
    headerName:"Department Name",
    width:200,
    headerAlign:"center",
    editable:false,
    renderCell:(params)=>params.row?.department?.name
  },
  {
    field:"name",
    headerName:"Position",
    width:200,
    headerAlign:"center",
    editable:false,
  },
  {
    field:"action",
    headerName:"Action",
    width:300,
    headerAlign:"center",
    renderCell:(params)=> 
    <Stack spacing={1} direction="row" >
    <Button 
    className={classes["button"]}
    variant="contained"  onClick={()=>{
      navigate("/odoo-function-detail")
    }}>Detail</Button>
    <IconButton onClick={()=>{
      banPosition(params.row?.id)
    }}><Delete />
    </IconButton>
    <IconButton
    onClick={()=>{
      navigate(`/admin-team-account/position/edit-position/${params.row.id}`)
    }}
    ><Edit /></IconButton>
</Stack>
  }
 ]

  return (
    <div className={classes["table-margin"]}>
        {/* <div className={classes["table-margin"]}>
          {
            data.length !==0 ? (<TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>No.</StyledTableCell> 
                    {name &&<StyledTableCell align="left">name</StyledTableCell>}
                    <StyledTableCell align="left">Department Name</StyledTableCell>
                  {position && <StyledTableCell align="left">Position</StyledTableCell> }
                   {salary && <StyledTableCell align="left">Salary</StyledTableCell> }
                  {percentage &&  <StyledTableCell align="left">Percentage</StyledTableCell> }
                  {status &&  <StyledTableCell align="left">Status</StyledTableCell> }
                    <StyledTableCell align="left">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
              {data?.map((row,index)=>(
                
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        {index+1}
                      </StyledTableCell>
                      {name &&<StyledTableCell align="left">Roger</StyledTableCell>}
                      <StyledTableCell align="left">{row?.department?.name}</StyledTableCell>
                    {position && <StyledTableCell align="left">{row?.name}</StyledTableCell> }
                    {percentage && <StyledTableCell align="left">1000USD</StyledTableCell> }
                     {salary &&<StyledTableCell align="left">-</StyledTableCell>}
                     {status && <StyledTableCell align="left"> 
                          <Button 
                          variant="contained" color="success"
                          size="small"
                          >Active</Button>
                      </StyledTableCell> }
                      <StyledTableCell align="left">
                      <Stack spacing={1} direction="row" >
            <Button variant="contained" onClick={()=>{
              navigate("/odoo-function-detail")
            }}>Detail</Button>
            
            <IconButton onClick={()=>{
              banPosition(row?.id)
            }}><Delete />
            </IconButton>
            
            <IconButton
            onClick={()=>{
              navigate(`/admin-team-account/position/edit-position/${row.id}`)
            }}
            ><Edit /></IconButton>
        </Stack>
        </StyledTableCell>
    </StyledTableRow>
                        ))}
                </TableBody>
              </Table>
            </TableContainer>):(<Nodata />)
          }
        
        </div> */}
        {
          data.length !==0 ? (<DataGrid columns={columns} rows={data} />):(<Nodata />)
        }
    </div>
  )
}

export default PositionTable