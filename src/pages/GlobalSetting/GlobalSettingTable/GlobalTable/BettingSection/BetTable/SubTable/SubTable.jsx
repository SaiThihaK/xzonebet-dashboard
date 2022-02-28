import React ,{useState,useEffect} from 'react';
import classes from "./SubTable.module.css";
import TableRow from './TableRow/TableRow';

const SubTable=({data})=> {
  
    const [showRow,setshowRow]=useState({
        show : {},
        }) 
    
     const handleClick=(id)=>{
         setshowRow(prevState => ({
             show: { ...prevState.show, [id]: !(prevState.show[id]) }
           }));
          
     }
  
     
   
  return (
   
    <div className="sub-table">
             <div className={classes["table-title"]}>
                <div className={classes["left-table-item"]}>
                   <div className={classes["sport-logo"]}>

                       <i className="fas fa-futbol"></i>

                    </div>
                    <div className={classes["country-logo"]}>
                       <img src={data[0].league.data.logo_path} alt="" />
     

                    </div>
                    <div className={classes["league-name"]}>
                        <a href="">
                        {data[0].league.data.name} </a>
                           <div>
                               +
                           </div>
                    </div>
                </div>
 
                <div className={classes["bet-odds-title"]}>
                      <div>
                          1
                      </div>
                      <div onClick={()=>{handleClick(1)}} >
                  
                          X
                             
                               <ul className={ `${classes["market-dropdown"]} ${ !showRow.show[1] &&  classes["market-none"]}`}  >
                                   <li>
                                  Double change
                                   </li>
                                   <li>
                                 TOTAL
                                   </li>
                                   <li>
                                  HANDICAP
                                   </li>
                                   <li>
                                       IT1
                                   </li>
                                   <li>
                                         IT2
                                   </li>
                               </ul>
             
                               <div className={classes["bet_table_arrow"]}  >
                                   <i className="fas fa-angle-down"></i>
                                  </div>
          
        

                      </div>
                      <div>
                       2
                   </div>
                   <div>
                       1X2
        
                   </div>
                   <div onClick={()=>{handleClick(2)}} >
                       12
                       <ul className={ `${classes["market-dropdown"]} ${ !showRow.show[2] &&  classes["market-none"]}`}  >
                           <li>
                          Double change
                           </li>
                           <li>
                         TOTAL
                           </li>
                           <li>
                          HANDICAP
                           </li>
                           <li>
                               IT1
                           </li>
                           <li>
                                 IT2
                           </li>
                       </ul>
             
                       <div className={classes["bet_table_arrow"]}  >
                           <i className="fas fa-angle-down"></i>
                          </div>
             
                
          
                   </div>
                   <div>
                       2X
          
                   </div>

                   <div >
                       0
                   </div>
                   <div onClick={()=>{handleClick(3)}} >
                       Total
                       <ul className={ `${classes["market-dropdown"]} ${ !showRow.show[3] &&  classes["market-none"]}`}  >
                           <li>
                          Double change
                           </li>
                           <li>
                         TOTAL
                           </li>
                           <li>
                          HANDICAP
                           </li>
                           <li>
                               IT1
                           </li>
                           <li>
                                 IT2
                           </li>
                       </ul>
             
                       <div className={classes["bet_table_arrow"]}  >
                           <i className="fas fa-angle-down"></i>
                          </div>
    
                 
              
                   </div>
                   <div >
                       U
                   </div>
                   <div >
                       1
                   </div>
                   <div onClick={()=>{handleClick(4)}} >
                       HAND
                       <ul className={ `${classes["market-dropdown"]} ${ !showRow.show[4] &&  classes["market-none"]}`}  >
                           <li>
                          Double change
                           </li>
                           <li>
                         TOTAL
                           </li>
                           <li>
                          HANDICAP
                           </li>
                           <li>
                               IT1
                           </li>
                           <li>
                                 IT2
                           </li>
                       </ul>
             
                       <div className={classes["bet_table_arrow"]}  >
                           <i className="fas fa-angle-down"></i>
                          </div>
                  
             
                   </div>
                   <div >
                       2
                   </div>
                   <div >
                       0
                   </div>
                   <div onClick={()=>{handleClick(5)}} >
                       It1
                       <ul className={ `${classes["market-dropdown"]} ${ !showRow.show[5] &&  classes["market-none"]}`}  >
                           <li>
                          Double change
                           </li>
                           <li>
                         TOTAL
                           </li>
                           <li>
                          HANDICAP
                           </li>
                           <li>
                               IT1
                           </li>
                           <li>
                                 IT2
                           </li>
                       </ul>
             
                       <div className={classes["bet_table_arrow"]}  >
                           <i className="fas fa-angle-down"></i>
                          </div>
          
                   </div>
                   <div >
                       U
                   </div>
               
                </div>
            </div>
            {data.map((el)=>{
               
    
       

              return(<TableRow key={el.id} team1={el.localTeam.data.name} team2={el.visitorTeam.data.name} duration={el.time.starting_at.date} half={el.time.starting_at.time} odd={el.odds} /> )
            })}
               
        </div>

  )
}

export default SubTable