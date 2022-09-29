import React, { useState } from 'react';
import PropTypes from 'prop-types';
import profileImg from '../images/profileIcon.svg';
import SearchBar from './SearchBar';

export default function Header({ title, search, history, path }) {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    history.push('/profile');
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header>
      <h1 data-testid="page-title">{title}</h1>
      <button
        type="button"
        onClick={ handleClick }
      >
        <img data-testid="profile-top-btn" src={ profileImg } alt="Profile-icon" />
      </button>

      {search !== ''
        ? (
          <button type="button" onClick={ handleToggle }>
            <img
              data-testid="search-top-btn"
              src={ search }
              alt="Search-Icon"
            />
          </button>)
        : '' }
      {toggle ? <SearchBar path={ path } history={ history } /> : null }

    </header>
  );
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  path: PropTypes.string.isRequired,

};
