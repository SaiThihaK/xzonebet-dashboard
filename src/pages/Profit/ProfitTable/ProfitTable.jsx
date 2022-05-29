import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BasedColor } from '../../../Controller/BasedColor';
import Card from "../../../components/UI/Card";
import { Box } from "@mui/material";
import classes from "./ProfitTable.module.css";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import CustomLoading from "../../../components/CustomLoading/CustomLoading";
import Nodata from "../../../components/Nodata/Nodata";
import { logoutHandler } from "../../../components/Sidebar/Sidebar";
import { ChangeDate } from "../../../Controller/ChangeDate";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: BasedColor.tableHead,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

const agentProfitTitle=[ 
  "Date","User Name", "Time","Transition ID","Amount","Type","Payment Data"
]
const MasterProfitTitile=[
  "Date","Type","Amount","Agent Name","Note"
]
const columns = [
  {
field: "id",
headerName: 'ID',
width: 100,
headerAlign: 'left',
editable: false,
 },
 {
  field: "date",
  headerName: 'Date',
  width: 200,
  headerAlign: 'left',
  editable: false,
  valueGetter:(params)=>params.row.readable_date,
  renderCell:(params)=> ChangeDate(params.row.created_at)
   },
   {
    field: "type",
    headerName: 'Type',
    width: 150,
    headerAlign: 'left',
    editable: false,
    valueGetter:(params)=> params.row.type ,
      // renderCell:(params)=> { return(  <Box sx={{backgroundColor: params.row.type ==="withdraw" ? "red" : "rgb(251,177,23)" ,color : "white",borderRadius: "7px",padding: "6px 5px",}}> {params.row.type}</Box>  ) }

     },
     {
      field: "amount",
      headerName: 'Amount',
      width: 150,
      headerAlign: 'left',
      editable: false,
      valueGetter:(params)=>params.row.amount
       },
       {
        field: "from",
        headerName: 'From',
        width: 150,
        headerAlign: 'left',
        editable: false,
        valueGetter:(params)=>params.row.sender_user.name
         },
         {
          field: "note",
          headerName: 'Note',
          width: 400,
          headerAlign: 'left',
          editable: false,
          valueGetter:(params)=>params.row.note 
           },
]
const ProfitTable = ({type,data,loading}) => {
  let TotalAmount=0;
  let TotalPen=0;
  let TotalAgentPen=0;
  let TotalProfit=0
  const addAmount=(el)=>{
TotalAmount=TotalAmount+el;
    return el
  }
  const addPercentage=(el)=>{
    TotalPen=TotalPen+el;
        return el
      }
      const addAgentPercentage=(el)=>{
        TotalAgentPen=TotalAgentPen+el;
            return el
          }
          const addProfit=(el)=>{
            TotalProfit=TotalProfit+el;
                return el;
              }
  console.log("master",type);
  return (  
      <>
    <Card>
  
 
    {
      loading ? (<div className={classes["table-margin"]}>
        
     
        {
          
        data.length !== 0 ? (<DataGrid columns={columns} rows={data}  components={{ Toolbar: GridToolbar }} />) : (<Nodata />)
        }
   
    </div>):(<CustomLoading />)
    }
    </Card>
    {type !== "master" && (
 <span className={classes["total-unit"]}>
 <span>Total Unit- 3000</span>
   </span>
    )}
   
    </>)
{/* <div className={classes["table-margin"]}>
      <DataGrid
        columns={columns}
        rows={master}
      />
</div> 
  ) */}
}

export default ProfitTable


