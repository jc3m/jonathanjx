import React, { Component } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';

import Favorites from './Favorites';
import './About.css';
import me from '../../me';
import Resume from './JonathanXu-Resume.pdf';

class About extends Component {
  componentDidMount() {
    if (this.props.visited) {
      anime({
        targets: '.about-wrapper',
        opacity: [0, 1],
        duration: 800,
        delay: 0,
        easing: 'easeInOutQuad',
      });
    } else {
      anime({
        targets: '.about-wrapper',
        opacity: [0, 1],
        duration: 900,
        delay: 200,
        easing: 'easeOutQuad',
      });
    }
  }

  componentWillUnmount() {
    this.props.visit('root');
  }

  render() {
    const work = [];
    me.work.forEach((w) => {
      work.push(
        <li key={w.company}>
          <p>
            <a href={w.link} target="_blank" rel="noopener noreferrer">{ w.company }</a>,&nbsp;
            { w.position } ({ w.when })
          </p>
        </li>
      );
    });

    const connect = [];
    me.social.forEach((s) => {
      const faClass = `fa fa-${s.fa}`;
      const platform = `${s.platform} `;
      connect.push(
        <li key={s.platform}>
          <p>
            <i className={faClass} aria-hidden="true" style={{ width: '24px' }} />
            <a href={s.link} target="_blank" rel="noopener noreferrer">{platform}</a>
          </p>
        </li>
      );
    });

    // Resume
    connect.push(
      <li key="resume">
        <p>
          <i className={`fa fa-file-text`} aria-hidden="true" style={{ width: '24px' }} />
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
          >{'Resume '}</a>
        </p>
      </li>
    );

    return (
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

            <div className="about-connect">
              <h3>Connect</h3>
              <ul>
                { connect }
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

About.propTypes = {
  visited: PropTypes.bool.isRequired,
  visit: PropTypes.func.isRequired,
};

export default About;
