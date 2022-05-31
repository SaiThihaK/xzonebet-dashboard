
import { Button, MenuItem, Select, TextField, IconButton } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import { toast } from 'react-toastify';
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard';
import { PostProvider } from '../../services/api-services';
import CustomGetFunction from '../../services/CustomGetFunction';
import classes from "./EmployeeForm.module.css"
import { ArrowDropDown } from "@mui/icons-material"
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import { getResDate } from '../../Controller/ChangeDate';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const EmployeeForm = () => {

  const [userId, setUserId] = useState("");
  const [department, setDepartment] = useState([]);
  const [logo, setlogo] = useState({});
  const [position, setPosition] = useState("")
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [skill, setSkill] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [countryId, setCountryId] = useState("");
  const [stateId, setStateId] = useState("");

  // working exp state
  const [expPosition, setExpPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [expStartDate, setExpStartDate] = useState(new Date());
  const [expEndDate, setExpEndDate] = useState(new Date());
  const [description, setDescription] = useState("");
  // Education
  const [eduDegree, setEduDegree] = useState("");
  const [eduSchool, setEduSchool] = useState("");
  const [eduStartDate, setEduStartDate] = useState(new Date());
  const [eduEndDate, setEduEndDate] = useState(new Date());
  const [note, setNote] = useState("");
  // ------------------------Condition---------------------------------------------------
  const [isPersonal, setIsPersonal] = useState(false);
  const [isWorkingExp, setWorkingExp] = useState(false);
  const [isEducation, setIsEducation] = useState(false);
  const { data: countryData } = CustomGetFunction('api/countries', []);
  if (countryId !== "") {
    var { data: stateData } = CustomGetFunction(`api/states/${countryId}`, [countryId]);
  }
  if (stateId !== "") {
    var { data: cityData } = CustomGetFunction(`api/cities/${stateId}`, [stateId]);
  }
  const { data } = CustomGetFunction("api/departments", []);
  const submitHandler = async (e) => {
    e.preventDefault();
    // if(!userId){
    //   toast.warning("Please enter User Id");
    //   return;
    // }
    if (department.length === 0) {
      toast.warning("Please select department");
      return;
    }
    if (!position) {
      toast.warning("Please select Position");
      return;
    }
    if (!name) {
      toast.warning("Please enter name");
      return;
    }
    if (!address) {
      toast.warning("Please enter address");
      return;
    }
    if (!phone) {
      toast.warning("Please enter  phone");
      return;
    }
    if (!email) {
      toast.warning("Please enter email");
      return;
    }
    if (!skill) {
      toast.warning("Please enter skill");
      return;
    }
    let work_histories = [{
      position: expPosition,
      company_name: companyName,
      start_date: getResDate(expStartDate),
      end_date: getResDate(expEndDate),
      description: description
    }];
    let educations = [{
      degree: eduDegree,
      school: eduSchool,
      start_date: getResDate(eduStartDate),
      end_date: getResDate(eduEndDate),
      note: note
    }];
    try {
      // let formdata = new FormData();
      // formdata.append("name",JSON.stringify(userId));
      const FormData = {
        department_id: department?.id,
        position_id: position,
        name: name,
        phone: phone,
        email: email,
        address: address,
        country: countryData[country].name,
        city: city,
        state: stateData[state].name,
        skill: skill,
        work_histories: work_histories,
        educations: educations
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
      // formdata.append('state',JSON.stringify(stateData[statMe].name));
      // formdata.append("skill",JSON.stringify(skill));
      // formdata.append("work_histories",JSON.stringify(work_histories));
      // formdata.append("educations",JSON.stringify(educations));
      // console.log("formdata",formdata.getAll());
      const response = await axios.request(PostProvider("api/employees", FormData));
      if (response.data.status === "success") {
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
      if (response.data.status === "error") {
        toast.error(response.data.message);
        return;
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error)
    }
  }

  const logoChange = (e) => setlogo(e.target.files[0]);
  return (
    <div>
      <h3 className={classes["hr_title"]}> HR Setting - Employee Create</h3>
      <PageTitleCard none={true} >
        <div className={classes["card-body"]}>


          <form className={classes["form"]}>
            <div className={classes["grid-template"]}>
              <div >
                {/* <div  className={classes["form-Control"]}>
      <label>User Name</label>
      <TextField size="small" fullWidth value={userId} onChange={(e)=>{setUserId(e.target.value)}}/>
    </div> */}
                {/* Department */}
                <div className={classes["form-Control"]} >
                  <label>Name</label>
                  <TextField size="small" fullWidth value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className={classes["form-Control"]}>
                  <label>Department</label>
                  <Select fullWidth size="small" value={department} onChange={(e) => setDepartment(e.target.value)}>
                    {
                      data?.map((dep, index) => (
                        <MenuItem key={index} value={dep}>
                          {dep.name}
                        </MenuItem>
                      ))
                    }
                  </Select>
                </div>
                {/* Position */}
                <div className={classes["form-Control"]}>
                  <label>Position</label>
                  <Select fullWidth size="small" value={position} onChange={(e) => setPosition(e.target.value)}>
                    {
                      department?.positions?.map((position, index) => (
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
                <div className={classes["form-Control-des"]} >

                  <label>Skill</label>

                  <textarea value={skill} onChange={(e) => { setSkill(e.target.value) }} />

                </div>

                {/* ------------------------------Email---------------------------------- */}
                <div className={classes["form-Control"]} style={{ marginTop: "20px" }}>
                  <label>E-mail</label>
                  <TextField size="small" fullWidth value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                {/* -------------------------Phone--------------------------------------- */}
                <div className={classes["form-Control"]}>
                  <label>Phone</label>
                  <TextField size="small" type="number" fullWidth value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                {/* ----------------------Address------------------------------------------ */}
                <div className={classes["form-Control"]}>
                  <label>Address</label>
                  <TextField size="small" fullWidth value={address} onChange={(e) => { setAddress(e.target.value) }} />
                </div>
                {/* -----------------------Country--------------------------------------------- */}
                <div className={classes["form-Control"]}>

                  <InputLabel id="demo-simple-select-label" >Country</InputLabel>

                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    sx={{ color: "black" }}
                    value={country}

                    size="small"
                    fullWidth

                    onChange={(e) => { setCountry(e.target.value); setCountryId(countryData[e.target.value].id); }}
                  >
                    {
                      countryData.map((el, index) => {
                        return (<MenuItem key={index} value={index} >{el.name}</MenuItem>)
                      })
                    }


                  </Select>
                  {/* <TextField size="small" fullWidth value={country} onChange={(e)=>{setCountry(e.target.value)}} /> */}
                </div>
                <div className={classes["form-Control"]}>
                  <label>State</label>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    sx={{ color: "black" }}

                    size="small"
                    fullWidth

                    onChange={(e) => { setState(e.target.value); setStateId(countryData[e.target.value].id); }}
                  >
                    {
                      stateData && stateData.map((el, index) => {
                        return (<MenuItem key={index} value={index} >{el.name}</MenuItem>)
                      })
                    }


                  </Select>
                </div>
                {/* -----------------------------City-------------------------------------------- */}
                <div className={classes["form-Control"]}>
                  <label>City</label>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    sx={{ color: "black" }}

                    size="small"
                    fullWidth

                    onChange={(e) => { setCity(e.target.value) }}
                  >
                    {
                      cityData && cityData.map((el, index) => {
                        return (<MenuItem key={index} value={el.name} >{el.name}</MenuItem>)
                      })
                    }


                  </Select>
                  {/* <TextField size="small" fullWidth value={city} onChange={(e)=>{setCity(e.target.value)}} /> */}
                </div>
              </div>
              {/*--------------------------Second Part----------------------*/}
              <div>
                {/* name */}
                <div className={classes.e_photo}>
                  <img src="data:image/jpeg;base64,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" alt="" />
                </div>
                <input type="file" name="" id="" />
                {/* -------------------------------State--------------------------------------------- */}

              </div>
            </div>
          </form>
          <div className={classes["line-brake"]}>  <hr /></div>

          {/* ------------------------------Working Exp-------------------------------- */}
          <div className={classes["work-flex"]}>
            <h3 className={classes["work-title"]}>Work History</h3>
            <button className={classes["btn-add"]}> Add New Work History</button>
          </div>


          <form className={classes["form"]}>
            <div className={classes["grid-template"]}>
              <div>
                <div className={classes["form-Control"]}>
                  <label>Position</label>
                  <TextField size="small" fullWidth value={expPosition} onChange={(e) => { setExpPosition(e.target.value) }} />
                </div>
                {/* --------------------------------Company---------------------------------------------------- */}
                <div className={classes["form-Control"]}>
                  <label>End Date</label>
                  <DatePicker value={expEndDate} setValue={setExpEndDate} />
                </div>
              </div>


              {/* ----------------------------------------------------------Form-Date---------------------------------------- */}
              <div>
                <div className={classes["form-Control"]}>
                  <label>Company Name</label>
                  <TextField size="small" fullWidth value={companyName} onChange={(e) => { setCompanyName(e.target.value) }} />
                </div>
                {/* -----------------------------Start Date----------------------------------------------------------------- */}
                <div className={classes["form-Control"]}>
                  <label>Start Date</label>
                  <DatePicker value={expStartDate} setValue={setExpStartDate} />
                </div>

                {/* --------------------------------------------------End Date------------------------------ */}


              </div>
            </div>
            {/*----------------------------------------------Description------------------------------------  */}

            <div className={classes["form-Control-des"]} style={{
              paddingLeft: "20px",
            }}>

              <label style={{
                width: "70px", marginRight: "20px",
                marginLeft: "20px"
              }} >Description</label>


              <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} style={{
                marginLeft: "20px"
              }} />

            </div>
          </form>

          <div className={classes["line-brake"]}>  <hr /></div>

          {/* ------------------------------Working Exp-------------------------------- */}
          <div className={classes["work-flex"]}>
            <h3 className={classes["work-title"]}>Education</h3>
            <button className={classes["btn-add"]}> Add Education</button>
          </div>

          {/* ----------------------------------------Education----------------------------------------- */}
          <form className={classes["form"]}>
            <div className={classes["grid-template"]}>
              <div>  <div className={classes["form-Control"]}>
                <label>Degree</label>
                <TextField size="small" fullWidth value={eduDegree} onChange={(e) => { setEduDegree(e.target.value) }} />
              </div>
                <div className={classes["form-Control"]}>
                  <label>Start Date</label>
                  <DatePicker value={eduStartDate} setValue={setEduStartDate} />
                </div>
                {/* --------------------------------School---------------------------------------------------- */}
              </div>
              <div>
                <div className={classes["form-Control"]}>
                  <label>School</label>
                  <TextField size="small" fullWidth value={eduSchool} onChange={(e) => { setEduSchool(e.target.value) }} />
                </div>

                {/* --------------------------------------------------End Date------------------------------ */}
                <div className={classes["form-Control"]}>
                  <label>End Date</label>
                  <DatePicker value={eduEndDate} setValue={setEduEndDate} />
                </div>
              </div>

            </div>
            {/* ----------------------------------------------------------Form-Date---------------------------------------- */}

            {/*----------------------------------------------Description------------------------------------  */}
            <div className={classes["form-Control-des"]} style={{
              paddingLeft: "20px",
            }}>

              <label style={{
                width: "70px", marginRight: "20px",
                marginLeft: "20px"
              }} >Note</label>


              <textarea value={note} onChange={(e) => { setNote(e.target.value) }} style={{
                marginLeft: "20px"
              }} />

            </div>

          </form>

          <div className={classes["btn-container"]}>
            <Button variant="contained" onClick={submitHandler}>Submit</Button>
          </div>

        </div>
      </PageTitleCard >
    </div >

  )
}

export default EmployeeForm



export const DatePicker = ({ value, setValue }) => {
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (<LocalizationProvider dateAdapter={AdapterDateFns}>
    <DesktopDatePicker
      inputFormat="MM/dd/yyyy"
      value={value}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} fullWidth size='small' />}
    />
  </LocalizationProvider>)
}