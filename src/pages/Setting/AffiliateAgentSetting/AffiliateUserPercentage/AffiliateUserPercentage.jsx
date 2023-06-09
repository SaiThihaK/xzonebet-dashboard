import { Button, FormControl, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import Card from '../../../../components/UI/Card';

import classes from './AffiliateUserPercentage.module.css';

const AffiliateUserPercentage = () => {
    const [open,setOpen] = useState(false);
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>setOpen(false);

    const Arr = [{id:1,name:"A",percentage:"30"},{id:2,name:"B",percentage:"40"},{id:3,name:"C",percentage:"70"},{id:4,name:"D",percentage:"90"},{id:5,name:"E",percentage:"90"}]

    const [percentage,setPercentage] = useState("30");
    const [value,setValue] = useState('');

    const [id,setId] = useState(0);

  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Affiliate User Percentage</h1>
        </div>
        <div className={classes["card-body"]}>
          {
            Arr.map((i,index)=>(
            <div key={index} className={classes["soccer-setting-content-flex"]}>
              <h2>{i.name}</h2>
           {open && id === i.id ? (<FormControl sx={{width:500}}>
           <TextField size="small" sx={{width:400}} onChange={(e)=>setValue(e.target.value)} />
           </FormControl>) :
           (<h2 className={classes["percentage-title"]}>{i.percentage}%</h2>)}
            {open && id === i.id ?
            (<Stack spacing={2} direction="row" >
        <Button variant='contained' onClick={()=>
        {setPercentage(value);
        handleClose();
 
        }}>Confirm</Button>
        <Button variant='contained' onClick={()=>{handleClose();}} color="error">Cancel</Button>
            </Stack>) :
                 (<Button onClick={()=>{handleOpen();setId(i.id)}} variant='contained'>Edit</Button>)}
            </div> )
            )}
        </div>
      </Card>
    </div>
  )
}

export default AffiliateUserPercentage;