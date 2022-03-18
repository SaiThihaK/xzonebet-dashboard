
import {Check, HourglassBottom, Person} from '@mui/icons-material';
import { Grid } from '@mui/material';
import Card from "../../../components/UI/Card";
import classes from "./FootballSettingTable.module.css";
const items = [
    {
        icon:<Person/>,
        text:"All User",
        body:"30"
    },
    {
        icon:<HourglassBottom/>,
        text:"Total Amount",
        body:"30000"
    },
    {
        icon:<Check/>,
        text:"Withdraw Today",
        body:"43434"
    },
    {
        icon:<Check/>,
        text:"Agent WithDraw Today",
        body:"4343"
    }
]

  const FootballSettingTable = ()=>{
      return(
       <Card>
       <Grid container className={classes["card-body"]}>
        {
            items.map((item,index)=>(
                <Grid item key={index}
                xs={3}>
                 <div className={classes["container"]}>
                     <div>
                         <span className={classes["head-icons"]}>
                          {item.icon}
                         </span>
                         <span className={classes["head-text"]}>
                           {item.text}
                         </span>
                     </div>
                     <h2 className={classes["body-text"]}>
                         {item.body}
                     </h2>
                 </div>
                </Grid>
            ))
        }
       </Grid>
       </Card>
      )
  }
  
  export default FootballSettingTable;