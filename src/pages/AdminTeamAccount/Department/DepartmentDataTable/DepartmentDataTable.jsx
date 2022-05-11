import { Delete, Edit } from '@mui/icons-material';
import { Button, IconButton, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Nodata from '../../../../components/Nodata/Nodata';
import { DeleteMethod } from '../../../../services/api-services';

const DepartmentDataTable = (props) => {
const {data,render,setRender} = props;
const navigate = useNavigate();
console.log(data)

const banDepartment = async(id)=>{
    try{
  const response = await axios.request(DeleteMethod(`api/departments/${id}`));
  if(response.data.status==="success"){
  toast.success(response.data.message);
  setRender(!render);
  }
  if(response.data.status==="error"){
    toast.error(response.data.message)
  }
    }catch(error){
      toast.error(error.response.data.message)
    }
  } 
    const columns = [
        {
          field: "id",
          headerName: 'Department ID',
          width: 100,
          headerAlign: 'center',
          editable: false
        },
        {
            field: "name",
            headerName: 'Department',
            width: 400,
            headerAlign: 'center',
            editable: false,
        
          },
          {
              field:"action",
              headerName:"Action",
              width:300,
              headerAlign:"center",
              renderCell:(params)=> <Stack direction="row" >
              <Button variant="contained"
              style={{padding:"5px 10px",fontSize:13}} 
               onClick={()=>{
                navigate(`/dashboard/admin-team-account/department/department-detail/${params.row.id}`)
              }}>
                Detail
              </Button>
              
            <IconButton onClick={()=>{banDepartment(params.row.id)}}><Delete/></IconButton>
               <IconButton
               onClick={()=>{navigate(`/dashboard/admin-team-account/department/edit-department/${params.row.id}`)}}
               ><Edit /></IconButton>
          </Stack>
          }
    ];
  return (
    <div style={{ height:"60vh", width: '100%' }}>
        {
            data.length !==0 ? (<DataGrid columns={columns} rows={data} />) :(<Nodata />)
        }
    </div>
  )
}

export default DepartmentDataTable