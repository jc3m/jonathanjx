import React, { Component } from 'react';
import anime from 'animejs';

import Favorites from './Favorites';
import './About.css';
import me from '../../me';

class About extends Component {
  componentDidMount() {
    anime({
      targets: '.about-wrapper',
      opacity: [0,1],
      duration: 1100,
      delay: 250,
      easing: 'easeOutCubic'
    });
  }

  render() {
    const work = [];
    me.work.forEach(function(w) {
      work.push(
        <li key={w.company}>
          <p>
            <a href={w.link} target="_blank" rel="noopener noreferrer">{ w.company }</a>, { w.position } ({ w.when })
          </p>
        </li>
      );
    });

    return(
      <div className="about-wrapper container">
        <div className="about-header">
          <h1>A little about me...</h1>
        </div>

        <div className="about-body">
          <div className="about-col-left">
            <div className="about-intro">
              <p>
                { me.about }
              </p>
            </div>

            <div className="about-work">
              <h3>Work Experience</h3>
              <ul>
                { work }
              </ul>
            </div>
          </div>

          <div className="about-col-right">
            <Favorites />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
