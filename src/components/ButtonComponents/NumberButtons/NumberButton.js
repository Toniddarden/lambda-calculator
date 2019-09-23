import React from "react";



export default function NumberButton(props) {
  return <button className='numberButton' onClick={props.numberFunction}>{props.num}</button>;
}