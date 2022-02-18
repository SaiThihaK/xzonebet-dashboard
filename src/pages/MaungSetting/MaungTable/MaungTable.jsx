import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MaungSettingEdit from "../../../components/UI/Modal/MaungSettingEdit/MaungSettingEdit";
import classes from "./MaungTable.module.css";
const MaungTable = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData(
      "5",
      159,
      <Stack direction="row" spacing={2} sx={{ justifyContent: "flex-end" }}>
        <Button onClick={handleOpen} variant="contained" color="success">
          Edit
        </Button>
        <Button variant="contained" color="error">
          Delete
        </Button>
      </Stack>
    ),
    createData(
      "1",
      237,
      <Stack direction="row" spacing={2} sx={{ justifyContent: "flex-end" }}>
        <Button variant="contained" color="success">
          Edit
        </Button>
        <Button variant="contained" color="error">
          Delete
        </Button>
      </Stack>
    ),
    createData(
      "2",
      262,
      <Stack direction="row" spacing={2} sx={{ justifyContent: "flex-end" }}>
        <Button variant="contained" color="success">
          Edit
        </Button>
        <Button variant="contained" color="error">
          Delete
        </Button>
      </Stack>
    ),
    createData(
      "1",
      305,
      <Stack direction="row" spacing={2} sx={{ justifyContent: "flex-end" }}>
        <Button variant="contained" color="success">
          Edit
        </Button>
        <Button variant="contained" color="error">
          Delete
        </Button>
      </Stack>
    ),
    createData(
      "10",
      10,
      <Stack direction="row" spacing={2} sx={{ justifyContent: "flex-end" }}>
        <Button variant="contained" color="success">
          Edit
        </Button>
        <Button variant="contained" color="error">
          Delete
        </Button>
      </Stack>
    ),
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Team Number</TableCell>
            <TableCell align="right">Percentage</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <MaungSettingEdit open={open} handleClose={handleClose}/>
    </TableContainer>
  );
};

export default MaungTable;
