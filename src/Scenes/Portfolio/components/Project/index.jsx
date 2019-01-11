import React from 'react';

import './styles.scss';

const Project = (props) => (
  <div className="project">
    <div className="bg-image">
      <img src={props.image} alt={props.name} />
    </div>
    <div className="item-in overlay">
      <h3 className="name">{props.name}</h3>
      <div className="visitButton">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          Visit
        </a>
      </div>
    </div>
  </div>
);

export default Project;
