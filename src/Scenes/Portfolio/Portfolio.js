import React, { Component } from 'react';

class Portfolio extends Component {
  componentDidMount() {
    if (this.props.visited)
      return;
  }

  componentWillUnmount() {
    this.props.visit('portfolio');
  }

  render() {
    return(
      <div className="portfolio-wrapper">
        <h1>Portfolio</h1>
      </div>
    );
  }
}

export default Portfolio;
