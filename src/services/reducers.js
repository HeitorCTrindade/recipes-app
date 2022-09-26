export const RECIPES_INITIAL_STATE = {
  meals: [],
  drinks: [],
};

export const USER_INITIAL_STATE = {
  email: '',
};

export const recipesReducer = (state = RECIPES_INITIAL_STATE, action) => {
  switch (action.type) {
  case 'Meals to Save':
    return {
      ...state,
      meals: action.payload,
    };

  case 'Drinks to Save':
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
