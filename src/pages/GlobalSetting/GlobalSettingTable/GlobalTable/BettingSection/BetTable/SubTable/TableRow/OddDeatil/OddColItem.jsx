import React   from 'react';
import { useSelector } from 'react-redux';
import classes from "./OddColItem.module.css";



const OddColItem = ({odd,team}) => {
    const oddType=useSelector((state) => state.oddSetting.odd);
// console.log(team);
    return (
        <div className={classes["betRowContainer"]}>
        <div className={classes["betRow"]}>
        {odd.bookmaker.data[0].odds.data.map((el)=>{
               if(team.hasOwnProperty(el.label)){
                   el.label=team[el.label];
               }
            return  (  
            <div className={classes["betData"]}>
                <div className={classes["betted"]}>{el.label} {el.handicap && `(${el.handicap})`} {el.total && `${el.total}`}</div>
                <div className={classes["betNum"]}>{el[oddType]} </div>
            </div>
           
            )
            } ) }
         
               
            
         </div>   
               </div> 
    
    );
}

export default OddColItem;
