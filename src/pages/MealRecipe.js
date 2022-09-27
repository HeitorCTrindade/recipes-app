import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import RecipeDetails from '../components/RecipeDetails';

import { fetchMealDetail } from '../services/fetchDetails';

export default function MealRecipe() {
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
      MealRecipe
      {' '}
      {id}
      <RecipeDetails details={ details } pathname={ location.pathname } />
    </div>
  );
}
