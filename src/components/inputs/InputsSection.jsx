import React from 'react';
import PropTypes from 'prop-types';
import NumberField from '../ui/NumberField'

const InputSection = ({inputState, handlerInput}) => {
  return (
    <>
      <div>
        <h4>Inputs</h4>
          <NumberField 
            value={inputState.a} 
            onChange={handlerInput}
            // onChange={(e)=>handlerInput('a', e.target.value)}
            // onChange={(e)=>handlerInput({a: parseInt(e.target.value)})}
            name='a'
          />
          <NumberField 
            value={inputState.b} 
            onChange={handlerInput}
            // onChange={(e)=>handlerInput('b', e.target.value)}
            // onChange={(e)=>handlerInput({b: parseInt(e.target.value)})}
            name='b'
           />
      </div>
    </>
  )
};


InputSection.propTypes ={
    inputState: PropTypes.shape({
        a:PropTypes.number.isRequired,
        b:PropTypes.number.isRequired
    }).isRequired ,
    handlerInput: PropTypes.func.isRequired
}

export default InputSection