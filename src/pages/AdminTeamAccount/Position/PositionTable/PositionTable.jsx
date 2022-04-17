
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
import classes from "./PositionTable.module.css";
import {useNavigate} from "react-router-dom";
import { BasedColor } from "../../../../Controller/BasedColor";
import { IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";


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
const PositionTable = ({name,position,salary,percentage,status,data}) => {
  const navigate = useNavigate();
  return (
    <div>
        <div className={classes["table-margin"]}>
        <TableContainer component={Paper}>
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
                  <StyledTableCell align="left">{row?.name}</StyledTableCell>
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
        <Button variant="outlined" color="error">Ban</Button>
        <Button variant="outlined" color="success">Unban</Button>
        <IconButton><Edit /></IconButton>
    </Stack></StyledTableCell>
</StyledTableRow>
                    ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
    </div>
  )
}

export default PositionTable