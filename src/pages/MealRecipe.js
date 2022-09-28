import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { fetchMealDetail } from '../services/fetchDetails';
import RecipeDetails from '../components/RecipeDetails';
import RecipesCarousel from '../components/RecipesCarousel';

import { readLocalStorage, DONERECIPES_KEY } from '../services/localStorageFuncs';

export default function MealRecipe() {
  const { id } = useParams();
  const location = useLocation();
  const [details, setDetails] = useState({});
  const [doneRecipes, setDoneRecipes] = useState(false);

  useEffect(() => {
    const recipeDetails = async () => {
      const response = await fetchMealDetail(id);
      setDetails(...response);
      const payload = readLocalStorage(DONERECIPES_KEY);
      console.log(payload);
      if (payload !== null) {
        console.log('passou aqui?');
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

  console.log(doneRecipes);

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
