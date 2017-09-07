import React, { Component } from 'react';

import './Media.css'

class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: [],
      prefix: ''
    };
  }

  componentWillMount() {
    fetch('/api/media').then((response) => {
      return response.json();
    }).then((json) => {
      this.setState({
        keys: json.keys,
        prefix: json.prefix
      });
    });
  }

  render() {
    const links = [];
    this.state.keys.forEach((d) => {
      const ref = `http://${this.state.prefix}/${d}`;
      links.push(
        <li key={d}>
          <a href={ref}>{d}</a>
        </li>
      );
    });

    return (
      <div className="media-wrapper container">
        <div className="media-header">
          <h2>Media</h2>
        </div>

        <div className="media-list">
          <ul>
            {links}
          </ul>
        </div>
      </div>
    );
  }
}

export default Media;

