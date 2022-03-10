import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  InputLabel,
  Stack,
  Switch,
  TextField,
  ToggleButton,
  Typography,
} from "@mui/material";

const CardDesc = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow></TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">
                <div>
                  <Typography variant="h6">Currency Type</Typography>
                  <p style={{ fontSize: "18px" }}>1&nbsp; USD</p>
                </div>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">=</Typography>
              </TableCell>
              <TableCell align="right">
                {toggle && (
                  <TextField
                    size="small"
                    style={{ transition: "left 2s ease" }}
                  />
                )}
                {!toggle && (
                  <Typography
                    variant="h6"
                    style={{ transition: "left 2s ease" }}
                  >
                    &nbsp;0.2893&nbsp;MMK
                  </Typography>
                )}
              </TableCell>
              <TableCell align="right">
                <Switch
                  defaultChecked={false}
                  onChange={() => setToggle(!toggle)}
                />
              </TableCell>

              <TableCell align="right">
                {toggle && (
                  <Stack
                    spacing={1}
                    direction="row"
                    sx={{ display: "block" }}
                    style={{ transition: "left 2s ease" }}
                  >
                    <Button variant="outlined" color="success" size="small">
                      Edit
                    </Button>
                    <Button variant="contained" size="small">
                      Confirm
                    </Button>
                  </Stack>
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CardDesc;
