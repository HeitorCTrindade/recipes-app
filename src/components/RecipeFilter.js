import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { act } from '@testing-library/react';

import RecipesContext from '../context/RecipesContext';
import { MEALS_SAVE, DRINKS_SAVE } from '../constant';
import { fetchMeals, fetchDrinks } from '../services/fetchRecipes';

export default function RecipeFilter(props) {
  const { categories, filterFor } = props;
  const { recipesDispatch } = useContext(RecipesContext);

  const MEAL_API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
  const DRINK_API = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

  const handleClick = async (element) => {
    if (filterFor === 'meal') {
      const request = await fetch(`${MEAL_API}${element}`);
      const response = await request.json();
      const data = response.meals;
      act(() => { recipesDispatch({ type: MEALS_SAVE, payload: data }); });
    }
    if (filterFor === 'drink') {
      const request = await fetch(`${DRINK_API}${element}`);
      const response = await request.json();
      const data = response.drinks;
      act(() => { recipesDispatch({ type: DRINKS_SAVE, payload: data }); });
    }
  };

  const handleAllFilter = async () => {
    if (filterFor === 'meal') {
      const mealsRecipes = await fetchMeals();
      act(() => { recipesDispatch({ type: MEALS_SAVE, payload: mealsRecipes }); });
    }
    if (filterFor === 'drink') {
      const drinksRecipes = await fetchDrinks();
      act(() => { recipesDispatch({ type: DRINKS_SAVE, payload: drinksRecipes }); });
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={ handleAllFilter }
        data-testid="All-category-filter"
      >
        All

      </button>
      {categories.map((element, index) => (
        <button
          key={ index }
          type="button"
          onClick={ () => handleClick(element) }
          data-testid={ `${element}-category-filter` }
        >
          {element}

        </button>
      ))}
    </div>
  );
}

RecipeFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  filterFor: PropTypes.string.isRequired,
};
