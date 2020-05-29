// @package
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import PropTypes from 'prop-types';

// @own
import './styles.scss';

const Card = ({ children, onFlip, index, flipped }) => {
  function flipCard() {
    !flipped && onFlip(index);
  }
  return(
    <div className="card" onClick={flipCard}>
      <ReactCardFlip isFlipped={flipped}>
        <div className="card__front"/>
        <div className="card__back">{ children }</div>
      </ReactCardFlip>
    </div>
  );
};

Card.propTypes = {
  onFlip: PropTypes.func
};

export default Card;