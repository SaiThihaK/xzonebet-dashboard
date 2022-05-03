import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Button, IconButton, Stack } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import Nodata from "../../../components/Nodata/Nodata"
const columns = [
  {
    field: "id",
    headerName: 'Sport-ID',
    width: 100,
    headerAlign: 'center',
    editable: false,

  },
  {
    field: 'name',
    headerName: 'sport-Category',
    width: 200,
    headerAlign: 'center',
    editable: true,
  },
  {
    field: 'image',
    headerName: 'Icon image',
    headerAlign: 'center',
    width: 200,
    renderCell:(params)=><Avatar src={params.row.img} />
  },
  {
    field: 'description',
    headerName: 'Description',
    headerAlign: 'center',
    width: 300,
    editable: false,
  },
  {
    field: "action",
    headerName: 'Action',
    headerAlign: 'center',
    width: 200,
    sortable: false,
    editable: false,
    renderCell: (params) => {
        return (
        <Stack direction="row" spacing={4} style={{display:"flex",justifyContent:"center"}}>
         <IconButton onClick={()=>console.log(params.row.id)}><Edit/></IconButton>
        <IconButton><Delete/></IconButton>    
        </Stack>
        );
        }
  },
 
];



export default function AllSportTable({data}) {
  return (
    <div style={{ height:"60vh", width: '100%' }}>
      {data.length !==0 ? ( <DataGrid
        rows={data}
        columns={columns}
        autoPageSize={true}
        rowsPerPageOptions={[5]}
      />):(<Nodata />)}
         
    </div>
  );
}