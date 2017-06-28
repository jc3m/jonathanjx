import React, { Component } from 'react';

// Using a css file for the :hover selector
import './visitButton.css';

class Project extends Component {
  constructor(props) {
    super(props);
    this.imageEnter = this.imageEnter.bind(this);
    this.imageLeave = this.imageLeave.bind(this);
  }

  imageEnter(e) {
  }

  imageLeave(e) {
  }

  render() {
    const side = '265px';
    const projectStyle = {
      width: side,
      height: side,
      margin: '10px',
      display: 'inline-block',
      border: '1px solid #bbb',
      position: 'relative'
    };
    const imgStyle = {
      position: 'relative',
      height: side,
      zIndex: 0
    };
    const overlayStyle = {
      position: 'absolute',
      height: side,
      top: 0,
      left: 0,
      width: side,
      zIndex: 1,
      backgroundColor: 'rgba(0,0,0,0.71)'
    };
    const nameStyle = {
      color: 'white',
      marginTop: 85,
      position: 'relative'
    };
    const buttonStyle = {
      display: 'inline-block',
      margin: 'auto',
      marginTop: 10,
      border: '2px solid white',
      position: 'relative'
    };
    const linkStyle = {
      padding: '8px 20px',
      display: 'inline-block'
    };

    return (
      <div style={projectStyle}
        onMouseEnter={this.imageEnter}
        onMouseLeave={this.imageLeave}>
        <div>
          <img style={imgStyle}
            src={require(`./images/${this.props.image}`)}
            alt={this.props.name}>
          </img>
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
