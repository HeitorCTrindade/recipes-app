import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  readLocalStorage,
  USER_KEY,
  clearLocalStorage,
} from '../services/localStorageFuncs';

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
    <div>
      <Header
        title="Profile"
        history={ history }
        search=""
        path={ pathname }
      />
      <h1 data-testid="profile-email">{userEmail}</h1>

      <button
        type="button"
        onClick={ () => {
          history.push('/done-recipes');
        } }
        className="btn btn-warning"
        data-testid="profile-done-btn"
      >
        Done Recipes
      </button>

      <button
        type="button"
        onClick={ () => {
          history.push('/favorite-recipes');
        } }
        className="btn btn-warning"
        data-testid="profile-favorite-btn"
      >
        Favorite Recipes
      </button>

      <button
        type="button"
        onClick={ () => {
          clearLocalStorage();
          history.push('/');
        } }
        className="btn btn-warning"
        data-testid="profile-logout-btn"
      >
        Logout
      </button>
      <Footer history={ history } />
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
