//  @packages
import React, { useState } from 'react';

// @app
import Board from './components/Board';
import { getRandomIcons } from 'utils/icons';

// @own
import './App.css';

const App = () => {
  const [cards, setCards] = useState(() => getRandomIcons(10));

  function restartGame() {
    setCards(getRandomIcons(10));
  }

  return (
    <div className="App">
      <Board cards={cards} onRestart={restartGame} />
    </div>
  );

};

export default App;
