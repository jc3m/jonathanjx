import React, { Component } from 'react';
import anime from 'animejs';

import './Home.css';
import letters from './Letters.js';

class Home extends Component {
  componentDidMount() {
    const timeline = anime.timeline({
      loop: false,
      autoplay: true
    });

    timeline
      .add({
        targets: '#intro-hi',
        delay: 500,
        duration: 1000,
        color: ['#fff', '#000'],
        easing: 'easeOutCubic'
      })
      .add({
        targets: '#intro-cont',
        delay: 100,
        duration: 1200,
        color: ['#fff', '#000'],
        easing: 'easeOutCubic'
      })
      .add({
        targets: '.fill.in',
        offset: '-= 850',
        strokeDashoffset: {
          value: [anime.setDashoffset, 0],
          duration: 900,
          delay: function(el, i, t) { return 0 + ( i * 140 ); },
          easing: 'easeOutQuart'
        }
      })
      .add({
        targets: '.follow-item',
        duration: 1200,
        delay: (el, i, t) => i * 900,
        color: ['#fff', '#000'],
        easing: 'easeOutCubic'
      })
      .add({});
  }

  render() {
    return(
      <div className="home">
        <div className="intro">
          <h1><span id="intro-hi">Hi, </span><span id="intro-cont"> I'm</span></h1>
        </div>
        <div className="letters">
          {letters}
        </div>

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

export default Home;
