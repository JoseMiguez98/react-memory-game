// @packages
import React from 'react';

// @own
import './styles.scss';

const Header = ({ won, onNewGame, onChangePlayer, isChangePlayer }) => (
  <div className="header">
    <div className="header__left">
      <span>Logo</span>
    </div>
    {won && 'You win! Congratulations'}
    <nav className="header__navbar">
      <button className="header__navButton">Reset positions</button>
      <button className="header__navButton" onClick={onNewGame}>New game</button>
      <button className="header__navButton" onClick={() => onChangePlayer(!isChangePlayer)}>Change player</button>
    </nav>
  </div>
);

export default Header;