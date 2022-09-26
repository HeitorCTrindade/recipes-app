import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';

export default function Drinks(props) {
  const { history } = props;
  return (
    <div>
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
