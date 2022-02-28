import React from 'react';
import OddCol from '../OddCol/OddCol';
import classes from './ExtraOdd.module.css';
const ExtraOdd = () => {
    return (
        <div>
              <div className={classes["extra-table"]}>

                   <div className={classes["extra-table-body"]}>
           
                       <div className={classes["extra-table-content"]}>
                           <div className={classes["extra-flex"]}>

                  
        
                         <div className={classes["odd-name"]}>
                           <a href=""> 
                               <p>3 Period</p>
                 
                           </a>
                         </div>
                         <div className={classes["odd-underline"]}>
                           +42
                   
                         </div>
                     </div>
    
                
                   </div>
                   <OddCol ColType="extra" />
                 
         
                   </div>
                   
      
                 
               </div>
        </div>
    );
}

export default ExtraOdd;
