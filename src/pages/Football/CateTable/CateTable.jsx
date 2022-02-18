import React, { Fragment } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TableData from './Table/TableData';
import classes from "./CateTable.module.css";
const CateTable = () => {
  return (
    <Fragment>
      <div className={classes["tableColExp"]}>
        <Accordion sx={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#FFF" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              width: "200px",
              color: "#FFF",
              backgroundColor: "#1565C0",
              borderRadius: "0.25rem",
            }}
          >
            <Typography>COLUMN SETTING</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="No"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="User ID"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="User Name"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Betting Amount"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Betting Status"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Betting Type"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Winner Amount"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Betting Detail"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Bet Winner"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Body/Maung"
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </div>
      <TableData />
    </Fragment>
  );
};

export default CateTable;
