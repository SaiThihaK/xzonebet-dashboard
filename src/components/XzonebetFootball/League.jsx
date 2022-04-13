import { FormControl, MenuItem, Select } from '@mui/material'
import React from 'react'

const League = () => {
  const coun = [{name:"Myanmar"},{name:"9e4ew"}]
  return (
    <FormControl fullWidth>
    <Select   size='small' >
  {coun.map((coun,index)=>(
      <MenuItem key={index}>{coun.name}</MenuItem>
  ))}
    </Select>
    </FormControl>
  )
}

export default League