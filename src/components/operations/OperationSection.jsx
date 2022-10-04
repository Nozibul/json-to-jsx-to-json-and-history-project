
import React from 'react'
import Button from '../ui/Button';
import PropTypes from 'prop-types';
import shortId from 'shortid'

const OperationSection = ({handleArithmeticButton, handleClear}) => {
   const operations = [
    { id: shortId.generate(),  text:'+',  onClick: ()=>handleArithmeticButton('+') },
    { id: shortId.generate(),  text:'-',  onClick: ()=>handleArithmeticButton('-') },
    { id: shortId.generate(),  text:'*',  onClick: ()=>handleArithmeticButton('*') },
    { id: shortId.generate(),  text:'/',  onClick: ()=>handleArithmeticButton('/') },
    { id: shortId.generate(),  text:'%',  onClick: ()=>handleArithmeticButton('%') },
    { id: shortId.generate(),  text:'clear',  onClick: ()=>handleClear('clear') },
   ]
    
  return (
    <>
       <div style={{marginLeft:'1rem'}}>
          <h4>Operations:</h4>
           {/* <Button text='+' onClick={()=>handleArithmeticButton('+')} /> */}
           {/* <button onClick={handleClear}>Clear</button> */}
          {
            operations.map((ops)=>(
                <Button key={ops.id} text={ops.text} onClick={ops.onClick} />
            ))
          }

        </div>
    </>
  )
};


OperationSection.PropTypes ={
    handleArithmeticButton: PropTypes.func.isRequired,
    handleClear:PropTypes.func.isRequired
}

export default OperationSection