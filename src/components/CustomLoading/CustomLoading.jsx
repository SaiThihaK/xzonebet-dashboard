import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';


export default function CustomLoading({size,thickness}) {
  return (
    <div style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
      <CircularProgress size={size} thickness={thickness} />
    </div>
  );
}