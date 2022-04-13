import React, { useState } from "react";

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
import MaungSettingEdit from "../../../components/UI/Modal/MaungSettingEdit/MaungSettingEdit";
import classes from "./MaungTable.module.css";
import { BasedColor } from "../../../Controller/BasedColor";


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

const MaungTable = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const maungData =  [
    {id:1,match:"match-1",tax:"20%"},
    {id:2,match:"match-2",tax:"20%"},
    {id:3,match:"match-3",tax:"20%"},
    {id:4,match:"match-4",tax:"20%"},
    {id:5,match:"match-5",tax:"20%"},
    
];
const btnClickHandler = ()=>{
  handleClose();
}

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Match</StyledTableCell>
            <StyledTableCell align="right">Tax</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {maungData.map((row,index) => (
            <StyledTableRow
              key={index}
            >
              <TableCell component="th" scope="row">
                {row.match}
              </TableCell>
              <TableCell align="right">{row.tax}</TableCell>
              <TableCell align="left">
                <Stack direction="row" spacing={1} style={{display:"flex",justifyContent:"flex-end"}}>
                  <Button variant="contained" onClick={handleOpen} size="small">Edit</Button>
                  <Button variant="contained" size="small" color="error">Ban</Button>
                </Stack>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <MaungSettingEdit title="Edit Maung" open={open} handleClose={handleClose} btnName="Edit" btnClick={btnClickHandler} />
    </TableContainer>
  );
};

export default MaungTable;
