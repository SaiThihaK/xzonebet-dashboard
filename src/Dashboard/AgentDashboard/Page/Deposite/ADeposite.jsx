



import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import MDepositeTable from "../../../../components/Table/MDepostie/MDepositeTable";
import Card from "../../../../components/UI/Card";
import classes from "./ADeposite.module.css";
import 'react-toastify/dist/ReactToastify.css';

const ADeposite = ()=>{
const [num,setNum] = useState(0);


useEffect(()=>{

},[num])
return(
    <div>
        <ToastContainer />
        <Card>
     <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>User Deposite</h1>
     </div>
     <div className={classes["card-body"]}>
     <MDepositeTable num={num} setNum={setNum}/>
    </div>

        </Card>
    </div>
)

}

export default ADeposite;