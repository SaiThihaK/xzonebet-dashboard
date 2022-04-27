import * as React from 'react';
import { Box, LinearProgress } from '@mui/material';


export default function CustomLoading({size,thickness}) {
  return (
    <div style={{display:"flex",justifyContent:"center",alignContent:"center",width:"100%"}}>
       <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
    </div>
  );
}