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
      projectViews.push(<Project image={p.image} name={p.name} link={p.link} key={p.name} />);
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