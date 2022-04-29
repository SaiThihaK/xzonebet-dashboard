import { ResetTvRounded } from '@mui/icons-material';
import { Button, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import React, {  useState } from 'react'
import { toast } from 'react-toastify';
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard';
import { PostProvider } from '../../services/api-services';
import CustomGetFunction from '../../services/CustomGetFunction';
import classes from "./EmployeeForm.module.css"

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
   <form>
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
  {/* -----------------------Skill--------------------------------------------- */}
  <div  className={classes["form-Control"]}>
    <label>Skill</label>
    <TextField size="small" fullWidth value={skill} onChange={(e)=>{setSkill(e.target.value)}}/>
  </div>
 </div>
    </div>
  <div className={classes["btn-container"]}>
<Button type="submit" variant="contained" onClick={submitHandler}>Submit</Button>
  </div>
   </form>
   </div>
  </PageTitleCard>
  )
}

export default EmployeeForm