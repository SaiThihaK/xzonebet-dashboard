import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, IconButton, Stack } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const columns = [
  { field: 'id', headerName: 'No', width: 90 },
  {
    field: "sport-id",
    headerName: 'Sport-ID',
    width: 200,
    headerAlign: 'center',
    editable: false,

  },
  {
    field: 'Sport Category',
    headerName: 'sport-name',
    width: 200,
    headerAlign: 'center',
    editable: false,
  },
  {
    field: 'Icon image',
    headerName: 'Icon image',
    headerAlign: 'center',
    width: 200,
    sortable: false,
    editable: false,
  },
  {
    field: 'Description',
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
    renderCell: () => {
        return (
        <Stack direction="row" spacing={4} style={{display:"flex",justifyContent:"center"}}>
        <IconButton><Edit/></IconButton>
        <IconButton><Delete/></IconButton>    
        </Stack>
        );
        }
  },
 
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35,},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function AllSportTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
      
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}