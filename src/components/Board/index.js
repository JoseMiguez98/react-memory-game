// @package
import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// @app
import { shuffle } from '../../utils/array';
import Card from '../Card';

// @own
import './styles.scss';

const Board = ({ cards, won, setAttempts, setWon }) => {
  const [cardsStatus, setCardsStatus] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [gameCards, setGameCards] = useState([]);

  // Duplicate and shuffle cards
  useEffect(() => {
    shuffleCards();
    setFlippedCards([]);
  }, [cards]);

  // Check if there are two flipped cards and if are equals.
  useEffect(() => {
    if(flippedCards.length === 2) {

      setDisabled(true);
      setAttempts(attempts => attempts+1);

      if (gameCards[flippedCards[0]] !== gameCards[flippedCards[1]]) {
        const newCardStatus = [...cardsStatus];
        flippedCards.map(i => newCardStatus[i] = !newCardStatus[i]);

        setTimeout(() => {
          setCardsStatus(newCardStatus);
        }, 1000);
      }

      setTimeout(() => {
        setDisabled(false);
      }, 1000);

      setFlippedCards([]);
    }
  }, [flippedCards, cardsStatus, gameCards]);

  // Check if the player won and sum another attempt
  useEffect(() => {
    if(!won && cardsStatus.length && !cardsStatus.includes(false)) {
      setWon(true);
    }
  }, [cardsStatus]);

  function shuffleCards() {
    const shuffled = shuffle(cards.concat(...cards));
    setGameCards(shuffled);
    setCardsStatus(new Array(shuffled.length).fill(false));
  }

  function onCardFlip(index) {
    if(!disabled) {
      const newStatus = [...cardsStatus];
      const newFlippedCards = [...flippedCards];

      newStatus[index] = !newStatus[index];
      newFlippedCards.push(index);

      setCardsStatus(newStatus);
      setFlippedCards(newFlippedCards);
    }
  }

  return (
    <Fragment>
      <div className="game-board">
        {gameCards.map((card, i) => (
          <Card
            flipped={cardsStatus[i]}
            index={i}
            key={`card${i}`}
            onFlip={onCardFlip}>
            <FontAwesomeIcon icon={card} />
          </Card>
        ))}
      </div>
    </Fragment>
  );
};

Board.propTypes = {
  cards: PropTypes.array.isRequired
};

export default Board;