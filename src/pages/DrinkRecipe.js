import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { fetchDrinksDetail } from '../services/fetchDetails';
import RecipeDetails from '../components/RecipeDetails';

export default function DrinkRecipe() {
  const { id } = useParams();
  const location = useLocation();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const recipeDetails = async () => {
      const response = await fetchDrinksDetail(id);
      setDetails(...response);
    };
    recipeDetails();
  }, [id]);

  return (
    <div>
      Drinks:
      {' '}
      <RecipeDetails details={ details } pathname={ location.pathname } />
    </div>
  );
}
