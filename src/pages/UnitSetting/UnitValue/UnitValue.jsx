import React, { useState } from 'react';


import classes from './UnitValue.module.css';

import { Button, TextField } from '@mui/material';
import Card from '../../../components/UI/Card';
import UnitEditModal from '../../../components/UI/UnitSetting/UnitEditModal';

const UnitValue = () => {
  const [Kopen, KsetOpen] = React.useState(false);
  const [Kvalue,KsetValue] = useState("1000");
  const KhandleOpen = () => KsetOpen(true);
  const KhandleClose = () => KsetOpen(false);

  const [PUopen,PUsetOpen] = useState(false);
  const [PUvalue,PUsetValue] = useState("30");
  const PUhandleOpen = ()=>PUsetOpen(true);
  const PUhandleClose = ()=>PUsetOpen(false);

  const [Mopen,MsetOpen] = useState(false);
  const [Mvalue,MsetValue] = useState("6000");
  const MhandleOpen = ()=>MsetOpen(true);
  const MhandleClose = ()=>MsetOpen(false);

  

  
 
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Unit Value</h1>
        </div >
        <div className={classes["card-body"]}>
            <h2  className={classes["card-body-title"]}>Total Unit - 3424432</h2>
            <div className={classes["card-body-container"]}>
             {/* UnitValueDesc */}
             <div className={classes["total-unit-container"]}>
             <div className={classes["form-group"]} >
           <label htmlFor="">Promotion Unit </label>:<p>&nbsp;&nbsp;787800</p>
            </div>
            <div className={classes["form-group"]}>
           <label htmlFor="">Main Unit </label>:<p>&nbsp;&nbsp;787800</p>
            </div>
            <div className={classes["form-group"]}>
           <label htmlFor="">Diamond Unit </label>:<p>&nbsp;&nbsp;787800</p>
            </div>
             </div>
             <div>
             <div>
             <div className={classes["form-group"]}>
           <label htmlFor="">1Main </label>:
           <div>
               &nbsp;{Kvalue}&nbsp;MMK
               &nbsp;<Button variant='contained' size="small" onClick={KhandleOpen}  >Edit</Button>
           </div>
            </div>
            <div className={classes["form-group"]}>
           <label htmlFor="">1 Main </label>:
           <div>&nbsp;{PUvalue}&nbsp;PU
           &nbsp;<Button variant='contained' size="small" onClick={PUhandleOpen}  >Edit</Button>
           </div>
            </div>
            <div className={classes["form-group"]}>
           <label htmlFor="">1 Diamond </label>:
           <div>&nbsp;{Mvalue}&nbsp;Main
           &nbsp;<Button variant='contained' size="small" onClick={MhandleOpen}  >Edit</Button></div>
            </div>
             </div>
             </div>
             {/* UnitValueDesc */}
            </div>
            <UnitEditModal open={Kopen}  handleClose={KhandleClose} unitFrom="1Main" unitTo={Kvalue} setValue={KsetValue} unit="MMK" />
            <UnitEditModal open={PUopen}  handleClose={PUhandleClose} unitFrom="1Main" unitTo={PUvalue} setValue={PUsetValue} unit="PU" />
            <UnitEditModal open={Mopen}  handleClose={MhandleClose} unitFrom="1Diamond" unitTo={Mvalue} setValue={MsetValue} unit="Main" />
            </div>
        </Card>
        {/* <div style={{widht:"100%",marginTop:30,display:"flex",justifyContent:"flex-end"}}>
            <Button variant='contained' color="primary">Confirm</Button>
        </div> */}
    </div>
  )
}

export default UnitValue