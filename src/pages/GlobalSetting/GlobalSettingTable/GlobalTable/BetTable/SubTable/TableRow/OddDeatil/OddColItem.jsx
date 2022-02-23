import React   from 'react';

import classes from "./OddColItem.module.css";



const OddColItem = () => {
    const h=[1,2,3];
    return (
      
            <div className={classes["betRowContainer"]}>
                
                   <div className={classes["betRow"]}>
                       <div className={classes["betData"]}>
                           <div className={classes["betted"]}>Watford</div>
                           <div className={classes["betNum"]}>2.1</div>
                       </div>
                       
    
                       <div className={classes["betData"]}>
                           <div className={classes["betted"]}>Watford</div>
                           <div className={classes["betNum"]}>2.1</div>
                       </div>
    
                       <div className={classes["betData"]}>
                           <div className={classes["betted"]}>Watford</div>
                           <div className={classes["betNum"]}>2.1</div>
                       </div>
                   </div>
                   
               </div> 
    
    );
}

export default OddColItem;
