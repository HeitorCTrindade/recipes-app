import React, { useContext, useEffect, useState } from 'react';
import { act } from 'react-dom/test-utils';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchDrinks } from '../services/fetchRecipes';
import { DRINKS_SAVE } from '../constant';

import RecipeFilter from '../components/RecipeFilter';
import RecipesContext from '../context/RecipesContext';
import { fetchDrinksCategories } from '../services/fetchCategories';
import Header from '../components/Header';
import searchImg from '../images/searchIcon.svg';
import Footer from '../components/Footer';

export default function Drinks(props) {
  const { recipes, recipesDispatch } = useContext(RecipesContext);
  const [drinksElements, setDrinksElements] = useState([]);
  const [categories, setCategories] = useState([]);

  const { drinks } = recipes;
  const { history } = props;
  const TWELVE_FIRST_DRINKS = 12;
  const FIVE_FIRST_CATEGORIES = 5;

  useEffect(() => {
    const fetchAPIS = async () => {
      const drinksRecipes = await fetchDrinks();
      act(() => { recipesDispatch({ type: DRINKS_SAVE, payload: drinksRecipes }); });

      const drinksCategories = await fetchDrinksCategories();
      const allCategories = drinksCategories.map((drink) => drink.strCategory);
      act(() => { setCategories(allCategories.slice(0, FIVE_FIRST_CATEGORIES)); });
    };
    fetchAPIS();
  }, [recipesDispatch]);

  useEffect(() => {
    const getDrinks = () => {
      setDrinksElements(drinks.slice(0, TWELVE_FIRST_DRINKS));
    };
    getDrinks();
  }, [drinks]);

  return (
    <div>
      <Header
        title="Drinks"
        search={ searchImg }
        history={ history }
      />
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
      <Footer history={ history } />
    </div>
  );
}

Drinks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
