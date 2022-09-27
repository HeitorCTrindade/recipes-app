import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchDrinksDetail } from '../services/fetchDetails';

export default function DrinkRecipe() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const recipeDetails = async () => {
      const response = await fetchDrinksDetail(id);
      setDetails(...response);
    };
    recipeDetails();
  }, [id]);

  console.log(details);
  return (
    <div>
      MealRecipe
      {' '}
      {id}
    </div>
  );
}
