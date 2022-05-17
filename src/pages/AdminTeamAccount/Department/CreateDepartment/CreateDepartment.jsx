import { Button,  Grid,  TextField } from '@mui/material'
import React, { useState } from 'react'
import OdooFunction from '../../../../components/OdooFunctions/OdooFunction'
import PageTitleCard from '../../../../components/UI/PageTitleCard/PageTitleCard'
import classes from "./CreateDepartment.module.css"
import {toast} from 'react-toastify'
import axios from "axios"
import {PostMethod} from "../../../../services/api-services"
import CustomGetFunction from '../../../../services/CustomGetFunction';
import CustomLoading from '../../../../components/CustomLoading/CustomLoading';
import Nodata from '../../../../components/Nodata/Nodata'
import { useNavigate } from 'react-router-dom'
import {MdManageAccounts} from "react-icons/md"
import {MdOutlinePayment} from "react-icons/md"
import {FaDatabase} from "react-icons/fa"

const CreateDepartment = () => {
const [functionName,setFunctionName] = useState([]);
const [name,setName] = useState("");
const navigate = useNavigate();
const {data,loading } = CustomGetFunction("api/admin/permissions",[])
const createDepartment = async()=>{
  try{
 const response = await axios.request(PostMethod("api/departments",{
   name,
   permissions:functionName
 }));
 if(response.data.status==="success"){
   toast.success(response.data.message);
   setName("");
   setFunctionName([]);
   navigate("/department")
   return
 }
 if(response.data.status==="error"){
   toast.error(response.data.message)
 }
  }catch(error){
  toast.error(error.response.data.message)
  }
}

const OdooClick = (name)=>{
  setFunctionName((prevState)=>([
    ...prevState,name
  ]))
}

const dummyData=[
  {
    "title": "Account Management",
    "text" : "This Function is responsible for managing accounts",
     "icon":  <MdManageAccounts style={{ fontSize: "45px",color: "white" }}/>,
     "bg" : "blueviolet"
  },
  {
    "title": "Payment Setting ",
    "text" : "This Function is responsible for  payment setting",
    "icon":  <MdOutlinePayment style={{ fontSize: "45px",color: "white" }}/>,
    "bg" : "#F2DB45"
  },
  {
    "title": "Unit Setting ",
    "text" : "This Function is responsible for unit setting",
    "icon":  <FaDatabase style={{ fontSize: "45px",color: "white" }}/>,
    "bg" : "#49F338"

  }
]

console.log(functionName)

  return (
    <div>
        <PageTitleCard title="Create Department">
            <div className={classes["form-container"]}>
            
            <div className={classes["form-contol"]}>
            <label>Department</label>
            <TextField size='small' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className={classes["form-contol"]}>
            {/* <label>Choose Function</label> */}
            {/* <Select
          labelid="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={functionName}
          size="small"
          // ref={arr}
          onChange={handleChange}
          renderValue={(selected) => selected.join(', ')}
        >
          {functionArr.map((func,index) => (
            <MenuItem key={index} value={func.name}>
              <Checkbox checked={functionName.indexOf(func.name) > -1} />
              <ListItemText>
                 {func.name}
             </ListItemText>
            </MenuItem>
          ))}
        </Select> */}
{
  // loading ? (
  <>
  {
    dummyData.length !== 0 ? ( <Grid container spacing={2}>
      {
       dummyData?.map((func,index)=>(
         <Grid item xs={4}  key={index}>
         <OdooFunction func={func} OdooClick={ OdooClick} />
         </Grid>
       ))
     }
     
     
     </Grid>):(<Nodata />)
  }
 
   </>
  //  ):(<CustomLoading />)
}

</div>
            
        <div className={classes["btn-container"]}>
        <Button variant="contained" onClick={createDepartment}>Create</Button>
        </div>
            </div>
        </PageTitleCard>
    </div>
  )
}

export default CreateDepartment