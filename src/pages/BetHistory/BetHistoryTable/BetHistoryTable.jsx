import React, { useState } from 'react'
import classes from "./BetHistoryTable.module.css"
import {Delete, KeyboardArrowDown, KeyboardArrowUp, SportsSoccer} from '@mui/icons-material';
import { IconButton } from '@mui/material';
const BetHistoryTable = () => {
    const [isToggle,setToggle] = useState(false);
    const toggleHandler = ()=>setToggle(!isToggle);
    const arr = ["1","2"];
  return (
      <div style={{marginTop:10}}>
      
       <table className={isToggle && classes["main-table"]}>
        <tr >
            <th>William Willson</th>
            <th><div>
                <p>№ 26194777845</p>
                <p>from 13.04.2022 <br/> | 16:30</p>
                </div></th>
            <th><div>
                <p>England.Premire</p>
                <p>Crystal Palace - Arsenal</p>
                </div></th>
            <th><div>
                <p>Bet</p>
                <p>2000MMK</p>
                </div></th>
            <th><div>
                <p>Bet Type</p>
                <p>Accumulator</p>
                </div></th>
            <th><div>
                <p>Bet Slip Status</p>
                <p>Unsettled</p>
            </div></th>
            <th> <p className={classes["total"]}>19990</p></th>
            <th><IconButton><Delete color='error'/></IconButton></th>
            <th><IconButton onClick={toggleHandler}>
             {isToggle ? (<KeyboardArrowUp />) : (<KeyboardArrowDown />)}   
                </IconButton></th>
        </tr>
    </table>
    {
        isToggle && ( arr.map((k,index)=>(<table className={classes["second-table"]}>
        <tr>
            <th className={classes["bet-tip"]}><p>Time of processing Unsettled</p></th>
            <th><SportsSoccer /></th>
            <th>
            Football. UEFA Champions League
                <br/>
             Liverpool - Benfica
             <br/>
             Start date and time: 13.04.2022 | 22:00
             <br/>
             Status: Not started yet
             <br/>
             </th>
            <th>Results</th>
            <th>Event W2</th>
            <th>Event Status Unsettled</th>
            <p className={classes["total"]} style={{marginTop:20}}>177</p>
           
            <th></th>
            <th></th>
        </tr>
    </table>)))
    }
   
      </div>
   
  )
}

export default BetHistoryTable