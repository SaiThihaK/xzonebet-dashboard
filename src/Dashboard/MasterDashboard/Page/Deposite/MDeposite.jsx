

import { useState } from "react";
import { ToastContainer } from "react-toastify";
import MDepositeTable from "../../../../components/Table/MDepostie/MDepositeTable";
import Card from "../../../../components/UI/Card";
import 'react-toastify/dist/ReactToastify.css';
import classes from "./MDeposite.module.css";

const MDeposite = ()=>{
const [num,setNum] = useState(0);

return(
    <div>
        <Card>
            <ToastContainer />
     <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Deposite</h1>
     </div>
     <div className={classes["card-body"]}>
     <MDepositeTable num={num} setNum={setNum}/>
    </div>
   
        </Card>
        
    </div>
)

}

export default MDeposite;