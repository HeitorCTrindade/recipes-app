import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';

export default function Profile(props) {
  const { history } = props;
  return (
    <div>
      Profile
      <Footer history={ history } />
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
