import React from 'react';
import PropTypes from 'prop-types';

export default function RecipeDetails({ details, pathname }) {
  const ingredientsArray = [];
  const measures = [];

  Object.keys(details).forEach((key) => {
    if (key.includes('strIngredient')) {
      ingredientsArray.push(details[key]);
    }
  });

  Object.keys(details).forEach((key) => {
    if (key.includes('strMeasure')) {
      measures.push(details[key]);
    }
  });

  const ingredientsAndMeasures = ingredientsArray.map((e, index) => ({
    ingredient: e,
    measure: measures[index],
  }));

  return (
    <div>
      {pathname.includes('meals') && (
        <div>
          <img
            src={ details.strMealThumb }
            alt={ details.strMeal }
            data-testid="recipe-photo"
          />
          <h5 data-testid="recipe-title">{details.strMeal}</h5>
          <p data-testid="recipe-category">{details.strCategory}</p>
          <ul>
            {ingredientsAndMeasures.length > 0
              && ingredientsAndMeasures.map((e, index) => (
                <li
                  key={ index }
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {e.ingredient}
                  {' '}
                  -
                  {' '}
                  {e.measure}
                </li>
              ))}
          </ul>
          <p data-testid="instructions">{details.strInstructions}</p>
          <iframe
            width="500"
            height="300"
            src={ details.strYoutube }
            data-testid="video"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      )}
      {pathname.includes('drinks') && (
        <div>
          <img
            src={ details.strDrinkThumb }
            alt={ details.strDrink }
            data-testid="recipe-photo"
          />
          <h5 data-testid="recipe-title">{details.strDrink}</h5>
          <p data-testid="recipe-category">{details.strCategory}</p>
          <ul>
            {ingredientsAndMeasures.length > 0
              && ingredientsAndMeasures.map((el, index) => (
                <li
                  key={ index }
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {el.ingredient}
                  {' '}
                  -
                  {' '}
                  {el.measure}
                </li>
              ))}
          </ul>
          <p data-testid="instructions">{details.strInstructions}</p>
          <p>{details.strAlcoholic}</p>
        </div>
      )}
    </div>
  );
}

RecipeDetails.propTypes = {
  pathname: PropTypes.string.isRequired,
  details: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};
