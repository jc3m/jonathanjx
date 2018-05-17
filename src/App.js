import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Navigation from './Components/nav/Navigation';
import Home from './Scenes/Home/Home';
import About from './Scenes/About/About';
import Portfolio from './Scenes/Portfolio/Portfolio';
import Media from './Scenes/Media';
import './App.css';

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
      <HashRouter>
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
            <Route path="/m" component={Media} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
