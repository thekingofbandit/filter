import React, { Component } from 'react';
import './App.css';

import SquaresContainer from "./SquareContainer";


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

      <div id="game">

        {/* HEADER */}
        <div id="header" className="header">
          <h1 className="header__elem">THE GREAT
              <br />
            <span id="rgbDisplay">
              {this.state.rgbDisplay}
            </span>
            <br />
            GUESSING GAME
              <br />
            <span id="author">by Ana Fig</span>
            <br />
            <span id="language">REACT</span>
          </h1>
        </div>
        {/* / HEADER */}

        {/* MENU BUTTONS */}
        <div id="menu">
          <div>
            <button id="newColorButton">NEW COLORS</button>
          </div>
          <span id="message"></span>
          <div>
            <button className="easyMode">EASY</button>
            <button className="hardMode selected">HARD</button>
          </div>
        </div>
        {/* / MENU BUTTONS */}

        {/* SQUARES COMPONENT */}
        <SquaresContainer color={this.generateRandomColor()} />
        {/* / SQUARES COMPONENT */}


      </div>
    );
  }
}

export default App;