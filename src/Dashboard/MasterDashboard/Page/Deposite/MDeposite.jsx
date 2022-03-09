

import MDepositeTable from "../../../../components/Table/MDepostie/MDepositeTable";
import Card from "../../../../components/UI/Card";
import classes from "./MDeposite.module.css"

const MDeposite = ()=>{

return(
    <div>
        <Card>
     <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Deposite</h1>
     </div>
     <div className={classes["card-body"]}>
    
    </div>
    <MDepositeTable />
        </Card>
    </div>
)

}

export default MDeposite;