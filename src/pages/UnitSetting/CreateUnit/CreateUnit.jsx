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
            style={{marginLeft:70,width:700}}
          disabled
          id="outlined-disabled"
          label="0"
        />
           </div>
           <form className={classes['creadit-input']}>
        <TextField
          style={{width:300}}
          variant="standard"
          type="number"
        /> 
        <Button style={{width:100,marginTop:30,marginLeft:200}} variant="contained">Create</Button>
        </form>
        </div>
      </Card>
      <CreateUnitTable />
    </div>
  )
}

export default CreateUnit