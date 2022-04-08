import React from "react";
import PageTitleCard from "../../../../components/UI/PageTitleCard/PageTitleCard"
import MasterSettingCard from "../../../../pages/Master/MasterSettingCard/MasterSettingCard";
import classes from "./MAgent.module.css"

const MAgent = () => {
  
  return (
    <PageTitleCard title="Agent">
       <div className={classes["card-body"]}>
            <div className={classes['soccer-setting-content-flex']}>
            <MasterSettingCard name="New Agents" bgColor="#2ED8B6" path="new-agent" userNum="5" />
            <MasterSettingCard name="Agents" bgColor="#2ED8B6" path="agents" userNum="5" />
            </div>
            </div>
   
    </PageTitleCard>
  
  );
};

export default MAgent;
