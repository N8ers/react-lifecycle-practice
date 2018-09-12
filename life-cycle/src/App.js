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
        <Body />
      </div>
    );
  }
}

class Body extends Component {
  constructor(props){
    super(props);

    this.state = {
      rand:0
    },
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  getRandomNumber(){
    // console.log("random number called");
    this.setState({ rand: Math.floor(Math.random()*100) })
  }

  render(){
    return(
      <div>        
        <p className="App-intro">
        To get started, edit src/App.js and save to reload.
        </p>
        <button onClick={this.getRandomNumber}>Random Number Generator!!!</button>
      <Numbers myNumber={this.state.rand} />
      </div>
    )
  }
}

class Numbers extends Component {
  componentWillMount(){
    console.log("componentWillMount called here");
  }

  componentDidMount(){
    console.log("componentDidMount called here");
  }

  componentWillReceiveProps(newProps){
    console.log("componentWillReceiveProps called");
    
  }

  render(){
    return(
      <div>
        <br />
        {this.props.myNumber}
      </div>
    );
  }
}

export default App;
