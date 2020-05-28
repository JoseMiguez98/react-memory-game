// @package
import React from 'react';

// @own
import './styles.scss';

const ChangePlayer = ({ setName, onChangePlayer }) => (
  <div className="change-player">
    <form onSubmit={e => {
      e.preventDefault();
      setName(e.target.name.value);
      e.target.name.value = '';
      onChangePlayer(false);
    }}>
      <label htmlFor="name" className="change-player__label">Please enter your name:</label>
      <input name="name" type="text" className="change-player__input" />
      <button type="submit" className="change-player__button">OK</button>
    </form>
  </div>
)

export default ChangePlayer;