import React, { Component } from 'react';

import './App.css';

import Square from './Square';


class SquaresContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: 6
    }
  }
  createSquares = () => {
    let squares = [];
    for (let i = 0; i < this.state.squares; i++) {
        squares.push(<Square color={this.props.color} key={i} />);
    }
    console.log(this.props.color)
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