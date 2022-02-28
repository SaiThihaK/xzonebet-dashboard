import React,{useEffect,useState} from "react";
import classes from  "./OddCol.module.css";

const OddCol = ({ColType,odd}) => {
 
//   const oddType=useSelector((state) => state.oddSetting.odd);
   const [showRow,setshowRow]=useState(false); 
    return (

        <div className={ ` ${ColType==="extra" && classes["c-height"]}  ${classes["odd-col"]}  `} >
            <div >
        <p className={classes["odd-value"]}> { (Boolean(odd[0]) && Boolean(odd[0].bookmaker.data[0].odds.data[0])) ?   odd[0].bookmaker.data[0].odds.data[0].value: " - " } </p>
         </div>
         <div >
        <p className={classes["odd-value"]}>  { (Boolean(odd[0]) && Boolean(odd[0].bookmaker.data[0].odds.data[1])) ?  odd[0].bookmaker.data[0].odds.data[1].value: " - " }</p>
     </div>
     <div >
        <p className={classes["odd-value"]}>  {  (Boolean(odd[0]) && Boolean(odd[0].bookmaker.data[0].odds.data[2])) ?  odd[0].bookmaker.data[0].odds.data[2].value: "   -   "}</p>
     </div>
     <div >
        <p className={classes["odd-value"]}>  { (Boolean(odd[5]) && Boolean(odd[5].bookmaker.data[0].odds.data[0])) ? odd[5].bookmaker.data[0].odds.data[0].value: " - "}</p>
     </div>
     <div >
        <p className={classes["odd-value"]}>  { (Boolean(odd[5]) && Boolean(odd[5].bookmaker.data[0].odds.data[1])) ? odd[5].bookmaker.data[0].odds.data[1].value: " - "}</p>
     </div>
     <div >
        <p className={classes["odd-value"]}>  { (Boolean(odd[5]) && Boolean(odd[5].bookmaker.data[0].odds.data[2])) ? odd[5].bookmaker.data[0].odds.data[2].value: " - "}</p>
     </div>
     <div >
        <p className={classes["odd-value"]}>  {  (Boolean(odd[1]) && Boolean(odd[1].bookmaker.data[0].odds.data[0])) ? odd[1].bookmaker.data[0].odds.data[0].value: " - "}</p>
     </div>
     <div className={classes["odd-btn"]} onClick={()=>{setshowRow(!showRow)}} >
        <p className={ `${classes["odd-value"]} ${classes["odd-btn"]}`  }> { (Boolean(odd[1]) && Boolean(odd[1].bookmaker.data[0].odds.data[0])) ? odd[1].bookmaker.data[0].odds.data[0].total: " - "  } </p>
        <ul className={ `${classes["market-dropdown"]} ${ !showRow &&  classes["market-none"]}  `}  >
               <li>
             <div className={classes["odd-value"]}>123</div>
             <div className={ `${classes["odd-value"]} ${classes["odd-btn-dp"]}`  }>23</div>
             <div className={classes["odd-value"]}>45</div>
               </li>
               <li>
               <div className={classes["odd-value"]}>123</div>
                   <div className={ `${classes["odd-value"]} ${classes["odd-btn-dp"]}`  }>23</div>
                   <div className={classes["odd-value"]}>45</div>
               </li>
               <li className={classes["market-dropdown-active"]}>
               <div className={classes["odd-value"]}>123</div>
                   <div className={ `${classes["odd-value"]} ${classes["odd-btn-dp"]}`  }>23</div>
                   <div className={classes["odd-value"]}>45</div>
               </li>
               <li>
               <div className={classes["odd-value"]}>123</div>
                   <div className={ `${classes["odd-value"]} ${classes["odd-btn-dp"]}`  }>23</div>
                   <div className={classes["odd-value"]}>45</div>
               </li>
               <li>
               <div className={classes["odd-value"]}>123</div>
                   <div className={ `${classes["odd-value"]} ${classes["odd-btn-dp"]}`  }>23</div>
                   <div className={classes["odd-value"]}>45</div>
               </li>
           </ul>
     </div>
     <div >
        <p className={classes["odd-value"]}> { (Boolean(odd[1]) && Boolean(odd[1].bookmaker.data[0].odds.data[1])) ? odd[1].bookmaker.data[0].odds.data[1].value: " - "  } </p>
     </div> 
     
   
         
       
         

</div>
    );
}

export default OddCol;

