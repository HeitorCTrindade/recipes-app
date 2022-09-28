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

  const replaceWatch = () => {
    if (details.strYoutube) {
      return details.strYoutube.replace('watch?v=', 'embed/');
    }
  };

  return (
    <div>
      {pathname.includes('meals') && (
        <div>
          <div className="card text-bg-dark" style={ { width: '362px' } }>
            <img
              src={ details.strMealThumb }
              alt={ details.strMeal }
              style={ { width: '362px' } }
              className="card-img"
              data-testid="recipe-photo"
            />
            <div className="card-img-overlay">
              <h4
                className="card-title"
                style={ { color: 'black' } }
                data-testid="recipe-title"
              >
                {details.strMeal}

              </h4>
              <p
                className="card-text"
                style={ { color: 'black' } }
                data-testid="recipe-category"
              >
                {details.strCategory}

              </p>
            </div>
          </div>
          <h4>Ingredients</h4>
          <div className="card" style={ { width: '335px', margin: '12px' } }>
            <ul className="list-group list-group-flush">
              {ingredientsAndMeasures.length > 0
              && ingredientsAndMeasures.map((e, index) => (
                <li
                  key={ index }
                  data-testid={ `${index}-ingredient-name-and-measure` }
                  className="list-group-item"
                >
                  {e.ingredient}
                  {' '}
                  -
                  {' '}
                  {e.measure}
                </li>
              ))}
            </ul>
          </div>

          <h4>Instructions</h4>
          <div className="card" style={ { width: '335px', margin: '12px' } }>
            <p
              className="card-text text-start"
              style={ { padding: '5px' } }
              data-testid="instructions"
            >
              {details.strInstructions}

            </p>
          </div>
          <h4>Video</h4>
          <iframe
            width="300"
            height="200"
            src={ replaceWatch() }
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
            style={ { width: '400px' } }
            data-testid="recipe-photo"
          />
          <h4 data-testid="recipe-title">{details.strDrink}</h4>
          <p data-testid="recipe-category">{details.strAlcoholic}</p>
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
        </div>
      )}
    </div>
  );
}

RecipeDetails.propTypes = {
  pathname: PropTypes.string.isRequired,
  details: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};
