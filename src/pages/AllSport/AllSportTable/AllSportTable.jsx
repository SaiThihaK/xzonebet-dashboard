import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Button, IconButton, Stack } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import Nodata from "../../../components/Nodata/Nodata"
import { DeleteMethod } from '../../../services/api-services';
import { toast } from 'react-toastify';
import axios from 'axios';
import EditSportModal from '../../../components/UI/Modal/EditSport/EditSportModal';


export default function AllSportTable({data,render,setRender}) {
const [open,setOpen] = React.useState(false);
const openHandler = ()=>setOpen(true);
const handleClose = ()=>setOpen(false);
const [id,setId] = React.useState("");
const deleteHandler = async(id)=>{
  try{
    const response = await axios.request(DeleteMethod(`api/sport-categories/${id}`));
    console.log(response);
    if(response.data.success){
      toast.success(response.data.message);
      setRender(!render);
      return;
    }
  }catch(error){
    toast.error(error.response.data.message)
  }
}

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
           <IconButton onClick={()=>{openHandler();setId(params.row.id)}}><Edit/></IconButton>
          <IconButton onClick={()=>deleteHandler(params.row.id)}><Delete/></IconButton>    
          </Stack>
          );
          }
    },
   
  ];
  
  
  return (
    <div style={{ height:"60vh", width: '100%' }}>
      {data.length !==0 ? ( <DataGrid
        rows={data}
        columns={columns}
        rowsPerPageOptions={[5]}
      />):(<Nodata />)}
    <EditSportModal open={open}  handleClose={handleClose} render={render} setRender={setRender} id={id} /> 
    </div>
  );
}