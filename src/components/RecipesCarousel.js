import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

export default function RecipesCarousel() {
  const { recipes } = useContext(RecipesContext);
  console.log(recipes);
  return (
    <div>Carousel</div>
  );
}
