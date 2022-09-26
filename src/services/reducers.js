import { MEALS_SAVE, DRINKS_SAVE } from '../constant';

export const RECIPES_INITIAL_STATE = {
  meals: [],
  drinks: [],
};

export const USER_INITIAL_STATE = {
  email: '',
};

export const recipesReducer = (state = RECIPES_INITIAL_STATE, action) => {
  switch (action.type) {
  case MEALS_SAVE:
    return {
      ...state,
      meals: action.payload,
    };

  case DRINKS_SAVE:
    return {
      ...state,
      drinks: action.payload,
    };

  default:
    return state;
  }
};

export const userReducer = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
  case 'LOGIN':
    return {
      ...state,
      email: action.payload,
    };

  default:
    return state;
  }
};
