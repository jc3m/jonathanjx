import React, { Component } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';

import './styles.scss';
import letters from './Letters';

class Home extends Component {
  componentDidMount() {
    if (this.props.visited) {
      // Prevent re-animating
      return;
    }

    const timeline = anime.timeline({
      loop: false,
      autoplay: true,
    });

    timeline
      .add({
        targets: '#intro-hi',
        delay: 500,
        duration: 1000,
        color: ['#fff', '#000'],
        easing: 'easeOutCubic',
      })
      .add({
        targets: '#intro-cont',
        delay: 100,
        duration: 1200,
        color: ['#fff', '#000'],
        easing: 'easeOutCubic',
      })
      .add({
        targets: '.fill.in',
        offset: '-= 850',
        strokeDashoffset: {
          value: [anime.setDashoffset, 0],
          duration: 900,
          delay: (el, i) => i * 140,
          easing: 'easeOutQuart',
        },
      })
      .add({
        targets: '.follow-item',
        duration: 1200,
        delay: (el, i) => i * 900,
        color: ['#fff', '#000'],
        easing: 'easeOutCubic',
      })
      .add({});
  }

  componentWillUnmount() {
    this.props.visit('root');
  }

  render() {
    return (
      <div className="home">
        <div className="intro">
          <h1>
            <span id="intro-hi">Hi, </span>
            <span id="intro-cont"> I&apos;m</span>
          </h1>
        </div>
        <div className="letters">{letters}</div>

        <div className="follow">
          <h1>
            <span className="follow-item">Student, </span>
            <span className="follow-item">Programmer, </span>
            <span className="follow-item">Web Developer</span>
          </h1>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  visited: PropTypes.bool.isRequired,
  visit: PropTypes.func.isRequired,
};

export default Home;
