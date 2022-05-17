import { Button, Stack } from '@mui/material';
import React, { useState } from 'react';
import Card from "../UI/Card"
import  classes from "./OdooFunction.module.css"
import {MdManageAccounts} from "react-icons/md"
import {MdOutlinePayment} from "react-icons/md"
import { Box } from '@mui/material';
const OdooFunction = ({added,func, OdooClick,OdooRemove}) => {
  const [isadded,setIsadded] = useState(added);
  const isaddHandler = ()=>setIsadded(true);
  const isremoveHanlder = ()=>setIsadded(false);
  // https://miro.medium.com/max/1140/1*NjyitbwN6fZhRPpH6CRNlQ.png
  return (
    
   <div>
     <Card>
     <div className={classes["container"]}>
       <Box sx={{    width: "140px", display: "flex",justifyContent: "center",alignItems: "center",
    height: "90px",backgroundColor: func.bg ,borderRadius: "5px",marginRight: "7px" }} >
   {func?.icon}
     </Box>
        <div   className={classes["form-container"]}>
      <h3 className={classes["func-title"]}>{func?.title}</h3>
      {/* <p className={classes["func-desc"]}>
     {func?.text}
      </p> */}
      {
        isadded ?  (
        <Stack direction="row" style={{marginTop:20,fontSize:5,justifyContent:"flex-end"}}>
        {/* <Button color="success">added</Button> */}
        <Button color="error" size="small"  variant="contained" sx={{fontSize: "12px",width: "fit-content"}} onClick={()=>{
          isremoveHanlder();
          }}>remove</Button>
      </Stack>
      ) : (
        <Stack direction="row" style={{marginTop:20,fontSize:5,display:"flex",justifyContent:"flex-end"}}>
        <Button color="success" size="small" variant="contained" sx={{fontSize: "12px",}} onClick={()=>{
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