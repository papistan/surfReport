import React, { Component } from 'react';
import logo from './logo.svg';
import Reports from './components/reports.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={'https://d30y9cdsu7xlg0.cloudfront.net/png/20501-200.png'} className="App-logo" alt="logo" />
          <h1 className="App-title">Surf Report</h1>
        </header>
        <Reports/>
      </div>
    );
  }
}

export default App;
