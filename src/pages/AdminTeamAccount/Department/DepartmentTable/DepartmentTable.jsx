
import React from "react";
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
import classes from "./DepartmentTable.module.css";
import { BasedColor } from "../../../../Controller/BasedColor";
import {useNavigate} from "react-router-dom";
import { IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { toast } from "react-toastify";
import axios from "axios";
import { DeleteMethod } from "../../../../services/api-services";
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



const DepartmentTable = ({name,position,salary,percentage,status,data,render,setRender}) => {
  const navigate = useNavigate();
 

  const banDepartment = async(id)=>{
    try{
  const response = await axios.request(DeleteMethod(`api/departments/${id}`));
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

  return (
    <div>
        <div className={classes["table-margin"]}>
        <TableContainer component={Paper}>
          {
            data.length !==0 ? (<Table sx={{ minWidth: 700 }} aria-label="customized table">
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
                  <StyledTableCell align="left">{row?.name}</StyledTableCell>
                {position && <StyledTableCell align="left">{row?.name}</StyledTableCell> }
                {percentage && <StyledTableCell align="left">1000USD</StyledTableCell> }
                 {salary &&<StyledTableCell align="left">-</StyledTableCell>}
                 {status && <StyledTableCell align="center"> 
                      <div className={classes["active"]}>Active</div>
                  </StyledTableCell> }
                  <StyledTableCell align="left">
                  <Stack spacing={3} direction="row" >
        <Button variant="contained" size="small" onClick={()=>{
          navigate("/odoo-function-detail")
        }}>Detail</Button>
        
      <IconButton onClick={()=>{banDepartment(row.id)}}><Delete/></IconButton>
         <IconButton><Edit /></IconButton>
    </Stack></StyledTableCell>
</StyledTableRow>
                    ))}
            </TableBody>
          </Table>) :(<Nodata />)
          }
          
        </TableContainer>
        </div>
    </div>
  )
}

export default DepartmentTable