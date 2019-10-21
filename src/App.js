import React, { Component } from 'react';
import './App.css';
import SquaresContainer from "./SquaresContainer";
class App extends Component {

  constructor() {
    super();
    this.state = {
      correctColor: undefined,
      rgbDisplay: '',
      colorSquares: undefined
    }
  }

  generateRandomColor() {
    let r = Math.round((Math.random() * 255)); //red 0 to 255
    let g = Math.round((Math.random() * 255)); //green 0 to 255
    let b = Math.round((Math.random() * 255)); //blue 0 to 255
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  };



  componentDidMount() {
    let correctColor = this.generateRandomColor();
    let colorSquares = this.generateRandomColor();

    this.setState({
      correctColor: correctColor,
      rgbDisplay: correctColor,
      colorSquares: colorSquares
    })
  };


  render() {

    return (
      <SquaresContainer />
     
    );
  }
}

export default App;