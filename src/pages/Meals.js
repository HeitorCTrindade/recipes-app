import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';

export default function Meals(props) {
  const { history } = props;
  return (
    <div>
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
