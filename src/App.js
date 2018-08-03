import React, { Component } from 'react';
import logo from './Kal-Yol_Town_icon_250.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Kalyok Town</h1>
          <p>Software Solutions</p>
          <p className="line-1 anim-typewriter">React Native, AWS, Node, Serverless, JS, ES6</p>
        </header>
      </div>
    );
  }
}

export default App;
