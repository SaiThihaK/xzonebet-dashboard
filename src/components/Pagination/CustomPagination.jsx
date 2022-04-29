import { Pagination } from '@mui/lab'
import React from 'react'

const CustomPagination = ({totalPage,setPage}) => {
  return (
    <div 
    style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:30,
        }}>
        <Pagination
        count={totalPage}
        onChange={(e)=> setPage(e.target.textContent)}
        color="primary"
        />
    </div>
  )
}

export default CustomPagination