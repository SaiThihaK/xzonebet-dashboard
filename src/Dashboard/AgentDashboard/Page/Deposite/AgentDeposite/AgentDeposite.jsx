import * as React from 'react';
import classes from "./AgentDeposite.module.css"
import Card from '../../../../../components/UI/Card';
import axios from 'axios';
import { getMethod } from '../../../../../services/api-services';
import {  List, ListItemButton, ListItemText,ListItemIcon,Grid} from '@mui/material';

import PaymentIcon from '@mui/icons-material/Payment';
import { logoutHandler } from '../../../../../components/Sidebar/Sidebar';
import AgentDepositeModal from '../../../../../components/UI/Modal/DepositeModal/AgentDepositeModal/AgentDepositeModal';



export default function AgentDeposite() {
const [provider,setProvider] = React.useState([]);
const [paymentType,setPaymentType] = React.useState([]);
const [paymentId,setPaymentId] = React.useState(1);
const [open,setOpen] = React.useState(false);

const openHandler =()=>setOpen(true);
const closeHandler = ()=>setOpen(false);

const fetchProviders = async()=>{
try{
 const {data} = await axios.request(getMethod(`api/dashboard/payment-providers`));
    // console.log(data.data)
 setProvider(data.data);
}catch(error){
    if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
    logoutHandler();
    }
  }
}

const fetchPaymentType = async()=>{
try{

    const {data} = await axios.request(getMethod("api/dashboard/payment-types"));
    setPaymentType(data.data);
    // console.log(data.data);
}catch(error){
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
const FilterPayment_Provider = provider.filter((c)=>c.payment_type_id === paymentId);

// console.log(FilterPayment_Provider)
  return (
      <div>
          <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Agent Deposite</h1>
     </div>
    <Grid container spacing={3}>
        <Grid item xs={4}>
        <Card>
     <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Payment Type</h1>
     </div>
     <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',padding:"10px" }}
      component="nav"
    >
        {paymentType.map((payment,index)=>(
            <ListItemButton key={index} onClick={()=>{
                setPaymentId(payment.id)
            }}
            sx={{marginBottom:1}}
            style={paymentId === payment.id ?  {borderLeft:"3px solid rgb(255, 0, 0)"}: {}}
            >
                <ListItemIcon>
                    <PaymentIcon/>
                </ListItemIcon>
                <ListItemText primary={payment.name} />
            </ListItemButton>
        ))}
    </List>
        </Card>
        </Grid>
        <Grid item xs={8}>
        <Card>
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
               openHandler()
           }}
           >
              
              
              <Card>
              <img src={prov.logo ? prov.logo : "https://cdn.logojoy.com/wp-content/uploads/2018/05/30160306/447.png"} 
              alt="provider_logo"   width="100%" />
              <div className={classes['prov-title']}>
              <span>{prov.name}</span>
              </div>
              </Card>


              </Grid>
      ))
  }
       </Grid>
    </Card>
    </Grid>
    </Grid>
    <AgentDepositeModal open={open} closeHandler={closeHandler} />
    </div>
  );
}