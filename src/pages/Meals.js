import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import searchImg from '../images/searchIcon.svg';
import Footer from '../components/Footer';

export default function Meals(props) {
  const { history } = props;
  return (
    <div>
      <Header
        title="Meals"
        search={ searchImg }
        history={ history }
      />
      Meals
      <Footer history={ history } />
    </div>
  );
}

Meals.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
