import React from 'react';
import './ProgressBar.scss'

const ProgressBar = ({rate, title}) => {
  return (
    <div className="progress-bar">
      <div className="title">{title}</div>
      <div className="bar">
        <div style={{width: rate}} className="progress"> </div>
      </div>
    </div>
  );
};

export default ProgressBar;
