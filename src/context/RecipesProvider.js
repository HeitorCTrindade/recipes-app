import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import RecipesContext from './RecipesContext';

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
      recipesDispatch({ type: 'Meals to Save', payload: mealsRecipes });
      recipesDispatch({ type: 'Drinks to Save', payload: drinksRecipes });
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
