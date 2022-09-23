const INITIAL_STATE = {
  name: 'pedro',
  email: 'pedro@pedro.com',
};

function user(state = INITIAL_STATE, action) {
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

export default user;
