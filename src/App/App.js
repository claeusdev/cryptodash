import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import styled, { css } from 'styled-components';
import Navbar from './Navbar';

// const MyButton = styled.button`
//   color: green;
//   background-color: white;

//   ${(props) =>
//     props.primary &&
//     css`
//       color: palevioletred;
//     `};
// `;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Welcome />
      </div>
    );
  }
}

export default App;
