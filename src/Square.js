import React from "react";

import "./App.css";

const Square = (props) => {

  return (
    <div className='square square__elem' style={{backgroundColor: props.color}}></div>
  );
};

export default Square;