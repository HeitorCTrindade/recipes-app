export const RECIPES_INITIAL_STATE = {
  meals: [],
  drinks: [],
};

export const USER_INITIAL_STATE = {
  email: '',
};

export const recipesReducer = (state = RECIPES_INITIAL_STATE, action) => {
  switch (action.type) {
  case 'TESTE':
    return {
      ...state,
      teste: 'TESTE REDUCER',
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
