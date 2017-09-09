import React, { Component } from 'react';

import './Favorites.css';

const f = {
  whiteSpace: 'pre',
};

// declaration
const d = {
  color: '#505AEC',
};

// key
const k = {
  color: '#AC41D2',
};

// string
const s = {
  color: '#40A61B',
};

// equals
const e = {
  color: '#f45d5d',
};

const favs = {
  Artists: ['Boston', 'Styx', 'Coldplay', 'Muse'],
  Songs: ['More Than a Feeling', 'Come Sail Away', 'Tiny Dancer'],
  Shows: ['How I Met Your Mother', 'The Office', 'House of Cards'],
  Movies: ['Inception', 'Almost Famous', 'The Social Network'],
  Books: ['Outliers', 'The Kite Runner', 'Ready Player One'],
};

class Favorites extends Component {
  render() {
    const keys = [];
    Object.keys(favs).forEach((key, i) => {
      const values = [];
      favs[key].forEach((val, j) => {
        // Only include a comma if it's not the last element
        const comma = j === favs[key].length - 1 ? '' : ', ';
        const value = (
          <span key={val}>
            <span style={s}>&quot;{val}&quot;</span>{comma}
          </span>
        );
        values.push(value);
      });

      // Only include a comma if it's not the last element
      const comma = i === Object.keys(favs).length - 1 ? '' : ',';
      const comp = (
        <p key={key} style={{ display: 'block' }}>
          <span style={k}>{key}</span>: [{values}]{comma}
        </p>
      );
      keys.push(comp);
    });

    const favorites = (
      <div className="favorites" style={f}>
        <p><span style={d}>let</span> favorites <span style={e}>=</span> {'{'} </p>
        <div id="kv-block" style={{ marginLeft: '1.8em', whiteSpace: 'normal' }}>
          {keys}
        </div>
        <p>{'};'}</p>
      </div>
    );

    return favorites;
  }
}

export default Favorites;
