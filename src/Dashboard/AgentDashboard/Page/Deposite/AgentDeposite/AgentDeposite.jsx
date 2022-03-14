import * as React from 'react';
import classes from "./AgentDeposite.module.css"
import Card from '../../../../../components/UI/Card';
import axios from 'axios';
import { getMethod } from '../../../../../services/api-services';
import {  List, ListItemButton, ListItemText,ListItemIcon} from '@mui/material';
import {Col, Row} from "react-bootstrap"
import PaymentIcon from '@mui/icons-material/Payment';



export default function AgentDeposite() {
const [provider,setProvider] = React.useState([]);
const [paymentType,setPaymentType] = React.useState([]);
const [paymentId,setPaymentId] = React.useState(1);

const fetchProviders = async()=>{
const {data} = await axios.request(getMethod(`/api/dashboard/payment-providers`));
// console.log(data.data)
setProvider(data.data);
}

const fetchPaymentType = async()=>{
const {data} = await axios.request(getMethod("/api/dashboard/payment-types"));
setPaymentType(data.data);
// console.log(data.data);
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
    <Row>
    <Col xs={4}>
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
            style={paymentId== payment.id ?  {borderLeft:"3px solid rgb(255, 0, 0)"}: {}}
            >
                <ListItemIcon>
                    <PaymentIcon/>
                </ListItemIcon>
                <ListItemText primary={payment.name} />
            </ListItemButton>
        ))}
    </List>
        </Card>
        </Col>
        <Col xs={8}>
        <Card>
     <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Payment Provider</h1>
     </div>
     <Row className={classes['prov-container']}  style={{ width: "100%" }}>
  {
      FilterPayment_Provider && FilterPayment_Provider.map((prov,index)=>(

          <Col 
              className={classes['prov']}
              xs={4}
              sm={4}
              md={4}
              lg={3}
              xl={3}
              key={index}>
              <Card>
              <img src={prov.logo ? prov.logo : "https://cdn.logojoy.com/wp-content/uploads/2018/05/30160306/447.png"} 
              alt="provider_logo"   width="100%" />
              <div className={classes['prov-title']}>
              <span>{prov.name}</span>
              </div>
              </Card>
 
          </Col>
        
      ))
  }
       </Row>
    </Card>
    </Col>
    </Row>
    </div>
  );
}