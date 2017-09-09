import React, { Component } from 'react';

import './Media.css'

class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: [],
      prefix: ''
    };
  }

  componentWillMount() {
    fetch('/api/media').then((response) => {
      return response.json();
    }).then((json) => {
      this.setState({
        docs: json.docs,
        prefix: json.s3Prefix
      });
    });
  }

  render() {
    const types = {}; // Maps type to an array of links
    const sections = [];

    this.state.docs.forEach((d) => {
      const ref = `http://${this.state.prefix}/${d.s3_key}`;
      if (types[d.type] === undefined) {
        types[d.type] = [];
      }
      types[d.type].push({
        name: d.name,
        ref
      });
    });

    const typeKeys = Object.keys(types);
    typeKeys.sort();

    typeKeys.forEach((k) => {
      types[k].sort((a, b) => {
        if (a.name > b.name)
          return 1;
        if (a.name < b.name)
          return -1;
        return 0;
      });

      const anchors = [];
      types[k].forEach((d) => {
        anchors.push(
          <li key={d.ref}>
            <a href={d.ref}>{d.name}</a>
          </li>
        );
      });

      sections.push(
        <div key={k}>
          <h4>{k}</h4>
          <ul className="link-list">
            {anchors}
          </ul>
        </div>
      );
    });

    return (
      <div className="media-wrapper container">
        <div className="media-header">
          <h2>Media</h2>
        </div>

        <div className="media-list">
          {sections}
        </div>
      </div>
    );
  }
}

export default Media;

