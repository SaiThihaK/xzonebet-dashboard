import { Grid } from "@mui/material";
import CustomLoading from "../../components/CustomLoading/CustomLoading";
import MemberCard from "../../components/MemberCard/MemberCard";
import Nodata from "../../components/Nodata/Nodata";
import PageTitleCard from "../../components/UI/PageTitleCard/PageTitleCard"
import CustomGetFunction from "../../services/CustomGetFunction"
import classes from "./BecomeAnPartner.module.css"
const BecomeAnPartnerSup = ()=>{
const {data,loading} = CustomGetFunction(`api/affiliate-register-lists?sortColumn=id&sortDirection=desc&status=pending`,[]);
console.log(data);
return (
    <PageTitleCard title="Become an Partner">
        {
          loading ? ( <div className={classes["card-body"]}>
          {
            data.length !==0 ? (  <Grid container spacing={5}>
              {
              
                data.length !==0 && data.map((master,index)=>(
                 <Grid item xs={6} key={index}>
                    <MemberCard partner={master} path={"/dashboard/become-an-agent/detail/"} status />
                   </Grid>
                 
                ))
              }
            </Grid>):(<Nodata />)
          }
          
        </div>):(<CustomLoading/>)
        }
       
       </PageTitleCard>
  );
}

export default BecomeAnPartnerSup;