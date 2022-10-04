import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  readLocalStorage,
  USER_KEY,
} from '../services/localStorageFuncs';
import profileIcon from '../images/profile/profileIcon.svg';
import doneRecipes from '../images/profile/doneRecipes.svg';
import favoriteRecipes from '../images/profile/favoriteRecipes.svg';
import logout from '../images/profile/logout.svg';

import '../styles/profile.css';

export default function Profile(props) {
  const { history } = props;
  const [userEmail, setEmail] = useState('');
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    const { email } = readLocalStorage(USER_KEY);
    setEmail(email);
  }, []);

  return (
    <section className="profile-page-container">
      <Header
        title="Profile"
        history={ history }
        search=""
        path={ pathname }
      />

      <div className="center">
        <img
          src={ profileIcon }
          alt="profileIcon"
        />
        <h2 data-testid="profile-email">{userEmail}</h2>
      </div>

      <div className="content">
        <div className="card-links">
          <Link
            to="/done-recipes"
            data-testid="profile-done-btn"
            className="links"
          >
            <img
              src={ doneRecipes }
              alt="profileIcon"
            />
          </Link>
          <div className="line" />
          <Link
            to="/favorite-recipes"
            data-testid="profile-favorite-btn"
            className="links"
          >
            <img
              src={ favoriteRecipes }
              alt="favoriteRecipes"
            />
          </Link>
          <div className="line" />
          <Link
            to="/"
            data-testid="profile-logout-btn"
            className="links"
          >
            <img
              src={ logout }
              alt="logout"
            />
          </Link>
        </div>
      </div>
      <Footer history={ history } />
    </section>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
