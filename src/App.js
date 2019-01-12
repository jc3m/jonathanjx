import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './styles/base.scss';

import store from './services/store';
import Navigation from './Components/nav/Navigation';
import Home from './Scenes/Home';
import About from './Scenes/About/About';
import Portfolio from './Scenes/Portfolio/Portfolio';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navigation />

            <div className="main-view">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
