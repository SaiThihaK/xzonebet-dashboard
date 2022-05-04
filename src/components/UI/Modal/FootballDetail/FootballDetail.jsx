import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// ------------------------modal--------------------
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  bgcolor: "background.paper",
  border: "1px solid #FFF",
  borderRadius: "0.5rem",
  overflowY: "auto",
  maxHeight: "calc(100vh - 100px)",
  p: 4,
};

function createData(id, teams, bet, amount, status) {
  return { id, teams, bet, amount, status };
}

const rows = [
  createData(1, "Leones Negros UDG - Atlante FC", 10000, 10000, "WIN"),
  createData(2, "Leones Negros UDG - Atlante FC", 10000, 10000, "WIN"),
  createData(3, "Leones Negros UDG - Atlante FC", 10000, 10000, "WIN"),
  createData(4, "Leones Negros UDG - Atlante FC", 10000, 10000, "WIN"),
  createData(5, "Leones Negros UDG - Atlante FC", 10000, 10000, "WIN"),
];

const FootballDetail = ({ handleClose, open }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Betting Detail
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell align="center">Teams</TableCell>
                  <TableCell align="center">Bet</TableCell>
                  <TableCell align="center">Amount</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">{row.teams}</TableCell>
                    <TableCell align="center">{row.bet}</TableCell>
                    <TableCell align="center">{row.amount}</TableCell>
                    <TableCell align="center">
                    <span style={{backgroundColor: '#28a745',borderRadius: '5px',color:'#FFF',padding: '2px 10px'}}>{row.status}</span>    
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div style={{marginTop: '20px',textAlign:"center"}}>
            <Button variant="contained" color="error" onClick={handleClose}>Close</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default FootballDetail;
