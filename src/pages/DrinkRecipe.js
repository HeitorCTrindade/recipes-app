import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchDrinksDetail } from '../services/fetchDetails';
import Header from '../components/Header';
import searchImg from '../images/searchIcon.svg';
import RecipeDetails from '../components/RecipeDetails';
import Footer from '../components/Footer';

export default function DrinkRecipe({ history }) {
  const { id } = useParams();
  const location = useLocation();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const recipeDetails = async () => {
      const response = await fetchDrinksDetail(id);
      setDetails(...response);
    };
    recipeDetails();
  }, [id]);

  Object.keys(details).forEach((key) => {
    if (details[key] === null || details[key] === '' || details[key] === ' ') {
      delete details[key];
    }
  });

  return (
    <div>
      <Header
        title="Drink Recipe"
        search={ searchImg }
        history={ history }
      />
      <RecipeDetails details={ details } pathname={ location.pathname } />
      <Footer history={ history } />
    </div>
  );
}

DrinkRecipe.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
