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
    field: 'sport',
    headerName: 'sport-Category',
    width: 200,
    headerAlign: 'center',
    editable: true,
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

const rows = [
  { id: 1, lastName: 'Snow', sport: 'Jon', age: 35,description:"football is br nyrrr aenaoigniosgiaoisdgboiaaaaaa diogasno baoisgnioabrgb abiobagibaoigbaiobgio"},
  { id: 2, lastName: 'Lannister', sport: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', sport: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', sport: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', sport: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', sport: null, age: 150 },
  { id: 7, lastName: 'Clifford', sport: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', sport: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', sport: 'Harvey', age: 65 },
];

export default function AllSportTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
      
        rows={rows}
        columns={columns}
        editMode="cell"
        autoPageSize={true}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}