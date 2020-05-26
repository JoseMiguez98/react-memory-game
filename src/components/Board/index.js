// @package
import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// @app
import { getRandomIcons } from 'utils/icons';
import { shuffle } from 'utils/array.js';
import Card from '../Card';

// @own
import './styles.scss';

const Header = ({ attempts, won, onRestart }) => (
  <div className="header">
    <div className="header__left">
      <span>React-Memoria</span>
      <div className="reset-button">
        <button onClick={onRestart}>Reiniciar</button>
      </div>
    </div>

    {won && 'You win! Congratulations'}

    <div className="header__right">
      Intentos: {attempts}
    </div>
  </div>
);

const Board = () => {
  const [gameCards, setCards] = useState([]);
  const [cardsStatus, setCardsStatus] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [won, setWon] = useState(false);

  // Duplicate and shuffle cards
  useEffect(() => {
    startGame();
  }, []);

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
  }, [cardsStatus, won]);

  function startGame() {
    const cards= getRandomIcons(10);
    const shuffled = shuffle(cards.concat(...cards));

    setCards(shuffled);
    setCardsStatus(new Array(shuffled.length).fill(false));
    setAttempts(0);
    setWon(false);
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
      <Header attempts={attempts} won={won} onRestart={startGame}/>
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