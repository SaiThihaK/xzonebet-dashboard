import { Button, Stack } from '@mui/material';
import React, { useState } from 'react';
import Card from "../UI/Card"
import  classes from "./OdooFunction.module.css"

const OdooFunction = ({added,func, OdooClick}) => {
  const [isadded,setIsadded] = useState(added);
  const isaddHandler = ()=>setIsadded(true);
  const isremoveHanlder = ()=>setIsadded(false);
  // https://miro.medium.com/max/1140/1*NjyitbwN6fZhRPpH6CRNlQ.png
  return (
    
   <div>
     <Card>
     <div className={classes["container"]}>
        <div className={classes["img-container"]}>
            <img 
            width="40"
            height="40"
            src='data:image/png;base64,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' 
            alt="admin team account" />
        </div>
        <div   className={classes["form-container"]}>
      <h3 className={classes["func-title"]}>{func?.name}</h3>
      <p className={classes["func-desc"]}>
      This is function 1 is responsible for creating teams.
      </p>
      {
        isadded ?  (
        <Stack direction="row" style={{marginTop:10,fontSize:12}}>
        {/* <Button color="success">added</Button> */}
        <Button color="error" onClick={isremoveHanlder}>remove</Button>
      </Stack>
      ) : (
        <Stack direction="row" style={{marginTop:10,fontSize:12}}>
        <Button color="success" onClick={()=>{
          isaddHandler()
          OdooClick(func.id)
          ;}}>add</Button>
        {/* <Button color="error">remove</Button> */}
      </Stack>
      )
      }
    
      </div>
    </div>
     </Card>
   </div>
  )
}

export default OdooFunction