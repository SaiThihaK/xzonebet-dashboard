
import ProfileCard from "../../../../components/ProfileCard/ProfileCard";
import Card from "../../../../components/UI/Card";
import classes from "./MProfile.module.css"
import ProfileDetail from "./ProfileDetail/ProfileDetail";

const MProfile = ()=>{

return(
    <div style={{padding:20}}>
        <Card>
     <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>MasterInfo</h1>
     </div>
     <div className={classes["card-body"]}>
    <ProfileCard />
    </div>
        </Card>
        <div style={{marginTop:20}}>
        <Card>
        <div className={classes["card-header"]}>
        <h1 className={classes["card-title"]}>Personal Info</h1>
        </div>
        <div className={classes["card-body"]}>
        <ProfileDetail />
        </div>
        </Card>
        </div>
       
        
    </div>
)

}

export default MProfile;