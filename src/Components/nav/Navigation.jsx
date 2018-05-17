import React, { Component } from 'react';
import anime from 'animejs';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const navLinks = [
  { title: 'Home', to: '/' },
  { title: 'About', to: '/about' },
  { title: 'Portfolio', to: '/portfolio' },
];

class Navigation extends Component {
  componentDidMount() {
    const initialDelay = 600;
    anime({
      targets: '.navbar a',
      duration: 600,
      opacity: {
        value: [0, 1],
        easing: 'easeInCubic',
        delay: (el, i) => initialDelay + (i * 100),
      },
      translateY: {
        value: [-30, 0],
        delay: (el, i) => initialDelay + (i * 115),
        easing: 'easeOutCubic',
      },
    });
  }

  render() {
    const items = [];
    navLinks.forEach(link => {
      const item = (
        <li key={link.to}>
          <NavLink exact={link.to === '/'} to={link.to}>
            {link.title}
          </NavLink>
        </li>
      );
      items.push(item);
    });

    return (
      <nav className="navbar">
        <ul>{items}</ul>
      </nav>
    );
  }
}

export default Navigation;
