
import ProfileCard from "../../../../components/ProfileCard/ProfileCard";
import Card from "../../../../components/UI/Card";
import classes from "./MProfile.module.css"
import ProfileDetail from "./ProfileDetail/ProfileDetail";

const MProfile = ()=>{

return(
    <div>
        <Card>
     <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Profile</h1>
     </div>
     <div className={classes["card-body"]}>
        <p>Master Info</p>
    <ProfileCard />
    </div>
        </Card>
        <Card>
        <div className={classes["card-header"]}>
        <h1 className={classes["card-title"]}>Personal Info</h1>
         <ProfileDetail />
        </div>
        </Card>
        
    </div>
)

}

export default MProfile;