import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Project from './Project';
import projects from './projectList';

class Portfolio extends Component {
  componentWillUnmount() {
    this.props.visit('portfolio');
  }

  render() {
    const projectViews = [];
    projects.forEach(p => {
      const project = <Project image={p.image} name={p.name} link={p.link} key={p.name} />;
      projectViews.push(project);
    });

    return (
      <div className="portfolio-wrapper" style={{ marginTop: 70 }}>
        {projectViews}
      </div>
    );
  }
}

Portfolio.propTypes = {
  visit: PropTypes.bool.isRequired,
};

export default Portfolio;
