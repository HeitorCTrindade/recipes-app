import React, { useContext, useEffect, useState } from 'react';
import { act } from 'react-dom/test-utils';
import { Link } from 'react-router-dom';

import RecipeFilter from '../components/RecipeFilter';
import RecipesContext from '../context/RecipesContext';
import { fetchDrinksCategories } from '../services/fetchCategories';

export default function Drinks() {
  const { recipes } = useContext(RecipesContext);
  const [drinksElements, setDrinksElements] = useState([]);
  const [categories, setCategories] = useState([]);

  const { drinks } = recipes;
  const TWELVE_FIRST_DRINKS = 12;
  const FIVE_FIRST_CATEGORIES = 5;

  useEffect(() => {
    const getDrinks = async () => {
      act(() => { setDrinksElements(drinks.slice(0, TWELVE_FIRST_DRINKS)); });
      const drinksCategories = await fetchDrinksCategories();
      const allCategories = drinksCategories.map((drink) => drink.strCategory);
      act(() => { setCategories(allCategories.slice(0, FIVE_FIRST_CATEGORIES)); });
    };
    getDrinks();
  }, [drinks]);

  return (
    <div>
      Drinks
      <RecipeFilter categories={ categories } filterFor="drink" />
      {drinksElements.map((drink, index) => (
        <Link
          key={ index }
          className="card"
          style={ { width: '18rem' } }
          to={ `/drinks/${drink.idDrink}` }
          data-testid={ `${index}-recipe-card` }
        >
          <img
            className="card-img-top"
            data-testid={ `${index}-card-img` }
            src={ drink.strDrinkThumb }
            alt={ drink.strDrink }
          />
          <div className="card-body">
            <h5
              className="card-title"
              data-testid={ `${index}-card-name` }
            >
              {drink.strDrink}
            </h5>
          </div>
        </Link>
      ))}
    </div>
  );
}
