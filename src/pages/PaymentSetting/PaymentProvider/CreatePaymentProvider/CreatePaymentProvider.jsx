import { FormControl, MenuItem, Select, TextField, Button } from "@mui/material";

import axios from "axios";
import React,{ useEffect, useState } from "react";

import Card from "../../../../components/UI/Card";
import { getMethod, PostProvider } from "../../../../services/api-services";
import classes from "./CreatePaymentProvider.module.css"
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SelectCoun from "./SelectCoun";
import { logoutHandler } from "../../../../components/Sidebar/Sidebar";
import CustomGetFunction from "../../../../services/CustomGetFunction";



const CreatePaymentProvider = () => {

  const [payment_type, setPayment_type] = useState([]);
  const [payment_provider, setPayment_provider] = useState('');
  const [payment_typeValue, setPayment_typeValue] = useState('');
  const [logo, setlogo] = useState({});
  const [country, setCountry] = useState([]);
  const [coun,setCoun] = useState([]);
  const navigate = useNavigate();


  const payment_typeChange = (e) => setPayment_typeValue(e.target.value);
  const payment_providerChange = (e) => setPayment_provider(e.target.value);
  const logoChange = (e) => setlogo(e.target.files[0]);

  const {data} = CustomGetFunction(`api/dashboard/payment-types`,[]);
  const FetchPayment_type = async () => {
    try {
      const response = await axios.request(getMethod(`api/dashboard/payment-types`));
      if(response.data.status==="success"){
        setPayment_type(response.data.data);
        return;
      }
     
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message)
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
        logoutHandler();
      }
    }
  }
  const AlertToast = (toast, msg) => {
    return toast(msg);
  };

  useEffect(() => {
    FetchPayment_type();
    return () => setPayment_type([]);
  }, []);
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!payment_typeValue || !payment_provider ||!logo ||!country) {
      AlertToast(toast.warning, "Please fill all the field")
      return;
    }
    try {
      let fd = new FormData();
      fd.append("payment_type_id",payment_typeValue);
      fd.append("name",payment_provider);
      fd.append("logo",logo);
      fd.append("countries",JSON.stringify(country.map((c)=>c.id)));
      const response = await axios.request(PostProvider(`api/dashboard/payment-providers`,
      fd
      ));
      console.log(response);
      if(response.data.status==="success"){
      setPayment_provider("");
      setPayment_typeValue("");
      setlogo({});
      setCountry([]);
      AlertToast(toast.success,response.data.message)
      // navigate("/master/payment-setting/payment-provider")
      }
      if(response.data.status==="error"){
        AlertToast(toast.error,response.data.message)
      }
    } catch (error) {
      console.log(error.response.data.message)
      AlertToast(toast.error,error.response.data.message)
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
        logoutHandler();
      }
    }
  };


 
  const fetchCountries = async()=>{
    axios.request(getMethod(`api/countries`))
    .then(function (response) {
      setCoun(response.data.data);
    });
  }

  useEffect(()=>{fetchCountries()},[])
 
   
  



  return (
    <div className={classes["soccer-setting-container"]}>
      <ToastContainer />
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]} >Payment Provider</h1>
        </div>
        <div className={classes["card-body"]}>
          <FormControl sx={{marginTop:5}} fullWidth>
            <label>Payment Type</label>
            <Select value={payment_typeValue} size="small" onChange={payment_typeChange}>
              {
                data.map((a, index) => (
                  <MenuItem key={index} value={a.id}>{a.name}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
          <FormControl sx={{marginTop:5}} fullWidth>
            <label>Payment Provider</label>
            <TextField size="small" value={payment_provider}  onChange={payment_providerChange} />
          </FormControl>
          <FormControl sx={{marginTop:5}} fullWidth>
            <label>Choose Provider Logo</label>
            <TextField style={{ border: "none" }}  variant="standard" type="file" accept="image/png, image/jpeg" onChange={logoChange} />
          </FormControl>
          {/* <SelectCountries /> */}
          <SelectCoun country={country} setCountry={setCountry} />
          <Button variant="contained" onClick={submitHandler} style={{ marginTop: 20 }} fullWidth>Create</Button>
        </div>
      </Card>
    </div>

  )
}

export default CreatePaymentProvider;



