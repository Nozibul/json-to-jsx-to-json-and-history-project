import React from 'react'

import PropTypes from 'prop-types'


const HistorySection = ({histori, restoreHistory, restoreBtnFnc}) => {

  return (
    <>
       <div> 
          <p>History:</p>

          { histori.length === 0 ? (
             <small>There is no histori</small>
          ) : (
            <ul>
              {
                histori.map((historiItem)=> (
                <HistoryItem key={historiItem.id} 
                historiItem={historiItem}
                disabled={restoreHistory === historiItem.id}
                restoreBtnFnc={restoreBtnFnc}
                />))
              }
            </ul>
          )

          }
         
        </div>
    </>
  )
};
 

HistorySection.PropTypes = {
    histori:PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        inputs: PropTypes.shape({
            a:PropTypes.number.isRequired,
            b:PropTypes.number.isRequired
        }).isRequired ,
        operation: PropTypes.string.isRequired,
        results:PropTypes.number.isRequired,
        date: PropTypes.object.isRequired,
    })),
    restoreHistory:PropTypes.number.isRequired,
    restoreBtn: PropTypes.func.isRequired
}

export default HistorySection