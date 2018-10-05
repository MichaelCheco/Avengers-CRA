import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Avengers from "./AvengersData"
import AvengersList from './Components/AvengersList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hello: 'hello',
      Avengers: Avengers
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Avengers Movies By Michael Checo
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <h1>{this.state.hello}</h1>
        <AvengersList AvengersData={this.state.Avengers} />
      </div>
    );
  }
}

export default App;
