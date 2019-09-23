import React, { useState } from "react";
import { operators } from '../../../data';
import OperatorButton from './OperatorButton.js';
// import Button from 'react-bootstrap/Button'
// import { setState } from "expect/build/jestMatchersObject";
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operator, setOperators] = useState(operators);

  // const data = () => {
  //   setOperators(operators);
  // }


  return (
    <div className={`operators`}> 
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {/* {operator.map(op =>{
        return <OperatorButton className={`buttons`} op={op} /> 
      })}  */}
      {operator.map(char =>{
  return <OperatorButton op={char} />
})}


    </div>
    
  );
};
export default Operators;


// {operator.map(op =>{
//   return <OperatorButton op={op} />
// })}