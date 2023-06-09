import React ,{useState} from 'react'; 

import Card from '../../../../../components/UI/Card';
import axios from 'axios';
import { getMethod } from '../../../../../services/api-services';
import {  List, ListItemButton, ListItemText,ListItemIcon,Grid, Button, Stack} from '@mui/material';

import PaymentIcon from '@mui/icons-material/Payment';
import { logoutHandler } from '../../../../../components/Sidebar/Sidebar';
import AgentDepositeModal from '../../../../../components/UI/Modal/DepositeModal/AgentDepositeModal/AgentDepositeModal';
import classes from "./AgentDeposite.module.css";
import { Box } from '@mui/material';
export default function AgentDeposite() {
const [provider,setProvider] = React.useState([]);
const [paymentType,setPaymentType] = React.useState([]);
const [paymentId,setPaymentId] = React.useState(1);
const [open,setOpen] = React.useState(false);
const [providerId,setProviderId] = React.useState();
const [btnClick,setBtnClick] = React.useState(false);

const openHandler =()=>setOpen(true);
const closeHandler = ()=>setOpen(false);

const fetchProviders = async()=>{
try{
 const {data} = await axios.request(getMethod(`api/dashboard/payment-providers`));
 if(data.status === "success"){
 // console.log(data.data)
 setProvider(data.data);
 return;
 }
   
}catch(error){
    console.log(error.response.data.message);
    if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
    logoutHandler();
    }
  }
}

const fetchPaymentType = async()=>{
try{
    
    const {data} = await axios.request(getMethod("api/dashboard/payment-types"));
    if(data.status === "success"){
        setPaymentType(data.data);
        // console.log(data.data);
        return;
    }
}catch(error){
    console.log(error.response.data.message)
    if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
    logoutHandler();
    }
  }
}

React.useEffect(()=>{
    fetchProviders();
    fetchPaymentType();
    return ()=>{
        setProvider([]);
        setPaymentType([]);
    }
},[]);
const [tag, setTag] = useState(1);
console.log(paymentType);
const FilterPayment_Provider = provider.filter((c)=>c.payment_type_id === paymentId);
const AlertToast = (toast,msg)=>{return toast(msg)};
  return (
    <div className={classes["deposit_container"]}> 
      <div className={classes["payment_method"]}>
        <div className={classes["lef_payment"]}>
          {paymentType.map((el, index) => {
            return (
              <div
                key={index}
                className={` ${classes["payment_item"]} ${
                  el.id === tag && classes["payment_item_active"]
                } `}
                onClick={() => {
                  setTag(el.id);
                
             setPaymentId(el.id)
                           
                        
                }}
              >
                <p>{el.name}</p>
              
              </div>
            );
          })}
        </div>
        <div className={classes["bank_container"]}>
      
        <Box sx={{borderRadius: "10px",marginLeft: "20px",backgroundColor: "#eee"}}>
     <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Payment Provider</h1>
     </div>
    
     <Grid  container spacing={3} className={classes["provider-grid"]}>
  {
      FilterPayment_Provider && FilterPayment_Provider.map((prov,index)=>(
          <Grid 
          item 
          xs={3} 
          key={index}
          className={classes["provider-card"]}
           onClick={()=>{
               openHandler();
               setProviderId(prov.id)
           }}
           >
              <Box sx={{borderRadius: "5px",backgroundColor: "white",padding: "5px",textAlign: "center"}}>
                  <Box sx={{textAlign: "center", padding: "10px"}}>
              <img src={prov.logo ? prov.logo : "https://cdn.logojoy.com/wp-content/uploads/2018/05/30160306/447.png"} 
              alt="provider_logo"   width="60%" />
              </Box>
              <div className={classes['prov-title']}>
              <p  >{prov.name}</p>
              </div>
              </Box>


              </Grid>
      ))
  }
       </Grid>
    </Box>
  
          {/* <div id="payment1" class="payment">
            {payment.map((el) => {
              return (
                <BankGroup
                  type="deposit"
                  show={el.id === tag}
                  name={el.name}
                  id={tag}
                  data={el.payment_providers}
                />
              );
            })}
          </div> */}
        </div>
      </div>
    <AgentDepositeModal 
    open={open} 
    closeHandler={closeHandler} 
    id={providerId} 
    AlertToast={AlertToast}
    />
  </div>
//       <div>

    //       <div className={classes["card-header"]}>
    //       <h1 className={classes["card-title"]}>Agent Deposite</h1>
    //  </div>
    // <Grid container spacing={3}>
    //     <Grid item xs={4}>
    //     <Card>
    //  <div className={classes["card-header"]}>
    //       <h1 className={classes["card-title"]}>Payment Type</h1>
    //  </div>
    //  <List
    //   sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',padding:"10px" }}
    //   component="nav"
    // >
    //     {paymentType.map((payment,index)=>(
    //         <ListItemButton key={index} onClick={(e)=>{
    //             setPaymentId(payment.id)
           
    //         }}
    //         sx={{marginBottom:1}}
    //         style={payment.id === paymentId ? {borderLeft:"solid 3px var(--secondary-color"}:{}}
    //         >
    //             <ListItemIcon>
    //                 <PaymentIcon className={classes["list-icon"]}/>
    //             </ListItemIcon>
    //             <ListItemText primary={payment.name} />
    //         </ListItemButton>
    //     ))}
    // </List>
    //     </Card>
    //     </Grid>
      
    // </Grid>
 
    // </div>
  );
}