import React from 'react'
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard'
import KSHFunction from "../../services/KSHFunction"
import classes from "./PaymentGateway.module.css"
import PaymentGatewayTable from "./PaymentGatewayTable/PaymentGatewayTable"
import CustomLoading from '../../components/CustomLoading/CustomLoading'
const PaymentGateway = () => {
const {data,loading} =KSHFunction(`api/user/withdrawals`,[]);
console.log("this is data",data);
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