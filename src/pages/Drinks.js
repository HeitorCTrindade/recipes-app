import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import searchImg from '../images/searchIcon.svg';
import Footer from '../components/Footer';

export default function Drinks(props) {
  const { history } = props;
  return (
    <div>
      <Header
        title="Drinks"
        search={ searchImg }
        history={ history }
      />
      Drinks
      <Footer history={ history } />
    </div>
  );
}

Drinks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
