import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import clipboard from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import {
  saveStorageNewItem,
  FAV_RECIPES_KEY, readLocalStorage } from '../services/localStorageFuncs';

import { INITIAL_RECIPE_INFOS } from '../constant';

export default function RecipeDetails({ details, pathname }) {
  const [heartIcon, setHeartIcon] = useState(whiteHeartIcon);
  const [recipeInfos, setRecipeInfos] = useState(INITIAL_RECIPE_INFOS);
  const [copyRecipe, setCopyRecipe] = useState(false);
  const ingredientsArray = [];
  const measures = [];

  useEffect(() => {
    const saveRecipesInfos = () => {
      if (pathname.includes('/meals')) {
        setRecipeInfos({
          id: details.idMeal,
          type: 'meal',
          nationality: details.strArea,
          category: details.strCategory,
          alcoholicOrNot: '',
          name: details.strMeal,
          image: details.strMealThumb,
        });
      }

      if (pathname.includes('/drinks')) {
        setRecipeInfos({
          id: details.idDrink,
          type: 'drink',
          nationality: '',
          category: details.strCategory,
          alcoholicOrNot: details.strAlcoholic,
          name: details.strDrink,
          image: details.strDrinkThumb,
        });
      }
    };
    saveRecipesInfos();
  }, [details, pathname]);

  useEffect(() => {
    const readFavs = () => {
      const storageFavs = readLocalStorage(FAV_RECIPES_KEY);
      if (storageFavs !== null) {
        const checkStorage = storageFavs.some((e) => e.id === recipeInfos.id);
        if (checkStorage === true) {
          setHeartIcon(blackHeartIcon);
        }
      }
    };
    readFavs();
  }, [recipeInfos]);

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

  const favoriteRecipe = () => {
    if (heartIcon === whiteHeartIcon) {
      setHeartIcon(blackHeartIcon);
      saveStorageNewItem(recipeInfos, FAV_RECIPES_KEY);
    } else {
      setHeartIcon(whiteHeartIcon);
    }
  };

  const copiedPathname = () => {
    clipboard(`http://localhost:3000${pathname}`);
    setCopyRecipe(true);
  };

  return (
    <div>
      <div>
        <div className="card text-bg-dark" style={ { width: '362px' } }>
          <img
            src={ recipeInfos.image }
            alt={ recipeInfos.name }
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
              {recipeInfos.name}

            </h4>
            <p
              className="card-text"
              style={ { color: 'black' } }
              data-testid="recipe-category"
            >
              {recipeInfos.type === 'meal'
                ? recipeInfos.category : recipeInfos.alcoholicOrNot}

            </p>
          </div>
        </div>

        <button type="button" onClick={ favoriteRecipe }>
          <img src={ heartIcon } alt="favImage" data-testid="favorite-btn" />
        </button>

        <button type="button" onClick={ copiedPathname }>
          <img src={ shareIcon } alt="favImage" data-testid="share-btn" />
        </button>

        {copyRecipe && <span>Link copied!</span>}

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

        {recipeInfos.type === 'meal' && (
          <div>
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
      </div>
    </div>
  );
}

RecipeDetails.propTypes = {
  pathname: PropTypes.string.isRequired,
  details: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};
