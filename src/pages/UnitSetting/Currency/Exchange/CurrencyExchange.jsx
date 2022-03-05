import { Switch } from "@mui/material";
import React,{useEffect, useState} from "react";




const CurrencyExchange = () => {
  
  return (
    <div style={{padding:"0px 20px"}}>
        <h1>Currency Exchange</h1>
     <div style={{display:"flex",marginTop:10}}>
         <p>US&nbsp;=&nbsp;</p>
         <p>100MMK</p>
         <div>
         <Switch defaultChecked/>
         </div>
     </div>
    </div>
  );
};

export default CurrencyExchange;