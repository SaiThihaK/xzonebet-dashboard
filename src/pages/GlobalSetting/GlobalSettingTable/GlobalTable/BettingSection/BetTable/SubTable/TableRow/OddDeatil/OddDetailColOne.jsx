import React,{useState} from 'react';
import OddColItem from './OddColItem';
import classes from './OddDetailCol.module.css';



const OddDetailColOne = ({odd,team}) => {
   
   const [showRow,setshowRow]=useState({
   show : {},
   }) 
 
    
const handleClick=(id)=>{
    setshowRow(prevState => ({
        show: { ...prevState.show, [id]: !(prevState.show[id]) }
      }));
     
}

    return (
        <div className={classes["betTable1"]}>
        { odd && ( odd.map((el)=>{
         
            return(
               
                <div className={classes["bgp"]}>
                <div className={classes["betHeader"]} onClick={() => handleClick(el.id)}>
                    <div >
                        <i className="fas fa-star"></i>
                        <span className={classes["betTitle"]}>{el.name}</span>
                    </div>
                    <i className={`fas fa-chevron-up  ${showRow.show[el.id] && classes['arrowRotate']}`} ></i>
                </div >
              <div className={`${ showRow.show[el.id] && classes['rowNone'] }`} >
                  <OddColItem odd={el} team={team} />
                 
            
             
                </div>
            
             </div>
            )
        }) )} 
      
   
         
    
    
    
    
     
          
      
    
    
    
        </div>
    );
}

export default OddDetailColOne;
