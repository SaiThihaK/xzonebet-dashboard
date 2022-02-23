import React,{useState} from 'react';
import OddColItem from './OddColItem';
import classes from './OddDetailCol.module.css';


const OddDetailColOne = ({odd}) => {
     const counter=[1,2,3,4];
   const [showRow,setshowRow]=useState({
   show : {},
   }) 
   console.log(odd);

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
                <div className={classes["betHeader"]} onClick={() => handleClick(el)}>
                    <div >
                        <i className="fas fa-star"></i>
                        <span className={classes["betTitle"]}>{el.name}</span>
                    </div>
                    <i className={`fas fa-chevron-up  ${showRow.show[el] && classes['arrowRotate']}`} ></i>
                </div >
              <div className={`${ showRow.show[el] && classes['rowNone'] }`} >
                  {el.bookmaker.data[0].odds.data.map((el)=>{
                  return  <OddColItem />
                  } ) }
            
             
                </div>
            
             </div>
            )
        }) )} 
      
   
         
    
    
    
    
     
          
      
    
    
    
        </div>
    );
}

export default OddDetailColOne;
