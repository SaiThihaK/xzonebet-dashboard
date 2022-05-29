import React from 'react'
import PageTitleCard from '../../../../components/UI/PageTitleCard/PageTitleCard'
import CustomGetFunction from '../../../../services/CustomGetFunction'
import CompleteMasterDesc from '../../../Master/CompleteMaster/CompleteMasterDetail/CompleteMasterDesc/CompleteMasterDesc'
import classes from "./CompleteAffiliateAgent.module.css"
const CompleteAffiliateAgentDetail = () => {
  // const {data} = CustomGetFunction(``)
  return (
    <PageTitleCard title="Complete Affiliate Agent Detail">
      <div className={classes["card-body"]}>
        {/* <CompleteMasterDesc userInfo={data} /> */}
      </div>
    </PageTitleCard>
  )
}

export default CompleteAffiliateAgentDetail