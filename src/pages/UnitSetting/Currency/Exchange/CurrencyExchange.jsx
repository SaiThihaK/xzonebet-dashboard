import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import React,{useEffect, useState} from "react";
import { Currency } from "../../../../services/api-services";




const CurrencyExchange = () => {
const [currency,setCurrency] = useState({});
const [coun,setCoun] = useState([]);


  const FetchCurrency = async()=>{
    const response = await  axios.request(Currency);
    console.log(response.data.conversion_rates);
    setCurrency(response.data.conversion_rates)
  };
  const FetchCountries = async()=>{
    const response = await axios.get(`https://v6.exchangerate-api.com/v6/f08f01b448f9b740baf0b750/codes?fbclid=IwAR0xRGVSUAcXp3BvTieGvgNtB3KmaIKCgvIvGkPV6yG2B_ZWHWf_SpVCLJw`);
    console.log(response.data.supported_codes);
    setCoun(response.data.supported_codes);
  }
  useEffect(()=>{
  FetchCurrency();
  FetchCountries();
  },[]);
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
              Object.keys(currency).map((c,index)=>(
                <TableRow key={index}>
                <TableCell>
                  {coun.map((cu)=>{
                    if(cu[0]==c){
                      return cu[1];
                    }
                  })}
                </TableCell>
                <TableCell align="left">
                  {c}
                </TableCell >
                <TableCell align="left">
                  =
                </TableCell>
                <TableCell align="left">
                {currency[c]+""+"MMK"}
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