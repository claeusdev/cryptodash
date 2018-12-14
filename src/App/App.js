import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import { AppProvider } from './AppProvider';
import Index from '../Settings/Index';
import Content from '../Shared/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppProvider>
          <Navbar />
          <Content>
            <Index />
          </Content>
        </AppProvider>
      </div>
    );
  }
}

export default App;
