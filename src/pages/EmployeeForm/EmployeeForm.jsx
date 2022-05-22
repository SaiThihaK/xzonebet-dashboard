
import { Button, MenuItem, Select, TextField,IconButton } from '@mui/material';
import axios from 'axios';
import React, {  useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import { toast } from 'react-toastify';
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard';
import { PostProvider } from '../../services/api-services';
import CustomGetFunction from '../../services/CustomGetFunction';
import classes from "./EmployeeForm.module.css"
import {ArrowDropDown} from "@mui/icons-material"
import {  DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import { getResDate } from '../../Controller/ChangeDate';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const EmployeeForm = () => {

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
  const [countryId, setCountryId] = useState("");
  const [stateId, setStateId] = useState("");
 
  // working exp state
  const [expPosition,setExpPosition] = useState("");
  const [companyName,setCompanyName] = useState("");
  const [expStartDate,setExpStartDate] = useState(new Date());
  const [expEndDate,setExpEndDate]     = useState(new Date());
  const [description,setDescription] = useState("");
  // Education
  const [eduDegree,setEduDegree] = useState("");
  const [eduSchool,setEduSchool] = useState("");
  const [eduStartDate,setEduStartDate] = useState(new Date());
  const [eduEndDate,setEduEndDate] = useState(new Date());
  const [note,setNote] = useState("");
  // ------------------------Condition---------------------------------------------------
  const [isPersonal,setIsPersonal] = useState(false);
  const [isWorkingExp,setWorkingExp] = useState(false);
  const [isEducation,setIsEducation] = useState(false);

  const {data : countryData} = CustomGetFunction('api/countries',[]);
  const {data : stateData} = CustomGetFunction(`api/states/${countryId}`,[countryId]);
  const {data : cityData} = CustomGetFunction( `api/cities/${stateId}`,[stateId]);
  const {data} = CustomGetFunction("api/departments",[]);
  const submitHandler = async(e)=>{
    e.preventDefault();
    // if(!userId){
    //   toast.warning("Please enter User Id");
    //   return;
    // }
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
    let work_histories = [{
      position:expPosition,
      company_name:companyName,
      start_date:getResDate(expStartDate),
      end_date:getResDate(expEndDate),
      description:description
    }];
  let educations = [{
    degree:eduDegree,
    school:eduSchool,
    start_date:getResDate(eduStartDate),
    end_date:getResDate(eduEndDate),
    note:note
  }];
    try{
      // let formdata = new FormData();
      // formdata.append("name",JSON.stringify(userId));
      const FormData= {
        department_id : department?.id,
        position_id :position,
        name : name,
        phone : phone,
        email: email,
        address : address,
        country: countryData[country].name,
        city : city,
        state : stateData[state].name,
        skill: skill,
        work_histories:  work_histories,
        educations : educations
      }
      // formdata.append("department_id",JSON.stringify(department?.id));
      // formdata.append("position_id",JSON.stringify(position));
      // formdata.append("avatar",JSON.stringify(logo));
      // formdata.append("name",JSON.stringify(name));
      // formdata.append("email",JSON.stringify(email));
      // formdata.append("phone",JSON.stringify(phone));
      // formdata.append("address",JSON.stringify(address));
      // formdata.append("country",JSON.stringify(countryData[country].name));
      // formdata.append("city",JSON.stringify(city));
      // formdata.append('state',JSON.stringify(stateData[state].name));
      // formdata.append("skill",JSON.stringify(skill));
      // formdata.append("work_histories",JSON.stringify(work_histories));
      // formdata.append("educations",JSON.stringify(educations));
      // console.log("formdata",formdata.getAll());
   const response = await axios.request(PostProvider("api/employees",FormData));
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
     setExpPosition("");
     setCompanyName("");
     setExpStartDate(new Date());
     setExpEndDate(new Date());
     setDescription("");
  setEduDegree("");
   setEduSchool("");
   setEduStartDate(new Date());
   setEduEndDate(new Date());
   setNote("");
 
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
    <div className={classes["title-form"]} onClick={()=>{setIsPersonal((prev)=>!prev)}}>
     <h3>Personal Detail</h3>
     <div className={classes["plus-box"]}>
   <IconButton >
    {
     isPersonal ? <ArrowDropDown/> :  <ArrowDropUpIcon/>
     }
     </IconButton>
     </div>
    </div>
    {
      isPersonal &&    <form className={classes["form"]}>
      <div className={classes["grid-template"]}>
   <div>
   {/* <div  className={classes["form-Control"]}>
      <label>User Name</label>
      <TextField size="small" fullWidth value={userId} onChange={(e)=>{setUserId(e.target.value)}}/>
    </div> */}
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
    {/* <div className={classes["form-Control"]}>
        <label>Choose Provider Logo</label>
        <TextField variant="standard" type="file" accept="image/png, image/jpeg" onChange={logoChange} fullWidth />
            </div> */}
            {/*==================================================Skill=======================================================  */}
            <div className={classes["form-Control-des"]}>
              <div style={{width: "100%"}}>
              <label>Skill</label>
              </div>
    
       <textarea rows="6" cols="50" value={skill} onChange={(e)=>{setSkill(e.target.value)}} />
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
     
      <InputLabel id="demo-simple-select-label" >Country</InputLabel>

      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         sx={{color: "black"}}
          value={country}
          
          size="small"
           fullWidth
         
          onChange={(e)=>{setCountry(e.target.value) ; setCountryId( countryData[e.target.value].id );  } }
        >
          {
            countryData.map((el,index) =>
              {
            return  (<MenuItem key={index} value={index} >{el.name}</MenuItem>)
            })
          }
         
        
        </Select>
      {/* <TextField size="small" fullWidth value={country} onChange={(e)=>{setCountry(e.target.value)}} /> */}
    </div>
    <div  className={classes["form-Control"]}>
      <label>State</label>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         sx={{color: "black"}}
 
          size="small"
           fullWidth
         
          onChange={(e)=> {setState(e.target.value) ; setStateId( countryData[e.target.value].id );  } }
        >
          {
         stateData && stateData.map((el,index) =>
              {
                return  (<MenuItem key={index} value={index} >{el.name}</MenuItem>)
            })
          }
         
        
        </Select>
    </div>
   {/* -----------------------------City-------------------------------------------- */}
   <div  className={classes["form-Control"]}>
      <label>City</label>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         sx={{color: "black"}}
 
          size="small"
           fullWidth
         
           onChange={(e)=> {setCity(e.target.value)   } }
        >
          {
         cityData && cityData.map((el,index) =>
              {
                return  (<MenuItem key={index} value={el.name} >{el.name}</MenuItem>)
            })
          }
         
        
        </Select>
      {/* <TextField size="small" fullWidth value={city} onChange={(e)=>{setCity(e.target.value)}} /> */}
    </div>
  {/* -------------------------------State--------------------------------------------- */}

   </div>
      </div>
     </form>
    }
    {/* ------------------------------Working Exp-------------------------------- */}
     <div className={classes["title-form"]} onClick={()=>{setWorkingExp((prev)=>!prev)}}>
     <h3>Working Experience</h3>
     <div className={classes["plus-box"]}>
   <IconButton >
    {
     isWorkingExp ? <ArrowDropDown/> :  <ArrowDropUpIcon/>
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
      {/* ----------------------------------------------------------Form-Date---------------------------------------- */}
      <div className={classes["grid-template"]}>
        {/* -----------------------------Start Date----------------------------------------------------------------- */}
      <div  className={classes["form-Control"]}>
      <label>Start Date</label>
     <DatePicker value={expStartDate} setValue={setExpStartDate} />
       </div>
     
      {/* --------------------------------------------------End Date------------------------------ */}
      <div  className={classes["form-Control"]}>
      <label>End Date</label>
     <DatePicker value={expEndDate} setValue={setExpEndDate} />
       </div>
       </div>
       {/*----------------------------------------------Description------------------------------------  */}
       <div className={classes["form-Control-des"]}>
       <div style={{width: "100%",marginLeft: "40px"}}>
       <label >Description</label>
              </div>
     
       <textarea rows="6" cols="50" value={description} onChange={(e)=>{setDescription(e.target.value)}} />
       </div>
      </form>
    }
    <div className={classes["title-form"]} onClick={()=>{setIsEducation((prev)=>!prev)}}>
     <h3>Education</h3>
     <div className={classes["plus-box"]}>
   <IconButton >
    {
     isEducation ? <ArrowDropDown/> :  <ArrowDropUpIcon/>
    }
     </IconButton>
    
     </div>
    </div>
     {/* ----------------------------------------Education----------------------------------------- */}
     {
      isEducation && <form className={classes["form"]}>
       <div className={classes["grid-template"]}>
       <div  className={classes["form-Control"]}>
      <label>Degree</label>
      <TextField size="small" fullWidth value={eduDegree} onChange={(e)=>{setEduDegree(e.target.value)}}/>
       </div>
       {/* --------------------------------School---------------------------------------------------- */}
       <div  className={classes["form-Control"]}>
      <label>School</label>
      <TextField size="small" fullWidth value={eduSchool} onChange={(e)=>{setEduSchool(e.target.value)}}/>
       </div>
       </div>
      {/* ----------------------------------------------------------Form-Date---------------------------------------- */}
      <div className={classes["grid-template"]}>
        {/* -----------------------------Start Date----------------------------------------------------------------- */}
      <div  className={classes["form-Control"]}>
      <label>Start Date</label>
     <DatePicker value={eduStartDate} setValue={setEduStartDate} />
       </div>
     
      {/* --------------------------------------------------End Date------------------------------ */}
      <div  className={classes["form-Control"]}>
      <label>End Date</label>
     <DatePicker value={eduEndDate} setValue={setEduEndDate} />
       </div>
       </div>
       {/*----------------------------------------------Description------------------------------------  */}
       <div className={classes["form-Control-des"]}>
       <div style={{width: "100%",marginLeft: "40px"}}>
       <label >Note</label>
              </div>
       <textarea rows="6" cols="50" value={note} onChange={(e)=>{setNote(e.target.value)}} />
       </div>
      </form>
    }
  <div className={classes["btn-container"]}>
    <Button variant="contained" onClick={submitHandler}>Submit</Button>
  </div>

   </div>
  </PageTitleCard>
  )
}

export default EmployeeForm



export const DatePicker = ({value,setValue})=>{
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return(<LocalizationProvider dateAdapter={AdapterDateFns}>
    <DesktopDatePicker
inputFormat="MM/dd/yyyy"
value={value}
onChange={handleChange}
renderInput={(params) => <TextField {...params} fullWidth size='small' />}
/>
 </LocalizationProvider>)
}