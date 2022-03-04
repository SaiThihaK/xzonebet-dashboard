import Card from "../../../../components/UI/Card";
import classes from "./CreatePaymentProvider.module.css"


const CreatePaymentProvider =()=>{
    return(
        <div className={classes["soccer-setting-container"]}>
        <Card>
          <div className={classes["card-header"]}>
            <h1 className={classes["card-title"]}>Payment Provider</h1>
          </div>
        </Card>
      </div>
    
    )
}

export default CreatePaymentProvider;