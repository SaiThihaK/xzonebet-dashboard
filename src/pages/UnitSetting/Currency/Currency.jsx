import React, { useState } from 'react';


import classes from './Currency.module.css';

import { Button, InputLabel, TextField } from '@mui/material';
import Card from '../../../components/UI/Card';
import SelectCountry from './SelectCountries/SelectCountry';

import CryptoCurrencyExchange from './Exchange/CryptoCurrencyExchange';
import CurrencyExchange from './Exchange/CurrencyExchange';
import CardDesc from './CardDesc';


const Currency = () => {
    const [selectCoun,setSelectCoun] = useState("");
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Currency Exchange</h1>
        </div>
        <CardDesc />
        </Card>
        <div className={classes["card-body-container"]}>
          <Card>
          <CurrencyExchange />
          </Card>
          <Card>
          <CryptoCurrencyExchange />
          </Card>
        </div>
      
        {/* <div style={{widht:"100%",marginTop:30,display:"flex",justifyContent:"flex-end"}}>
            <Button variant='contained' color="primary">Confirm</Button>
        </div> */}
    </div>
  )
}

export default Currency;