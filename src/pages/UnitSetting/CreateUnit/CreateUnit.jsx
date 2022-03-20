import React, { useState } from 'react';


import classes from './CreateUnit.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import Card from '../../../components/UI/Card';
import { Button, TextField } from '@mui/material';
import CreateUnitTable from './CreateUnitTable/CreateUnitTable';
const CreateUnit = () => {
 
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Create Unit</h1>
        </div>
        <div className={classes["card-body"]}>
            <div className={classes['soccer-setting-content-flex']}>
            <h3>Current Unit-</h3>
          <TextField
          sx={{width:500}}
          className={classes["form-input"]}
          disabled
          id="outlined-disabled"
          label="0"
        />
           </div>
           <form className={classes['creadit-input']}>
        <TextField
          sx={{width:300}}
          variant="standard"
          type="number"
        /> 
        <Button variant="contained" className={classes["btn"]}>Create</Button>
        </form>
        </div>
      </Card>
      <CreateUnitTable />
    </div>
  )
}

export default CreateUnit