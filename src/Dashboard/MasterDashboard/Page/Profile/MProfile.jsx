
import { useSelector } from "react-redux";
import ProfileCard from "../../../../components/ProfileCard/ProfileCard";
import Card from "../../../../components/UI/Card";
import { userInfo } from "../../../../features/UserInfo";
import { toast } from 'react-toastify';
import classes from "./MProfile.module.css"
import ProfileDetail from "./ProfileDetail/ProfileDetail";
import { useState } from "react";

const MProfile = ()=>{
const userData = useSelector(userInfo);
const type = localStorage.getItem("type");
const [render,setRender] = useState(false);

return(
    <div className={classes["container"]}>
        <Card>
     {/* <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>
              {
                  type === "master" ? "SuperMaster Info":"Master Info"
              }
          </h1>
     </div> */}
     {/* <div className={classes["card-body"]}>
    <ProfileCard />
    </div> */}
        </Card>
        <div className={classes["personal-info-card"]}>
        <Card>
        <div className={classes["card-header"]}>
        <h1 className={classes["card-title"]}>Info</h1>
        </div>
        <div className={classes["card-body"]}>
        <ProfileDetail userData={userData}  render={render} setRender={setRender} />
        </div>
        </Card>
        </div>
       
        
    </div>
)

}

export default MProfile;