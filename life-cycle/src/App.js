import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Component life cycle</h1>
        </header>

      </div>
    );
  }
}

class Body extends component {
  render(){
    return(
      <div>        
        <p className="App-intro">
        To get started, edit src/App.js and save to reload.
        </p>
      </div>
    )
  }
}



export default App;
