



import MDepositeTable from "../../../../components/Table/MDepostie/MDepositeTable";
import Card from "../../../../components/UI/Card";
import classes from "./ADeposite.module.css"

const ADeposite = ()=>{

return(
    <div>
        <Card>
     <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Deposite</h1>
     </div>
     <div className={classes["card-body"]}>
     <MDepositeTable />
    </div>

        </Card>
    </div>
)

}

export default ADeposite;