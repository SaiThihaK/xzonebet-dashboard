import { Button, Stack } from '@mui/material';
import React, { useState } from 'react';
import Card from "../UI/Card"
import  classes from "./OdooFunction.module.css"

const OdooFunction = ({added,func, OdooClick,OdooRemove}) => {
  const [isadded,setIsadded] = useState(added);
  const isaddHandler = ()=>setIsadded(true);
  const isremoveHanlder = ()=>setIsadded(false);
  // https://miro.medium.com/max/1140/1*NjyitbwN6fZhRPpH6CRNlQ.png
  return (
    
   <div>
     <Card>
     <div className={classes["container"]}>
        <div   className={classes["form-container"]}>
      <h3 className={classes["func-title"]}>{func?.name}</h3>
      <p className={classes["func-desc"]}>
      This is function 1 is responsible for creating teams.
      </p>
      {
        isadded ?  (
        <Stack direction="row" style={{marginTop:10,fontSize:12,display:"flex",justifyContent:"flex-end"}}>
        {/* <Button color="success">added</Button> */}
        <Button color="error" onClick={()=>{
          isremoveHanlder();
          }}>remove</Button>
      </Stack>
      ) : (
        <Stack direction="row" style={{marginTop:10,fontSize:12,display:"flex",justifyContent:"flex-end"}}>
        <Button color="success" onClick={()=>{
          isaddHandler();
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