import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import { act } from 'react-dom/test-utils';
import RecipesContext from './RecipesContext';
import { MEALS_SAVE, DRINKS_SAVE } from '../constant';

import {
  recipesReducer,
  RECIPES_INITIAL_STATE,
  USER_INITIAL_STATE,
  userReducer } from '../services/reducers';
import { fetchDrinks, fetchMeals } from '../services/fetchRecipes';

export default function RecipesProvider({ children }) {
  const [recipes, recipesDispatch] = useReducer(recipesReducer, RECIPES_INITIAL_STATE);
  const [user, userDispatch] = useReducer(userReducer, USER_INITIAL_STATE);

  useEffect(() => {
    const getRecipes = async () => {
      const mealsRecipes = await fetchMeals();
      const drinksRecipes = await fetchDrinks();
      act(() => { recipesDispatch({ type: MEALS_SAVE, payload: mealsRecipes }); });
      act(() => { recipesDispatch({ type: DRINKS_SAVE, payload: drinksRecipes }); });
    };
    getRecipes();
  }, []);

  const contextValue = {
    recipes,
    recipesDispatch,
    user,
    userDispatch,
  };

  return (
    <RecipesContext.Provider value={ contextValue }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
