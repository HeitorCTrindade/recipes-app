const INITIAL_STATE = {
  receitas: [],
};

function recipes(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'TESTE':

    return {
      ...state,
      teste: true,
    };

  default:
    return state;
  }
}

export default recipes;
