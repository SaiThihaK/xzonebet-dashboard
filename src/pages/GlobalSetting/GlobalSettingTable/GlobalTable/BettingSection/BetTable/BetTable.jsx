import React, {useEffect,useState}  from 'react';
import classes from "./BetTable.module.css"

import SubTable from './SubTable/SubTable';


const BetTable = ({data}) => {
  
       
 const num=[1];
  
    return (
        <div className="betting_table">
            <div className={classes["mb-3"]}>
                
             
                  { 
                  Object.keys(data).map(function(key) {
                    return <SubTable key={key} data={data[key]} />
                   
                  })
                    
                
                 }      
                   
                 

            </div>

           
            </div> 
            
    );
} 

export default BetTable;
