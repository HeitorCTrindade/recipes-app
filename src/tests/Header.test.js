import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderPath from './helpers/renderPath';

describe('Testa o componente Header', () => {
  test('Verifica se ao entrar na página o input é rederizado', () => {
    const { history } = renderPath('/meals');
    const profileBtn = screen.getByTestId('profile-top-btn');
    const seacrchBtn = screen.getByTestId('search-top-btn');
    expect(profileBtn).toBeInTheDocument();
    expect(seacrchBtn).toBeInTheDocument();
    userEvent.click(seacrchBtn);
    expect(screen.getByTestId('search-input')).toBeInTheDocument();

    userEvent.click(profileBtn);
    expect(history.location.pathname).toBe('/profile');

    // expect(title).toBe('Profile');
  });
});
