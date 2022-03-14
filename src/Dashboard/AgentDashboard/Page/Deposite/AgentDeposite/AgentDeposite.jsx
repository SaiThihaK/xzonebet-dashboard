import * as React from 'react';
import classes from "./AgentDeposite.module.css"
import Card from '../../../../../components/UI/Card';
import axios from 'axios';
import { getMethod } from '../../../../../services/api-services';
import { List, ListItemButton, ListItemText } from '@mui/material';

const drawerWidth = 240;

export default function AgentDeposite() {
const [provider,setProvider] = React.useState([]);
const [paymentType,setPaymentType] = React.useState([]);
const [paymentId,setPaymentId] = React.useState('');

const fetchProviders = async()=>{
const {data} = await axios.request(getMethod(`/api/dashboard/payment-providers`));

setProvider(data);
}

const fetchPaymentType = async()=>{
const {data} = await axios.request(getMethod("/api/dashboard/payment-types"));
setPaymentType(data.data);
console.log(data.data);
}

React.useEffect(()=>{
    fetchProviders();
    fetchPaymentType();
    return ()=>{
        setProvider([]);
        setPaymentType([]);
    }
},[]);
console.log(paymentId)
  return (
    <div className={classes['grid-container']}>
    
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
                setPaymentId(paymentType.id);
            }}>
                <ListItemText primary={payment.name} />
            </ListItemButton>
        ))}
    </List>
        </Card>
        <Card>
     <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Payment Provider</h1>
     </div>
    </Card>
    </div>
      
  );
}