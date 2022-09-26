import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import searchImg from '../images/searchIcon.svg';

export default function Meals({ history }) {
  return (
    <div>
      <Header
        title="Meals"
        search={ searchImg }
        history={ history }
      />
    </div>
  );
}
Meals.propTypes = {
  history: PropTypes.objectOf.isRequired,
};
