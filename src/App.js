import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './styles/base.scss';

import Navigation from './Components/nav/Navigation';
import Home from './Scenes/Home';
import About from './Scenes/About/About';
import Portfolio from './Scenes/Portfolio/Portfolio';

class App extends Component {
  constructor(props) {
    super(props);

    // Can't put this on state since changing causes a re-render and will
    // deadlock if you switch pages.
    this.visited = {
      root: false,
      about: false,
      portfolio: false,
    };

    this.setVisited = this.setVisited.bind(this);
  }

  setVisited(page) {
    this.visited[page] = true;
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />

          <div className="main-view">
            <Route
              exact
              path="/"
              component={() => <Home visited={this.visited.root} visit={this.setVisited} />}
            />
            <Route
              path="/about"
              component={() => <About visited={this.visited.about} visit={this.setVisited} />}
            />
            <Route
              path="/portfolio"
              component={() => (
                <Portfolio visited={this.visited.portfolio} visit={this.setVisited} />
              )}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
