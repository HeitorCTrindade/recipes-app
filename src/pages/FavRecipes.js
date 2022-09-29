import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

export default function FavRecipes(props) {
  const { history } = props;
  const location = useLocation();
  const { pathname } = location;
  return (
    <div>
      <Header
        title="Favorite Recipes"
        search=""
        history={ history }
        path={ pathname }
      />
    </div>
  );
}
FavRecipes.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
