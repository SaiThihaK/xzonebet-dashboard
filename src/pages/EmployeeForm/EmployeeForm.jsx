
import { Button, MenuItem, Select, TextField,IconButton } from '@mui/material';
import axios from 'axios';
import React, {  useState } from 'react'
import { toast } from 'react-toastify';
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard';
import { PostProvider } from '../../services/api-services';
import CustomGetFunction from '../../services/CustomGetFunction';
import classes from "./EmployeeForm.module.css"
import {AddBox,ArrowDropDown} from "@mui/icons-material"
import { DateRangePicker, DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
const EmployeeForm = () => {
  const {data} = CustomGetFunction("api/departments",[]);
  const [userId,setUserId] = useState("");
  const [department,setDepartment] = useState([]);
  const [logo,setlogo] = useState({});
  const [position,setPosition] = useState("")


  const [name,setName] = useState("");
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState("");
  const [address,setAddress]= useState("");
  const [skill,setSkill] = useState("");
  const [country,setCountry] = useState("");
  const [city,setCity] = useState("");
  const [state,setState] = useState("");

  // working exp state
  const [expPosition,setExpPosition] = useState("");
  const [companyName,setCompanyName] = useState("");
  const [expStartDate,setExpStartDate] = useState("");
  const [expEndDate,setEndDate]     = useState("");

  // ------------------------Condition---------------------------------------------------
  const [isPersonal,setIsPersonal] = useState(false);
  const [isWorkingExp,setWorkingExp] = useState(false);
  const submitHandler = async(e)=>{
    e.preventDefault();
    if(!userId){
      toast.warning("Please enter User Id");
      return;
    }
    if(department.length === 0){
      toast.warning("Please select department");
      return;
    }
    if(!position){
      toast.warning("Please select Position");
      return;
    }
    if(!name){
      toast.warning("Please enter name");
      return;
    }
    if(!address){
      toast.warning("Please enter address");
      return;
    }
    if(!phone){
      toast.warning("Please enter  phone");
      return;
    }
    if(!email){
      toast.warning("Please enter email");
      return;
    }
    if(!skill){
      toast.warning("Please enter skill");
      return;
    }
    try{
      let formdata = new FormData();
      formdata.append("user_id",userId);
      formdata.append("department_id",department?.id);
      formdata.append("position_id",position);
      formdata.append("avatar",logo);
      formdata.append("name",name);
      formdata.append("email",email);
      formdata.append("phone",phone);
      formdata.append("address",address);
      formdata.append("skill",skill);
   const response = await axios.request(PostProvider("api/employees",formdata));
   if(response.data.status==="success"){
     toast.success(response.data.message);
     setUserId("");
     setDepartment([]);
     setPosition("");
     setName("");
     setEmail("");
     setPhone("");
     setAddress("");
     setSkill("");
     return
   }
   if(response.data.status==="error"){
     toast.error(response.data.message);
     return;
   }
    }catch(error){
      toast.error(error.response.data.message);
      console.log(error)
    }
  }
  
  const logoChange = (e) => setlogo(e.target.files[0]);
  return (
  <PageTitleCard title="Employee Form">
   <div className={classes["card-body"]}>
    <div className={classes["title-form"]}>
     <h3>Personal Detail</h3>
     <div className={classes["plus-box"]}>
   <IconButton onClick={()=>{setIsPersonal((prev)=>!prev)}}>
    {
     isPersonal ? <ArrowDropDown/> :  <AddBox/>
     }
     </IconButton>
     </div>
    </div>
    {
      isPersonal &&    <form className={classes["form"]}>
      <div className={classes["grid-template"]}>
   <div>
   <div  className={classes["form-Control"]}>
      <label>User Id</label>
      <TextField size="small" fullWidth value={userId} onChange={(e)=>{setUserId(e.target.value)}}/>
    </div>
    {/* Department */}
    <div  className={classes["form-Control"]}>
      <label>Department</label>
      <Select fullWidth size="small" value={department} onChange={(e)=>setDepartment(e.target.value)}>
        {
          data?.map((dep,index)=>(
            <MenuItem key={index} value={dep}>
             {dep.name}
            </MenuItem>
          ))
        }
      </Select>
    </div>
    {/* Position */}
    <div  className={classes["form-Control"]}>
      <label>Position</label>
      <Select fullWidth size="small" value={position} onChange={(e)=>setPosition(e.target.value)}>
          {
          department?.positions?.map((position,index)=>(
            <MenuItem key={index} value={position.id}>
             {position.name}
            </MenuItem>
          ))
        }
      </Select>
    </div>
    {/* Avatar */}
    <div className={classes["form-Control"]}>
        <label>Choose Provider Logo</label>
        <TextField variant="standard" type="file" accept="image/png, image/jpeg" onChange={logoChange} fullWidth />
            </div>
   </div>
   {/*--------------------------Second Part----------------------*/}
   <div>
     {/* name */}
   <div  className={classes["form-Control"]}>
      <label>Name</label>
      <TextField size="small" fullWidth value={name} onChange={(e)=>{setName(e.target.value)}}/>
    </div>
  {/* ------------------------------Email---------------------------------- */}
  <div  className={classes["form-Control"]}>
      <label>E-mail</label>
      <TextField size="small" fullWidth value={email} onChange={(e)=>{setEmail(e.target.value)}} />
    </div>
    {/* -------------------------Phone--------------------------------------- */}
    <div  className={classes["form-Control"]}>
      <label>Phone</label>
      <TextField size="small" type="number" fullWidth value={phone} onChange={(e)=>setPhone(e.target.value)} />
    </div>
    {/* ----------------------Address------------------------------------------ */}
    <div  className={classes["form-Control"]}>
      <label>Address</label>
      <TextField size="small" fullWidth value={address} onChange={(e)=>{setAddress(e.target.value)}} />
    </div>
    {/* -----------------------Country--------------------------------------------- */}
    <div  className={classes["form-Control"]}>
      <label>Country</label>
      <TextField size="small" fullWidth value={country} onChange={(e)=>{setCountry(e.target.value)}} />
    </div>
  
   {/* -----------------------------City-------------------------------------------- */}
   <div  className={classes["form-Control"]}>
      <label>City</label>
      <TextField size="small" fullWidth value={city} onChange={(e)=>{setCity(e.target.value)}} />
    </div>
  {/* -------------------------------State--------------------------------------------- */}
  <div  className={classes["form-Control"]}>
      <label>State</label>
      <TextField size="small" fullWidth value={state} onChange={(e)=>{setState (e.target.value)}} />
    </div>
   </div>
      </div>
     </form>
    }
    {/* ------------------------------Working Exp-------------------------------- */}
     <div className={classes["title-form"]}>
     <h3>Working Experience</h3>
     <div className={classes["plus-box"]}>
   <IconButton onClick={()=>{setWorkingExp((prev)=>!prev)}}>
    {
     isWorkingExp ? <ArrowDropDown/> :  <AddBox/>
     }
     </IconButton>
     </div>
    </div>
    {
      isWorkingExp && <form className={classes["form"]}>
       <div className={classes["grid-template"]}>
       <div  className={classes["form-Control"]}>
      <label>Position</label>
      <TextField size="small" fullWidth value={expPosition} onChange={(e)=>{setExpPosition (e.target.value)}}/>
       </div>
       {/* --------------------------------Company---------------------------------------------------- */}
       <div  className={classes["form-Control"]}>
      <label>Company Name</label>
      <TextField size="small" fullWidth value={companyName} onChange={(e)=>{setCompanyName(e.target.value)}}/>
       </div>
       </div>
       {/* ----------------------------From-Date----------------------------------------------------- */}
      <div className={classes["grid-template"]}>
      <div  className={classes["form-Control"]}>
      <label>Start Date</label>
     <DatePicker value={expStartDate} setValue={setExpStartDate} />
       </div>
      </div> 
      
      
      </form>
    }
   </div>
  </PageTitleCard>
  )
}

export default EmployeeForm



export const DatePicker = ({value,setValue})=>{
  return(<LocalizationProvider dateAdapter={AdapterDateFns}>
    <DesktopDatePicker
inputFormat="MM/dd/yyyy"
value={value}
onChange={(e)=>{setValue(e.target.value)}}
renderInput={(params) => <TextField {...params} fullWidth size='small' />}
/>
 </LocalizationProvider>)
}