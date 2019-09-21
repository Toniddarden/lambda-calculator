import React, { useState } from "react";
import { operators } from '../../../data';
import OperatorButton from './OperatorButton.js';
// import { setState } from "expect/build/jestMatchersObject";
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operator, setOperators] = useState(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
   {operator.map(op =>{
         return <OperatorButton op={op} />
       })}
    </div>
  );
};
export default Operators;
