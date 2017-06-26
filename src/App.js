import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Components/nav/Navigation';
import Home from './Scenes/Home/Home';
import About from './Scenes/About/About';
import Portfolio from './Scenes/Portfolio/Portfolio';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <div className="main-view">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
        </div>
      </div>
    );
  }
}

export default App;
