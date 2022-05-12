import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ChangeDate,getResDate } from '../../../Controller/ChangeDate';
import { Button, Stack } from '@mui/material';
import { toast } from 'react-toastify';
import { logoutHandler } from '../../../components/Sidebar/Sidebar';
import MasterDepositCancel from '../../../components/UI/Modal/MasterDepositCancel/MasterDepositCancel';
import MasterDepositeConfirm from '../../../components/UI/Modal/MasterDeposite/MasterDepositeConfirm';
import axios from 'axios';
import { PostMethod } from '../../../services/api-services';
import Nodata from "../../../components/Nodata/Nodata"
export default function MasterDepositeDataTable({ data, num, setNum }) {


  const [ammount, setAmmount] = useState('');
  const handleAmmount = (e) => setAmmount(e.target.value);
  const [id, setId] = React.useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const confirmOpenHandler = () => setConfirmOpen(true);
  const confirmCloseHandler = () => setConfirmOpen(false);

  const confirmHandler = async (id) => {
    try {
      const response = await axios.request(
        PostMethod(`api/affiliate-register-lists/accept/${id}`,
          { user_type: "deposit-confirm" },
        ));

      if (response.data.status = "success") {
        setNum(num + 1);
        toast.success(response.data.message);
        return;
      }
      if (response.data.status = "error") {
        toast.error(response.data.message);
        return;
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
      console.log(error.response.data.message)
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
        logoutHandler();
      }
      return;
    }
  }
  console.log(data);
  const columns = [
    { field: 'id', headerName: "ID", width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      renderCell:(param)=>param.row.first_name +" "+ param.row.last_name
    },
    {
      field: 'payment_type',
      headerName: 'Payment Type',
      width: 200,

    },
    {
      field: 'payment_name',
      headerName: 'Payment Name',
      width: 200,

    },
    {
      field: 'transition_id',
      headerName: 'Transition ID',
      width: 150,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 150,
    },
    {
      field: "date",
      headerName: 'Date',
      width: 200,
      valueGetter: (param) => getResDate(param.row.created_at)
    },
    {
      field: "action",
      headerName: 'Action',
      width: 250,
      renderCell: (param) =>
        <Stack spacing={1} direction="row">
          <Button variant="contained" color="success" size="small" onClick={() => {
            confirmOpenHandler(); setId(param.row.id)
          }
          }>Confirm</Button>
          <Button variant="outlined" onClick={() => { handleOpen(); setId(param.row.id); }} color="error" size="small">Reject</Button>
        </Stack>
    },
  ];

  return (
    <div style={{ height: "200vh", width: '100%' }}>
      {
        data.length !== 0 ? <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
          : (
            <Nodata />
          )
      }
      <MasterDepositCancel open={open} handleClose={handleClose} setNum={setNum} id={id} num={num} handleAmmount={handleAmmount} />
      <MasterDepositeConfirm open={confirmOpen} handleClose={confirmCloseHandler} setNum={setNum} num={num} submitHandler={confirmHandler} id={id} />
    </div>
  );
}
