//  @packages
import React, { useState, useEffect } from 'react';

// @app
import Header from './components/Header';
import Board from './components/Board';
import CurrentPlayer from './components/CurrentPlayer';
import { getRandomIcons } from './utils/icons';
import PositionTable from './components/PositionTable';
import ChangePlayer from './components/ChangePlayer';
import { createApi } from './components/api';

// @own
import './App.scss';

createApi();

const App = () => {
  const [attempts, setAttempts] = useState(0);
  const [cards, setCards] = useState([]);
  const [won, setWon] = useState(false);
  const [name, setName] = useState('Obama');
  const [isChangePlayer, setChangePlayer] = useState(false);

  useEffect(() => (startGame()), [])

  function startGame() {
    setCards(getRandomIcons(10));
    setAttempts(0);
    setWon(false);
  }

  return (
    <div className="App">
      <Header
        onNewGame={startGame}
        onChangePlayer={setChangePlayer}
        isChangePlayer={isChangePlayer}
      />
      <div className="game-container">
        <div className="game-container__col">
          <Board
            cards={cards}
            setAttempts={setAttempts}
            setWon={setWon}
            won={won}
          />
        </div>
        <div className="game-container__col">
          {isChangePlayer ?
          <ChangePlayer setName={setName} onChangePlayer={setChangePlayer} /> :
          <CurrentPlayer name={name} attempts={attempts}/>}
          <PositionTable />
        </div>
          {won && <h1 className="won-message">You won in {attempts} attempts! Congratulations</h1>}
      </div>
    </div>
  );

};

export default App;
