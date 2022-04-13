import { Button, FormControl, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import Card from '../../../../components/UI/Card';
import classes from './AffiliateAgentPercentage.module.css';

const AffiliateAgentPercentage = () => {
    const [open,setOpen] = useState(false);
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>setOpen(false);

    const [percentage,setPercentage] = useState("30");
    const [value,setValue] = useState('');
    const handleChange = (e)=>setPercentage(e.target.value);

  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Affiliate Agent Percentage</h1>
        </div>
        <div className={classes["card-body"]}>
            <div className={classes["soccer-setting-content-flex"]}>
           {!open ?
           (<h2 className={classes["percentage-title"]}>{percentage}%</h2>) 
           :(<FormControl sx={{width:500}}>
           <TextField size="small" onChange={(e)=>setValue(e.target.value)} />
           </FormControl>)}
            {open ?
            (<Stack spacing={2} direction="row" >
        <Button variant='contained' onClick={()=>
        {setPercentage(value);
        handleClose();
        }}>Confirm</Button>
        <Button variant='contained' onClick={handleClose} color="error">Cancel</Button>
            </Stack>) :
                 (<Button onClick={handleOpen} variant='contained'>Edit</Button>)}
            </div>
        </div>
      </Card>
    </div>
  )
}

export default AffiliateAgentPercentage;