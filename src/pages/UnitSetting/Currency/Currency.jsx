import React, { useState } from 'react';


import classes from './Currency.module.css';

import { Button, TextField } from '@mui/material';
import Card from '../../../components/UI/Card';
import SelectCountry from './SelectCountries/SelectCountry';

import CryptoCurrencyExchange from './Exchange/CryptoCurrencyExchange';
import CurrencyExchange from './Exchange/CurrencyExchange';


const Currency = () => {
    const [selectCoun,setSelectCoun] = useState("");
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Currency Exchange</h1>
        </div >
        <div className={classes["card-body"]} sx={{width:500}}>
           <SelectCountry setSelectCoun={setSelectCoun} selectCoun={selectCoun} />
           &nbsp;<p style={{fontSize:20,marginTop:20}}>=</p>
           &nbsp;<p style={{fontSize:20,marginTop:20}}>0.97 USD</p>
           <Button variant="contained" style={{marginTop:20}}>Submit</Button>
        </div>
        <div className={classes["card-body-container"]}>
            <CurrencyExchange />
            <CryptoCurrencyExchange />
        </div>
        </Card>
        {/* <div style={{widht:"100%",marginTop:30,display:"flex",justifyContent:"flex-end"}}>
            <Button variant='contained' color="primary">Confirm</Button>
        </div> */}
    </div>
  )
}

export default Currency;