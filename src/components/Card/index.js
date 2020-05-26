// @package
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import PropTypes from 'prop-types';

// @own
import './styles.scss';

const Card = ({ children, onFlip, index, flipped }) => (
  <div className="card" onClick={() => !flipped && onFlip(index)}>
    <ReactCardFlip isFlipped={flipped}>
      <div className="card__front"/>
      <div className="card__back">{ children }</div>
    </ReactCardFlip>
  </div>
);

Card.propTypes = {
  onFlip: PropTypes.func
};

export default Card;