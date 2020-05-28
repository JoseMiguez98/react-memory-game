// @package
import React from 'react';

// @own
import './styles.scss';

const CurrentPlayer = ({name, attempts}) => (
  <div className="current-player">
    <div className="current-player__title">Current player</div>
    <div className="current-player__name">Name: {name}</div>
    <div className="current-player__attempts">#Attempts: {attempts}</div>
  </div>
);

export default CurrentPlayer;