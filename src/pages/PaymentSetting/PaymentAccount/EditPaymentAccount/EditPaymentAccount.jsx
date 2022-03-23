import { FormControl, MenuItem, Select, TextField, Button } from "@mui/material";

import axios from "axios";
import { useEffect, useState } from "react";



import classes from "./EditPaymentAccount.module.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { logoutHandler } from "../../../../components/Sidebar/Sidebar";
import Card from "../../../../components/UI/Card";
import { useParams } from "react-router-dom";
import { PatchMethod } from "../../../../services/api-services";



const EditPaymentAccount = () => {
const [logo,setlogo] = useState("");
const [name,setName] = useState("");
const [account,setAccount] = useState("");


const nameChange = e=>setName(e.target.value);
const accountChange = e=>setAccount(e.target.value);

 
const logoChange = (e) => setlogo(e.target.files[0]);


const EditHandler = async()=>{
try{
let fd = new FormData();
fd.append("name",name);
fd.append("account_no",account);
const response = await axios.request(PatchMethod(`api/dashboard/payment-providers/${id}`,
fd
));
console.log(response)
}catch(error){
   console.log(error.response.data.message);
        if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
        logoutHandler();
        }
      }   
}
 
console.log("name",name);
console.log("account",account);

const {id} = useParams();
console.log(id);
  return (
    <div className={classes["soccer-setting-container"]}>
      <ToastContainer />
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]} >Payment Provider</h1>
        </div>
        <div className={classes["card-body"]}>
         
           <FormControl sx={{marginTop:5,width:700}} >
            <label>Account or Phone number</label>
            <TextField size="small" onChange={accountChange}   />
          </FormControl>

          <FormControl sx={{marginTop:5,width:700}} >
            <label>Name</label>
            <TextField size="small" onChange={nameChange}   />
          </FormControl>

          {/* <FormControl sx={{marginTop:5}} fullWidth>
            <label>Provider Logo</label>
            <TextField style={{ border: "none" }}  variant="standard" type="file" accept="image/png, image/jpeg" onChange={logoChange} />
          </FormControl> */}
         
          <Button variant="contained" onClick={EditHandler}  style={{ marginTop: 60,width:700 }}>Edit</Button>
        </div>
      </Card>
    </div>

  )
}

export default EditPaymentAccount;



