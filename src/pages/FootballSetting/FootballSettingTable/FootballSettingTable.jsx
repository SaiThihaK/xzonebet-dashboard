
import {Check, HourglassBottom, Person} from '@mui/icons-material';
import { Row } from "rsuite";
import { Col } from "react-bootstrap";
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
       <Row className={classes["card-body"]}>
        {
            items.map((item,index)=>(
                <Col key={index}
                xs={4}
                sm={4}
                md={4}
                lg={3}
                xl={3}>
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
                </Col>
            ))
        }
       </Row>
       </Card>
      )
  }
  
  export default FootballSettingTable;