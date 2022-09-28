import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { fetchDrinksDetail } from '../services/fetchDetails';
import RecipeDetails from '../components/RecipeDetails';
import RecipesCarousel from '../components/RecipesCarousel';

import { readLocalStorage, DONERECIPES_KEY } from '../services/localStorageFuncs';

export default function DrinkRecipe() {
  const { id } = useParams();
  const location = useLocation();
  const [details, setDetails] = useState({});
  const [doneRecipes, setDoneRecipes] = useState(false);

  useEffect(() => {
    const recipeDetails = async () => {
      const response = await fetchDrinksDetail(id);
      setDetails(...response);
      const payload = readLocalStorage(DONERECIPES_KEY);
      if (payload !== null) {
        const checkPayload = payload.some((e) => e.id === id);
        setDoneRecipes(checkPayload);
      }
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
      <RecipeDetails details={ details } pathname={ location.pathname } />
      <RecipesCarousel pathname={ location.pathname } />
      {doneRecipes === false && (
        <button
          type="button"
          style={ { position: 'fixed', zIndex: '0', bottom: '0px' } }
          data-testid="start-recipe-btn"
        >
          Start Recipe

        </button>
      )}
    </div>
  );
}
