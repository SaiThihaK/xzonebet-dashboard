import React,{useEffect, useState} from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import classes from "./CreateUnitTable.module.css";
import { BasedColor } from "../../../../Controller/BasedColor";
import { getMethod } from "../../../../services/api-services";
import {toast} from "react-toastify";
import { logoutHandler } from "../../../../components/Sidebar/Sidebar";
import axios from "axios";
import { ChangeDate, getResDate } from "../../../../Controller/ChangeDate";
import CustomGetFunction from "../../../../services/CustomGetFunction";
import TableGetFunction from "../../../../services/TableGetFunction";
import Nodata from "../../../../components/Nodata/Nodata";
import { DataGrid } from "@mui/x-data-grid";






const CreateUnitTable = ({data}) => {

console.log("create Unit",data);

const columns = [
  { field: 'id', 
  headerName: 'ID',
  width: 90,
  },
  {
    field: 'Date',
    headerName: 'Date',
    width: 150,
    renderCell:(param)=>getResDate(param.row.created_at)
  },
  {
    field: 'amount',
    headerName: 'Unit',
    width: 150,
   
  },
  {
    field: "Creator's Name",
    headerName: "Creator's Name",
    width: 150,
    renderCell:(param)=>param.row.user.name
  },
  {
    field: "type",
    headerName: "Role",
    width: 100,
    renderCell:(param)=>param.row.user.type
  },
  {
    field: "remark",
    headerName: "Remark",
    width: 100,
  },

 
]


  return (
    <div className={classes["table-margin"]}>
      {
        data?.length !==0 ? ( <div style={{ height: "200vh", width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
        />
      </div>):(<Nodata />)
      }
    </div>
  );
};

export default CreateUnitTable;