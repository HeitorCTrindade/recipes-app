import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

export default function Drinks() {
  const { recipes } = useContext(RecipesContext);
  const { drinks } = recipes;
  const TWELVE_FIRST_DRINKS = 12;
  const drinksElements = drinks.slice(0, TWELVE_FIRST_DRINKS);
  return (
    <div>
      Drinks
      {drinksElements.map((drink, index) => (
        <div
          key={ index }
          className="card"
          style={ { width: '18rem' } }
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
        </div>
      ))}
    </div>
  );
}
