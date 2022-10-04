
import React, { useState } from 'react'
import HistorySection from './components/history/HistorySection';
import InputsSection from './components/inputs/InputsSection';
import OperationSection from './components/operations/OperationSection';


// id generator
function* generator(){
  let id = 0;
  while(true){
    yield id++; 
  }
}
const generatorId = generator();



const initialState = {
  a: 0 , 
  b: 0  
}
const App39 = () => {

 const [inputState, setInputState] = useState({...initialState})
//  console.log(inputState) // a: 0 ,b:0
const [result, setResult] = useState(0)
const [histori, setHistori] = useState([])
const [restoreHistory, setRestoreHistory] = useState(null)
console.log(restoreHistory)


// step-1
 const handlerInput =(e)=>{
  setInputState({
    ...inputState,
    [e.target.name] : parseInt(e.target.value) , 

  });
 }
   
  // another way using handler
 /*  const handlerInput = (key, value)=>{
     setInputState({
      ...inputState,
      [key]: value
     })
  } */

  // another way using handler
/*   const handlerInput = (inpt)=>{
     setInputState({
      ...inputState,
      ...inpt
     })
  } */



// handle clear Button
const handleClear = ()=>{
  setInputState({...initialState})
  setResult(0);
  setHistori([])
}

// step-2
// handle arithmetic Button
const handleArithmeticButton =(operation)=>{
  //  console.log(operation); // + / - *
   if(!inputState.a || !inputState.b){
    alert('Invalid Input');
    return ;
   }

    
  // function constructor
  const resultFnc = new Function('operation', `return ${inputState.a} ${operation} ${inputState.b}`);
  const results = resultFnc(operation)
  setResult(results);


  const histories = {
    id: generatorId.next().value,
    inputs: {...inputState},
    operation,
    results,
    date: new Date(),
  };
setHistori([histories, ...histori])

};


// Restore button
const restoreBtnFnc = (historiItem) =>{
     setInputState({...historiItem.inputs});
     setResult(historiItem.results)
     setRestoreHistory(historiItem.id);
}  ;


  return(
    <><h1>App - 38</h1> <hr />
      <div style={{width:'40%', margin: '0 auto'}}> 
        <div>
          <h2>Result: {result} </h2>
           
           {/* Input section */}
           <InputsSection 
            inputState={inputState} 
            handlerInput={handlerInput}
           />


        </div>

       {/* operation secton */}
       <OperationSection 
         handleArithmeticButton={handleArithmeticButton}
         handleClear={handleClear}
       />

        <hr />

        <HistorySection 
         histori={histori}
         restoreHistory={restoreHistory}
         restoreBtnFnc={restoreBtnFnc}
         />

        {/* <div> 
          <p>History:</p>

          { histori.length === 0 ? (
             <small>There is no histori</small>
          ) : (
            <ul>
              {
                histori.map((historiItem)=>(
                  <li key={historiItem.id} style={{width:"80%", border:"1px solid green" , padding:"1rem" ,marginTop:"1rem", listStyle:"none"}}>
                    <p> Operation:
                      {historiItem.inputs.a}
                      {historiItem.operation} 
                      {historiItem.inputs.b},
                       Result:{historiItem.results}
                    </p> 
                   <small>
                     Date: {historiItem.date.toLocaleDateString()} , 
                     Time: {historiItem.date.toLocaleTimeString()}
                   </small> <br />
                   <button onClick={()=>restoreBtn(historiItem)}
                   disabled={disabled}
                   >Restore</button>
                 </li>
                ))
              }
            </ul>
          )

          }
         
        </div> */}
     </div>
    </>
  )
}

export default App39;