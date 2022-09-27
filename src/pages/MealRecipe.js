import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMealDetail } from '../services/fetchDetails';

export default function MealRecipe() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const recipeDetails = async () => {
      const response = await fetchMealDetail(id);
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
