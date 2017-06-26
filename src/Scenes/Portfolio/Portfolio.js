import React, { Component } from 'react';

class Portfolio extends Component {
  componentDidMount() {
    console.log(this.props);
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
