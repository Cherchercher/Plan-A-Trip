import React, { Component } from 'react';
import Hamburger from './hamburger.js';
import logo from './jesus.svg';
import './App.css';
import MediaContainer from './MediaContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div class="Hamburger-bar">
            <Hamburger/>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <Navigation/>
          <h1 className="App-title">About Us</h1>
        </div>
        <div>
          <MediaContainer/>
        </div> 
      </div>
    );
  }
}


class Navigation extends React.Component {
  render() {
    return (
      <div id="navigation" className="Navigation App-nav">
        <nav>
          <ul>
            <li>About Us</li>
            <li>My Trips</li>
            <li>Plan A Trip Now</li>
            <li>Terms and Agreement</li>
          </ul>
        </nav>
      </div>
    ); 
  }
}
export default App;
