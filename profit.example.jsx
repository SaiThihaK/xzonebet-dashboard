import React from 'react'

const example = () => {
  return (
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
  )
}

export default profit.example