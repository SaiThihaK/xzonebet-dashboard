import { FormControl, MenuItem, Select, TextField, Button } from "@mui/material";

import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./EditPaymentProvider.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from "../../../../components/UI/Card";
import { getMethod, PatchMethod } from "../../../../services/api-services";
import { useParams } from "react-router-dom";
import { logoutHandler } from "../../../../components/Sidebar/Sidebar";
import SelectCoun from "../CreatePaymentProvider/SelectCoun";
import CustomGetFunction from "../../../../services/CustomGetFunction";


const EditPaymentProvider = () => {
const [logo,setlogo] = useState({});
const [country, setCountry] = useState([]);
const [payment_typeValue,setPayment_typeValue] = useState("");
const [providerValue,setProviderValue] = useState("")

const payment_typeChange = e =>setPayment_typeValue(e.target.value);
const providerValueChange = e =>setProviderValue(e.target.value);

const {id} = useParams();
const ToastAlert = (toast,msg)=>toast(msg);
const logoChange = (e) => setlogo(e.target.files[0]);

const EditHandler = async()=>{
console.log("payment_type_id",payment_typeValue);
try{
let fd = new FormData();
fd.append("logo",logo);
fd.append("name",providerValue)
fd.append("payment_type_id",payment_typeValue);
fd.append("countries",country);

const response = await axios.request(PatchMethod(`api/dashboard/payment-providers/${id}`,
fd
));
console.log(response);
ToastAlert(toast.error("comming soon"));
}catch(error){
        toast.error(error.response.data.message)
        if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
        logoutHandler();
        }
      }   
}

 const {data} = CustomGetFunction("api/dashboard/payment-types",[id])
  return (
    <div className={classes["soccer-setting-container"]}>
      <ToastContainer />
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]} >Edit Payment Provider(Coming Soon)</h1>
        </div>
        <div className={classes["card-body"]}>
           <FormControl sx={{marginTop:5}} fullWidth>
               <Select size="small" value={payment_typeValue} onChange={payment_typeChange}>
                   {
                    data?.map((paym,index)=>(
                        <MenuItem key={index} value={paym.id}>
                            {
                                paym.name
                            }
                        </MenuItem>
                    ))
                   }
               </Select>

           </FormControl>
           <FormControl sx={{marginTop:5}} fullWidth>
            <label>Provider</label>
            <TextField value={providerValue} onChange={providerValueChange} style={{ border: "none" }} size="small"   />
          </FormControl>
    
          <FormControl sx={{marginTop:5}} fullWidth>
            <label>Provider Logo</label>
            <TextField style={{ border: "none" }} variant="standard"   type="file" accept="image/png, image/jpeg" onChange={logoChange} />
          </FormControl>

          <SelectCoun country={country} setCountry={setCountry} />

          <Button variant="contained" onClick={EditHandler}  style={{ marginTop: 60 }} fullWidth>Edit</Button>
        </div>
      </Card>
    </div>

  )
}

export default EditPaymentProvider;



