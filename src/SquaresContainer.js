import React, { Component } from "react";

import "./App.css";

import Square from "./Square";


class SquaresContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: 40
    }
  }

  generateRandomColor() {
    let r = Math.round((Math.random() * 255)); //red 0 to 255
    let g = Math.round((Math.random() * 255)); //green 0 to 255
    let b = Math.round((Math.random() * 255)); //blue 0 to 255
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  };
  
  createSquares = () => {
    let squares = [];
    for (let i = 0; i < this.state.squares; i++) {
        squares.push(<Square color={this.generateRandomColor()} key={i} />);        
    }
    // console.log(this.generateRandomColor())
    return squares;
  }

  render() {


    return (
      <div id="squaresContainer" className="container">
        {this.createSquares()}
      </div>
    );
  }
};

export default SquaresContainer;