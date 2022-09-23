import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  DRINKS_TOKEN_KEY,
  MEALS_TOKEN_KEY,
  saveLocalStorageItem,
  USER_KEY,
} from '../services/localStorageFuncs';

const MIN_PASSWORD_LENGTH = 7;
function Login(props) {
  const INITIAL_STATE = {
    email: '',
    password: '',
  };
  const [user, setUser] = useState(INITIAL_STATE);
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(true);

  const isValidEmail = (inputEmail) => String(inputEmail)
    .toLowerCase()
    .match(
      /^[^ ]+@[^ ]+\.[a-z]{2,3}$/,
    );

  const handleChanges = ({ target }) => {
    const { name, value } = target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleLoginClickButton = () => {
    const { history } = props;
    saveLocalStorageItem(USER_KEY, user.email);
    saveLocalStorageItem(DRINKS_TOKEN_KEY, 1);
    saveLocalStorageItem(MEALS_TOKEN_KEY, 1);
    history.push('/meals');
  };

  useEffect(() => {
    const verifyLoginRequest = () => {
      const { email, password } = user;
      if (isValidEmail(email) && password.length >= MIN_PASSWORD_LENGTH) {
        setIsLoginButtonDisabled(false);
      } else {
        setIsLoginButtonDisabled(true);
      }
    };
    verifyLoginRequest();
  }, [user]);

  return (
    <main>
      <input
        type="email"
        name="email"
        value={ user.email }
        data-testid="email-input"
        onChange={ handleChanges }
      />
      <input
        type="password"
        name="password"
        value={ user.password }
        data-testid="password-input"
        onChange={ handleChanges }
      />
      <button
        type="button"
        disabled={ isLoginButtonDisabled }
        data-testid="login-submit-btn"
        onClick={ handleLoginClickButton }
      >
        Entrar
      </button>
    </main>
  );
}

const mapDispatchToProps = (dispatch) => ({
  loginButton: (state) => dispatch(submitLogin(state)) });

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
