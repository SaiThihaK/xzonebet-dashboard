import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React,{useEffect, useState} from "react";




const CurrencyExchange = () => {
  const currency = [{usd:"300MMK",idn:"400MMK",type:"USD"},{usd:"300MMK",idn:"400MMK",type:"USD"},{usd:"300MMK",idn:"400MMK",type:"USD"},{usd:"300MMK",idn:"400MMK",type:"USD"},{usd:"300MMK",idn:"400MMK",type:"USD"}]
  return (
    <div style={{padding:"0px 20px"}}>
        <h1  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Currency Exchange</h1>
        <TableContainer component={Paper} style={{marginTop:20}}>
        <Table  aria-label="simple table">
        <TableHead>
            <TableRow></TableRow>
          </TableHead>
          <TableBody>
           
            {
              currency.map((c,index)=>(
                <TableRow key={index}
              >
                <TableCell align="left">
                  {c.type}
                </TableCell >
                <TableCell align="left">
                  =
                </TableCell>
                <TableCell align="left">
                  {c.usd}
                </TableCell>
                </TableRow>
              ))
            }
             
            
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
};

export default CurrencyExchange;