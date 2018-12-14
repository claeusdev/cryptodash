import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import styled, { css } from 'styled-components';
import Navbar from './Navbar';
import { AppProvider } from './AppProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppProvider>
          <Navbar />
          <Welcome />
        </AppProvider>
      </div>
    );
  }
}

export default App;
