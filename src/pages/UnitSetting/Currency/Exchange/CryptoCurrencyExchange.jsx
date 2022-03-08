import { Avatar, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Crypto } from "../../../../services/api-services";
import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";


const CryptoCurrencyExchange = ()=>{
const [coin,setCoin] = useState([]);
const FetchCrypto = async()=>{
 const response = await axios.request(Crypto);
 setCoin(response.data);
};
useEffect(()=>{
FetchCrypto();
return ()=>setCoin([]);
},[]);


console.log(coin);

// console.log(coin);
return(
    <div >
        <h1 style={{marginBottom:20,display:"flex",justifyContent:"center",alignItem:"center"}}>Crypto Exchange</h1>
        <TableContainer component={Paper} style={{marginTop:20}}>
        <Table  aria-label="simple table">
        <TableHead>
            <TableRow></TableRow>
          </TableHead>
          <TableBody>
            {
                coin.map((c,index)=>(
              <TableRow key={index}>
                  <TableCell align="left">
                    
                    <Avatar src={c.image} alt="" />
                  <p>&nbsp;{c.name}</p>
                
                  </TableCell>
                  <TableCell align="left">
                     <Typography>
                         =
                     </Typography>
                  </TableCell>
                  <TableCell  align="left">
                   {c.current_price}&nbsp;USD
                  </TableCell>
              </TableRow>   
                ))
            }
          </TableBody>
        </Table>
        </TableContainer>
    </div>
)
};
export default CryptoCurrencyExchange;