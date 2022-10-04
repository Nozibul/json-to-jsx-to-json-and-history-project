import React from 'react'
import PropTypes from 'prop-types';
import Button from '../ui/Button';


const HistoryItem = ({historiItem, disabled, restoreBtnFnc}) => {
  return (
    <>
      <li key={historiItem.id} style={{width:"80%", border:"1px solid green" , padding:"1rem" ,marginTop:"1rem", listStyle:"none"}}>
                   <p> Operation: {historiItem.inputs.a} {historiItem.operation} {historiItem.inputs.b}, Result:{historiItem.results}</p> 
                   <small>
                     Date: {historiItem.date.toLocaleDateString()} , 
                     Time: {historiItem.date.toLocaleTimeString()}
                   </small> <br />
                   
                   <Button 
                      text='Restore'
                      onClick={()=>restoreBtnFnc(historiItem)}
                      disabled={disabled} 
                    />

      </li>
    </>
  )
};

HistoryItem.PropTypes = {
    historiItem:PropTypes.shape({
        id: PropTypes.number.isRequired,
        inputs: PropTypes.shape({
            a:PropTypes.number.isRequired,
            b:PropTypes.number.isRequired
        }).isRequired ,
        operation: PropTypes.string.isRequired,
        results:PropTypes.number.isRequired,
        date: PropTypes.object.isRequired,

    }).isRequired ,
    disabled: PropTypes.bool.isRequired,
    restoreBtn: PropTypes.func.isRequired
};

HistoryItem.defaultProps  = {
    disabled: false
}

export default HistoryItem