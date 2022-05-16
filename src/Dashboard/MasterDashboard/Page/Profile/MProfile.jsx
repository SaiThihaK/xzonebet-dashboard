
import { useSelector } from "react-redux";
import ProfileCard from "../../../../components/ProfileCard/ProfileCard";
import Card from "../../../../components/UI/Card";
import { userInfo } from "../../../../features/UserInfo";

import classes from "./MProfile.module.css"
import ProfileDetail from "./ProfileDetail/ProfileDetail";

const MProfile = ()=>{
const userData = useSelector(userInfo);
const type = localStorage.getItem("type");
console.log("userData",userData);
return(
    <div className={classes["container"]}>
        <Card>
     <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>
              {
                  type === "master" ? "SuperMaster Info":"Master Info"
              }
          </h1>
     </div>
     <div className={classes["card-body"]}>
    <ProfileCard />
    </div>
        </Card>
        <div className={classes["personal-info-card"]}>
        <Card>
        <div className={classes["card-header"]}>
        <h1 className={classes["card-title"]}>Info</h1>
        </div>
        <div className={classes["card-body"]}>
        <ProfileDetail  />
        </div>
        </Card>
        </div>
       
        
    </div>
)

}

export default MProfile;