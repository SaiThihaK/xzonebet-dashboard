import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BasedColor } from '../../../Controller/BasedColor';
import Card from "../../../components/UI/Card";
import { Box } from "@mui/material";
import classes from "./ProfitTable.module.css";
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

const agentProfitTitle=[ 
  "Date","User Name", "Time","Transition ID","Amount","Type","Payment Data"
]

const MasterProfitTitile=[
  "Date","Type","Amount","Parcentage","Agent Name","Agent Perentage","Profit","Remark"
]

const ProfitTable = ({type,master}) => {
  let TotalAmount=0;
  let TotalPen=0;
  let TotalAgentPen=0;
  let TotalProfit=0;
  
  const addAmount=(el)=>{
TotalAmount=TotalAmount+el;
    return el
  }
  const addPercentage=(el)=>{
    TotalPen=TotalPen+el;
        return el
      }
      const addAgentPercentage=(el)=>{
        TotalAgentPen=TotalAgentPen+el;
            return el
          }
          const addProfit=(el)=>{
            TotalProfit=TotalProfit+el;
                return el;
              }
  console.log("master",type);
  return (  
      <>
    <Card>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
          { type === "master" ? (MasterProfitTitile.map((el)=> {
            return (
              <StyledTableCell align="left">{el}</StyledTableCell>
            )
          })) : (agentProfitTitle.map((el)=> {  
            return (
              <StyledTableCell align="left">{el}</StyledTableCell>
            )
          }))}
            {/* <StyledTableCell align="left">Date</StyledTableCell>
            <StyledTableCell align="left">User Name</StyledTableCell>
            <StyledTableCell align="left">Time</StyledTableCell>
            <StyledTableCell align="left">
              Transition ID
            </StyledTableCell>
            <StyledTableCell align="left">Amount</StyledTableCell>          
            <StyledTableCell align="left">Type</StyledTableCell>
            <StyledTableCell align="left">Payment Date</StyledTableCell> */}
          </TableRow>
        </TableHead>
       <TableBody>
       {/* "Date" : "1.6.20222",
      "Type" : "Deposit",
      "Percentage" : 20,
      "Amount" : 15000,
      "AgentName" : "Zaw Zaw",
      "Agent Percentage" : 50,
      "Remark" : "complete" */}
          {master.map((el,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="left">{index}</StyledTableCell>
              <StyledTableCell align="left">{el.Date}</StyledTableCell>
              <StyledTableCell align="center"> <Box sx={{backgroundColor: el.Type ==="WithDraw" ? "red" : "rgb(251,177,23)" ,color : "white",borderRadius: "7px",padding: "6px 5px",}}> {el.Type}</Box> </StyledTableCell>
              <StyledTableCell align="left">{ addAmount(el.Amount) }</StyledTableCell>
              <StyledTableCell align="left">{ addPercentage(el.Amount * (el.Percentage / 100) ) }</StyledTableCell>
              <StyledTableCell align="left">{el.AgentName}</StyledTableCell>
              <StyledTableCell align="left">{ addAgentPercentage(el.Amount * (el.Percentage / 100) ) * (el.Agent_Percentage / 100) }</StyledTableCell>
              <StyledTableCell align="center" > <Box sx={{backgroundColor: "green" ,color : "white",borderRadius: "7px",padding: "6px 10px",}} >{ addProfit(((el.Amount * (el.Percentage / 100) ) * ( (Math.abs(100-el.Agent_Percentage)) / 100))) }</Box> </StyledTableCell>
              <StyledTableCell align="left">{el.Remark}</StyledTableCell>
            </StyledTableRow>
          ))}
          <StyledTableRow >
              <StyledTableCell align="left" colSpan={3}>Total</StyledTableCell>
            
           
              <StyledTableCell align="left">{TotalAmount}</StyledTableCell>
              <StyledTableCell align="left">{TotalPen}</StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left">{TotalAgentPen}</StyledTableCell>
              <StyledTableCell align="left"><Box sx={{backgroundColor: "green" ,color : "white",borderRadius: "7px",padding: "6px 10px",}} >{TotalProfit}</Box></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Card>
    {type !== "master" && (
 <span className={classes["total-unit"]}>
 <span>Total Unit- 3000</span>
   </span>
    )}
   
    </>
  )
}

export default ProfitTable