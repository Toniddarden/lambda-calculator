import React, { useState } from "react";
import { specialss } from '../../../data'; //import array name in data.js file
import SpecialButton from './SpecialButton'; //import specialbutton.js
//import any components needed
// import { SpecialButton } from "./components/ButtonComponents/SpecialButtons/SpecialButton.js";
// import { specials } from "./src/data.js";

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [spec, setSpecials] = useState(specialss);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

{spec.map(sn =>{
         return <SpecialButton sn={sn} />
       })}
    </div>
  );
};
export default Specials;

