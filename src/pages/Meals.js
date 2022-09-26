import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

export default function Meals() {
  const { recipes } = useContext(RecipesContext);
  const { meals } = recipes;
  const TWELVE_FIRST_MEALS = 12;
  const mealsElements = meals.slice(0, TWELVE_FIRST_MEALS);
  return (
    <div>
      Meals
      {mealsElements.map((meal, index) => (
        <div
          key={ index }
          className="card"
          style={ { width: '18rem' } }
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
        </div>
      ))}
    </div>
  );
}
