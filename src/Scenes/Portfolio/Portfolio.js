import React, { Component } from 'react';

import Project from './Project';
import projects from './projectList';

class Portfolio extends Component {
  componentDidMount() {
    if (this.props.visited)
      return;
  }

  componentWillUnmount() {
    this.props.visit('portfolio');
  }

  render() {
    const projectViews = [];
    projects.forEach(function(p) {
      const project = (
        <Project image={p.image} name={p.name} link={p.link} key={p.name} />
      );
      projectViews.push(project);
    });

    return(
      <div className="portfolio-wrapper">
        <h1>Portfolio</h1>
        { projectViews }
      </div>
    );
  }
}

export default Portfolio;
