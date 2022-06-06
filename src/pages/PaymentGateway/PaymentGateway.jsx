import React from 'react'
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard'
import CustomGetFunction from '../../services/CustomGetFunction'
import classes from "./PaymentGateway.module.css"
import PaymentGatewayTable from "./PaymentGatewayTable/PaymentGatewayTable"
import CustomLoading from '../../components/CustomLoading/CustomLoading'
const PaymentGateway = () => {
const {data,loading} = CustomGetFunction(`api/user/withdrawals`,[]);
console.log(data);
  return (
    <PageTitleCard title="Payment Gateway">
        <div className={classes["card-body"]}>
        {
            loading ? (<PaymentGatewayTable data={data} />):(<CustomLoading />)
        }
       
        </div>
    </PageTitleCard>
  )
}

export default PaymentGateway