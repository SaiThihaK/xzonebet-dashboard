import React from 'react'
import { useParams } from 'react-router-dom'
import PageTitleCard from '../../../components/UI/PageTitleCard/PageTitleCard'
import CustomGetFunction from '../../../services/CustomGetFunction'
import SuperMasterDesc from '../../SuperMaster/SuperMasterCard/SuperMasterDetail/SuperMasterDesc/SuperMasterDesc'
import classes from "./EmployeeDetail.module.css"
const EmployeeDetail = () => {
    const {id} = useParams();
    console.log(id);
    const {data} = CustomGetFunction(`api/employees/${id}`,[id]);
    console.log("employee",data);
  return (
   <PageTitleCard title="Employee Detail">
       <div className={classes["card-body"]}>
       <SuperMasterDesc userInfo={data} />
       </div>
   </PageTitleCard>
  )
}

export default EmployeeDetail