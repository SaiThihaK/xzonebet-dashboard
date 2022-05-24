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
import { DataGrid } from "@mui/x-data-grid";
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
  "Date","Type","Amount","Agent Name","Note"
]



const ProfitTable = ({type,master}) => {
  let TotalAmount=0;
  let TotalPen=0;
  let TotalAgentPen=0;
  let TotalProfit=0;
console.log(master)
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
  const columns = [
    {
      field: "date",
      headerName: 'Date',
      width: 100,
      headerAlign: 'center',
      editable: false,
  
    },
    {
      field: 'type',
      headerName: 'Type',
      width: 200,
      headerAlign: 'center',
      editable: true,
    },
    {
      field: 'ammount',
      headerName: 'Ammount',
      width: 200,
      headerAlign: 'center',
      editable: true,
    },
    {
      field: 'percentage',
      headerName: 'Percentage',
      width: 200,
      headerAlign: 'center',
      editable: true,
    },
    {
      field: 'Agent Name',
      headerName: 'Agent Name',
      width: 200,
      headerAlign: 'center',
      editable: true,
    },
    {
      field: 'Agent Percentage',
      headerName: 'Agent Percentage',
      width: 200,
      headerAlign: 'center',
      editable: true,
    },
    {
      field: 'Profit',
      headerName: 'Profit',
      width: 200,
      headerAlign: 'center',
      editable: true,
    },
    {
      field: 'Remark',
      headerName: 'Remark',
      width: 200,
      headerAlign: 'center',
      editable: true,
    },
  ];

  const data=[
    { 
      id:4,
      Date : "1.6.20222",
      Type : "Deposit",
      Percentage : 20,
      Amount : 15000,AgentName : "Zaw Zaw",Agent_Percentage : 50,Remark : "complete"},
      {
     Date : "1.6.20222",
      Type : "Deposit",
      Percentage : 10,
      Amount : 15000,
      AgentName : "Zaw Zaw",Agent_Percenta : 40,
       Remark : "complete"},
        {
    id:0,
    Date : "1.6.20222",
    Type : "WithDraw",
    Percentage : 40,
    Amount : 15000,
    AgentName : "Zaw Zaw",
    Agent_Percentage : 20,
    Remark : "complete"},
          {
        id:1,
        Date : "1.6.20222",
        Type : "WithDraw",
        Percentage : 5,
        Amount : 15000,
        AgentName : "Zaw Zaw",
          Agent_Percentage : 20,
          Remark : "complete"}, 
          {   id:2,
              Date: "1.6.20222",
              Type: "Deposit",
              Percentage : 10,
              Amount: 15000,
              AgentName: "Zaw Zaw",
              Agent_Percentage: 20,
              Remark: "complete"}
    ]
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
              <StyledTableCell align="left">{el.readable_date}</StyledTableCell>
              <StyledTableCell align="center"> <Box sx={{backgroundColor: el.Type ==="WithDraw" ? "red" : "rgb(251,177,23)" ,color : "white",borderRadius: "7px",padding: "6px 5px",}}> {el.type}</Box> </StyledTableCell>
              <StyledTableCell align="left">{ addAmount(el.amount) }</StyledTableCell>
              {/* <StyledTableCell align="left">{ addPercentage(el.Amount * (el.Percentage / 100) ) }</StyledTableCell> */}
              <StyledTableCell align="left">{el?.sender_user?.name}</StyledTableCell>
              {/* <StyledTableCell align="left">{ addAgentPercentage(el.Amount * (el.Percentage / 100) ) * (el.Agent_Percentage / 100) }</StyledTableCell> */}
              {/* <StyledTableCell align="center" > <Box sx={{backgroundColor: "green" ,color : "white",borderRadius: "7px",padding: "6px 10px",}} >{ addProfit(((el.Amount * (el.Percentage / 100) ) * ( (Math.abs(100-el.Agent_Percentage)) / 100))) }</Box> </StyledTableCell> */}
              {/* <StyledTableCell align="left">{el.Remark}</StyledTableCell> */}
              <StyledTableCell align="left">{el.note}</StyledTableCell>
            </StyledTableRow>
          ))}
          {/* <StyledTableRow >
              <StyledTableCell align="left" colSpan={3}>Total</StyledTableCell>
            
           
              <StyledTableCell align="left">{TotalAmount}</StyledTableCell>
              <StyledTableCell align="left">{TotalPen}</StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left">{TotalAgentPen}</StyledTableCell>
              <StyledTableCell align="left"><Box sx={{backgroundColor: "green" ,color : "white",borderRadius: "7px",padding: "6px 10px",}} >{TotalProfit}</Box></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow> */}
        </TableBody>
      </Table>
    </TableContainer>
    </Card>
    {type !== "master" && (
 <span className={classes["total-unit"]}>
 <span>Total Unit- 3000</span>
   </span>
    )}
   
    </>)
{/* <div className={classes["table-margin"]}>
      <DataGrid
        columns={columns}
        rows={master}
      />
</div> 
  ) */}
}

export default ProfitTable


