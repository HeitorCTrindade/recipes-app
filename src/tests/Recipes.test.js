import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderPath from './helpers/renderPath';
import mealsMock from './mocks/mealsMock';
import drinksMock from './mocks/drinksMock';

async function waitPageLoads() {
  await waitFor(() => {
    expect(screen.getAllByTestId(/recipe-card/)).toHaveLength(12);
  });
}

describe('Teste da tela de receitas e drinks', () => {
  it('Testa a página \'/meals\' ', async () => {
    global.fetch = jest.fn().mockResolvedValue(async () => ({
      json: async () => mealsMock,
    }))
      .mockResolvedValueOnce(async () => ({
        json: async () => drinksMock,
      }))
      .mockResolvedValueOnce('second call');

    const { history } = renderPath(<App />);
    history.push('/meals');

    await waitPageLoads();
    const firstMeal = screen.getByTestId('0-recipe-card');
    expect(firstMeal).toBeInTheDocument();
  });

  it('Testa a página \'/drinks\' ', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => drinksMock,
    }));

    const { history } = renderPath(<App />);
    history.push('/drinks');

    await waitPageLoads();
    const meals = screen.getByText(/meals/i);
    expect(meals).toBeInTheDocument();
  });
});
