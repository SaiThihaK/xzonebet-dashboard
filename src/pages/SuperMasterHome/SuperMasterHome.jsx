import React from 'react'
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard'
import { completeMasterApi } from '../../services/api-collection'
import CustomGetFunction from '../../services/CustomGetFunction'
import MasterSettingCard from '../Master/MasterSettingCard/MasterSettingCard'
import classes from "./SuperMasterHome.module.css"
const SuperMasterHome = () => {
 const {data:completeMaster} = CustomGetFunction(completeMasterApi,[]);
 const {data:users} = CustomGetFunction(`api/users?sortColumn=id&sortDirection=desc&limit=30`,[]);
 const {data:affiliateAgent} = CustomGetFunction(`/apiaffiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=affiliate-agent`,[]);
  return (
    <PageTitleCard title="SuperMaster Dashboard">
        <div className={classes["card-body"]}>
        <div className={classes['soccer-setting-content-flex']}>
        <MasterSettingCard name="Users" bgColor="#FF5370" path="/dashboard/account/user/all-user"  userNum={users.length}/>
               <MasterSettingCard name="Agents" bgColor="#FFC107" path="/dashboard/account/agent/complete-agent" userNum="0" />
               <MasterSettingCard name="Masters" bgColor="#4099FF" path="/dashboard/account/master/complete-master"  userNum={completeMaster.length}/>
               <MasterSettingCard name="Affiliate Agents" bgColor="#2ED8B6" path="/dashboard/account/affiliate-agent/pending-affiliate-agent"  userNum={affiliateAgent.length}/>
           </div>
        </div>
    </PageTitleCard>
  )
}

export default SuperMasterHome