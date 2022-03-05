import { Avatar } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Crypto } from "../../../../services/api-services";


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

// console.log(coin);
return(
    <div >
        <h1 style={{marginBottom:20}}>Crypto Exchange</h1>
     {
         coin && coin.map((c,index)=>(
             <div key={index} style={{display:"flex"}}>
             <Avatar src={c.image} alt={c.name}  />
             <p>&nbsp;{c.name}</p>
             <p>&nbsp;=</p>
             <p>{c.current_price}USD</p>
             </div>
         ))
     }
    </div>
)
};
export default CryptoCurrencyExchange;