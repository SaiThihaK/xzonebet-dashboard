import React from 'react'
import "./FormLoading.css"
function FormLoading({height,width,color}) {
  const myStyle = {
    width: width,
    height: width,
    border: `5px solid  ${color}` ,
    borderColor: `${color}  transparent transparent transparent` 
  };
  return (
    <div className='Loading' style={{height: height }}>
    <div className="lds-ring"><div  style={myStyle}></div><div  style={myStyle}></div><div  style={myStyle}></div><div  style={myStyle}></div></div>
    </div>
  )
}
export default FormLoading;