import { FormControl, TextField } from '@mui/material';
import React from 'react'
import classes from "./ConfirmCode.module.css"
const ConfirmCode = () => {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        minHeight:380,
        bgcolor: "background.paper",
        borderRadius: "0.5rem",
        p: 4,
      };
      
  return (
    <Box sx={style}>
        <FormControl fullWidth>
            <TextField />
        </FormControl>
    </Box>
  )
}

export default ConfirmCode