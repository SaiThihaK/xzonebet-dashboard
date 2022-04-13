

import { Button, FormControl, TextField } from "@mui/material";
import axios from "axios";
import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Card from "../../../../components/UI/Card";
import TransferToModal from "../../../../components/UI/Modal/TransferTo/TransferToModal";
import { getRender, selectedRender } from "../../../../features/render";
import {  PostMethod } from "../../../../services/api-services";
import classes from "./TransferTo.module.css"


const TransferTo = ()=>{


const [toggle,setToggle] = useState(false);
const [id,setId] = useState("");
const [transfer_acc,setTransfer_acc] = useState([]);
const  [amount ,setAmount] = useState(0);
const [note,setNote] = useState("");
const AlertToast = (msg)=>msg;
const dispatch = useDispatch();
const render = useSelector (selectedRender);
const tansferUser = async()=>{
    try{
        if(!id){
            AlertToast(toast.warning("please type id to find the user"))
        }
        const response = await axios.request(PostMethod(`api/wallet/validate-transfer`,{
            receiver_user_id:id,
        }));
        console.log(response);
        if(response.data.status === "success"){
            console.log(id);
            setTransfer_acc(response.data.data);
            if(response.data.data.id == id){
                setToggle(true);
                return;
            }
        }
      if(response.data.status === "error"){
       AlertToast(toast.error("User is not found"))
      }
       
    }catch(error){
        console.log(error);
        AlertToast(toast.error(error.response.data.message))
    }
}

const transferHandler = async()=>{
    if(!amount){
        AlertToast(toast.error("Please Enter the amount u want to exchange"));
        return;
    }
    try{
    const response = await axios.request(PostMethod(`api/wallet/transfer-unit`,{
        amount,
        note,
        receiver_user_id:transfer_acc?.id,
        unit_type:"main_unit",
    }));
    if(response.data.status === "success"){
    AlertToast(toast.success(response.data.message));
    setAmount("");
    setNote("");
    setId("")
    setToggle(false);
    dispatch(getRender({render:!render}))
    return;
    }
    if(response.data.status === "error"){
        AlertToast(toast.error(response.data.message));
        return;
        // setTransfer_acc({});
    }
    }catch(error){
        console.log("error",error.response.data.message)
        AlertToast(toast.error(error.response.data.message));
    }
}



return(
    <div className={classes["container"]}>

        <Card>
     <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Transfer To</h1>
     </div>
     <div className={classes["card-body"]}>
       <FormControl sx={{width:700}}>
       <label>Transfer To Id Number</label>
       <TextField  size="small" value={id} onChange={(e)=>setId(e.target.value)}/>
       <div className={classes['btn']}>
          {
              !toggle &&
           (<Button onClick={()=>{
            tansferUser();
           }} variant="contained">Submit</Button>
       )
        }
        </div>
         </FormControl>
         
        { toggle &&<FormControl sx={{width:700}}>
         <h3>Transfer To {transfer_acc?.name || transfer_acc?.email || transfer_acc?.phone}</h3>
        <label>Enter your amount</label>
       <TextField className={classes["form-input"]} type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} />
     
       <label style={{marginTop:20}}>Note</label>
       <textarea rows={7} style={{padding:20,fontSize:16}} value={note} onChange={(e)=>setNote(e.target.value)}/>
       
       <div className={classes['btn']}>
           <Button variant="contained" onClick={()=>{
               transferHandler();
           }}>Transfer</Button>
       </div>
         </FormControl> }
    </div>
    </Card>
    {/* <TransferToModal open={open} handleClose={handleClose} /> */}
    </div>
)

}

export default TransferTo;