import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import { AppProvider } from './AppProvider';
import Index from '../Settings/Index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppProvider>
          <Navbar />
          <Index />
        </AppProvider>
      </div>
    );
  }
}

export default App;
