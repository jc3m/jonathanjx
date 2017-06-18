import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navigation from './Components/nav/Navigation';
import Home from './Scenes/Home/Home.js';
import About from './Scenes/About/About.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <div className="main-view">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </div>
    );
  }
}

export default App;
