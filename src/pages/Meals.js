import React, { useContext, useEffect, useState } from 'react';
import { act } from 'react-dom/test-utils';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import RecipeFilter from '../components/RecipeFilter';
import RecipesContext from '../context/RecipesContext';
import { fetchMealsCategories } from '../services/fetchCategories';
import Header from '../components/Header';
import searchImg from '../images/searchIcon.svg';
import Footer from '../components/Footer';

export default function Meals(props) {
  const { recipes } = useContext(RecipesContext);
  const [mealsElements, setMealsElements] = useState([]);
  const [categories, setCategories] = useState([]);

  const { meals } = recipes;
  const TWELVE_FIRST_MEALS = 12;
  const FIVE_FIRST_CATEGORIES = 5;
  const { history } = props;

  useEffect(() => {
    const getMeals = async () => {
      act(() => { setMealsElements(meals.slice(0, TWELVE_FIRST_MEALS)); });
      const mealsCategories = await fetchMealsCategories();
      const allCategories = mealsCategories.map((meal) => meal.strCategory);
      act(() => { setCategories(allCategories.slice(0, FIVE_FIRST_CATEGORIES)); });
    };
    getMeals();
  }, [meals]);

  return (
    <div>
      <Header
        title="Meals"
        search={ searchImg }
        history={ history }
      />
      <RecipeFilter categories={ categories } filterFor="meal" />
      {mealsElements.map((meal, index) => (
        <Link
          key={ index }
          className="card"
          style={ { width: '18rem' } }
          to={ `/meals/${meal.idMeal}` }
          data-testid={ `${index}-recipe-card` }
        >
          <img
            className="card-img-top"
            data-testid={ `${index}-card-img` }
            src={ meal.strMealThumb }
            alt={ meal.strMeal }
          />
          <div className="card-body">
            <h5
              className="card-title"
              data-testid={ `${index}-card-name` }
            >
              {meal.strMeal}
            </h5>
          </div>
        </Link>
      ))}
      <Footer history={ history } />
    </div>
  );
}

Meals.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
