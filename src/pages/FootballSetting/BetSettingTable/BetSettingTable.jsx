import React, { useState } from 'react';
import classes from "./BetSetting.module.css";
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Button, Table } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  

const BetSettingTable = () => {
    const navigate = useNavigate("");
    const [toggle1,setToggle1] = useState(true);
    const [toggle2,setToggle2] = useState(true);

  return (
    <div>
         <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Unknow Table</h1>
        </div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell align='left'>Body</StyledTableCell>
            <StyledTableCell align="left">Gold Plus/Minus</StyledTableCell>
            <StyledTableCell align="left" onClick={()=>navigate("/setting/soccer-setting/maung-setting")}>
                Maung
            </StyledTableCell>
            <StyledTableCell align="left"><span>X</span>Maung</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
               1
              </StyledTableCell>
              <StyledTableCell align="left">
             <Button 
             onClick={()=>setToggle1(!toggle1)}
              color={toggle1 ? "primary":"error"}
             variant="contained"
              >
               {toggle1 ? "Enable" : "Disable"}
               </Button>
              </StyledTableCell>
              {/* ---------------------------- */}
              <StyledTableCell align="left">
             <Button 
             onClick={()=>setToggle2(!toggle2)}
              color={toggle2 ? "primary":"error"}
             variant="contained"
              >
               {toggle2 ? "Enable" : "Disable"}
               </Button>
              </StyledTableCell>
              <StyledTableCell align="left">
              Hello World
              </StyledTableCell>
              <StyledTableCell align="left">
              Hello World
              </StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default BetSettingTable