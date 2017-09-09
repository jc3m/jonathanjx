import React, { Component } from 'react';
import $ from 'jquery';

// Using a css file for the :hover selector
import './visitButton.css';

const HEADER_OFFSET = '-18px';
const BUTTON_OFFSET = '32px';

class Project extends Component {
  imageEnter(e) {
    $('.item-in', e.currentTarget).stop(true);
    $('h3', e.currentTarget).stop(true);
    $('.visitButton', e.currentTarget).stop(true);

    $('.item-in', e.currentTarget).fadeTo(300, 1.0);
    $('h3', e.currentTarget).animate({
      top: '0px',
    }, 320);
    $('.visitButton', e.currentTarget).animate({
      top: '0px',
    }, 320);
  }

  imageLeave(e) {
    $('.item-in', e.currentTarget).stop(true);
    $('h3', e.currentTarget).stop(true);
    $('.visitButton', e.currentTarget).stop(true);

    $('.item-in', e.currentTarget).fadeTo(300, 0.0);
    $('h3', e.currentTarget).animate({
      top: HEADER_OFFSET,
    }, 320);
    $('.visitButton', e.currentTarget).animate({
      top: BUTTON_OFFSET,
    }, 320);
  }

  render() {
    const side = 285;
    const projectStyle = {
      width: side + 2,
      height: side + 2,
      margin: '22px',
      display: 'inline-block',
      border: '1px solid #ddd',
      position: 'relative',
    };
    const imgStyle = {
      position: 'relative',
      height: side,
      zIndex: 0,
    };
    const overlayStyle = {
      position: 'absolute',
      height: side,
      top: 0,
      left: 0,
      width: side,
      zIndex: 1,
      backgroundColor: 'rgba(0,0,0,0.71)',
      opacity: 0,
    };
    const nameStyle = {
      color: 'white',
      marginTop: 85,
      position: 'relative',
      top: HEADER_OFFSET,
    };
    const buttonStyle = {
      display: 'inline-block',
      margin: 'auto',
      marginTop: 10,
      border: '2px solid white',
      position: 'relative',
      top: BUTTON_OFFSET,
    };
    const linkStyle = {
      padding: '8px 20px',
      display: 'inline-block',
    };

    return (
      <div style={projectStyle}
        onMouseEnter={this.imageEnter}
        onMouseLeave={this.imageLeave}>
        <div>
          <img
            style={imgStyle}
            src={require(`./images/${this.props.image}`)}
            alt={this.props.name}
          />
        </div>
        <div className="item-in" style={overlayStyle}>
          <h3 style={nameStyle}>{this.props.name}</h3>
          <div className="visitButton" style={buttonStyle}>
            <a href={this.props.link}
              style={linkStyle}
              target="_blank"
              rel="noopener noreferrer">Visit</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
