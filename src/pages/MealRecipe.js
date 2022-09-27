import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchMealDetail } from '../services/fetchDetails';
import Header from '../components/Header';
import searchImg from '../images/searchIcon.svg';
import RecipeDetails from '../components/RecipeDetails';
import RecipesCarousel from '../components/RecipesCarousel';
import Footer from '../components/Footer';

export default function MealRecipe({ history }) {
  const { id } = useParams();
  const location = useLocation();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const recipeDetails = async () => {
      const response = await fetchMealDetail(id);
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
        title="Meal Recipe"
        search={ searchImg }
        history={ history }
      />
      <RecipeDetails details={ details } pathname={ location.pathname } />
      <RecipesCarousel pathname={ location.pathname } />
      <button
        type="button"
        style={ { position: 'fixed', zIndex: '0', bottom: '0px' } }
        data-testid="start-recipe-btn"
      >
        Iniciar Receita

      </button>
      <Footer history={ history } />
    </div>
  );
}

MealRecipe.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
