import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import RecipesContext from './RecipesContext';

import {
  recipesReducer,
  RECIPES_INITIAL_STATE,
  USER_INITIAL_STATE,
  userReducer } from '../services/reducers';

export default function RecipesProvider({ children }) {
  const [recipes, recipesDispatch] = useReducer(recipesReducer, RECIPES_INITIAL_STATE);
  const [user, userDispatch] = useReducer(userReducer, USER_INITIAL_STATE);

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
