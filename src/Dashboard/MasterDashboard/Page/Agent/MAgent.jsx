import React from "react";
import PageTitleCard from "../../../../components/UI/PageTitleCard/PageTitleCard"
import MasterSettingCard from "../../../../pages/Master/MasterSettingCard/MasterSettingCard";
import CustomGetFunction from "../../../../services/CustomGetFunction";
import classes from "./MAgent.module.css"

const MAgent = () => {
  const {data} = CustomGetFunction("api/agents?sortColumn=id&sortDirection=desc&limit=30&agent_level=agent",[]);

  
  return (
    <PageTitleCard title="Agent">
       <div className={classes["card-body"]}>
            <div className={classes['soccer-setting-content-flex']}>
            <MasterSettingCard name="New Agents" bgColor="#2ED8B6" path="new-agent" userNum={data?.length} />
            <MasterSettingCard name="Agents" bgColor="#2ED8B6" path="agents" userNum="5" />
            </div>
            </div>
   
    </PageTitleCard>
  
  );
};

export default MAgent;
