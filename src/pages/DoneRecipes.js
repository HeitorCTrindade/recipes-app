import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import {
  readLocalStorage,
  DONERECIPES_KEY,
} from '../services/localStorageFuncs';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

export default function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const allDoneRecipes = readLocalStorage(DONERECIPES_KEY);

  useEffect(() => {
    setDoneRecipes(readLocalStorage(DONERECIPES_KEY));
  }, []);

  const handleClickShareButton = (recipeType, recipeId) => {
    const currentURL = window.location.host;
    setIsLinkCopied(true);
    if (recipeType === 'meal') copy(`http://${currentURL}/meals/${recipeId}`);
    else copy(`http://${currentURL}/drinks/${recipeId}`);
  };

  const handleClickFilterByMealsButton = () => {
    const tempDoneRecipes = allDoneRecipes.filter((recipe) => recipe.type === 'meal');
    setDoneRecipes(tempDoneRecipes);
  };

  const handleClickFilterByDrinkButton = () => {
    const tempDoneRecipes = allDoneRecipes.filter((recipe) => recipe.type === 'drink');
    setDoneRecipes(tempDoneRecipes);
  };

  const handleClickFilterAll = () => {
    setDoneRecipes(allDoneRecipes);
  };

  const generateMealCard = (mealObj, index) => (
    <div key={ mealObj.id } data-testid={ mealObj.id }>
      <div className="card">
        <Link
          to={ `/meals/${mealObj.id}` }
          className="card"
          style={ { width: '18rem' } }
        >
          <img
            src={ mealObj.image }
            alt={ mealObj.image }
            data-testid={ `${index}-horizontal-image` }
          />
        </Link>
        <div className="card-body">
          <Link
            to={ `/meals/${mealObj.id}` }
          >
            <h3 data-testid={ `${index}-horizontal-name` }>
              {mealObj.name}
            </h3>
          </Link>
          <h3 data-testid={ `${index}-horizontal-top-text` }>
            {`${mealObj.nationality} - ${mealObj.category}`}
          </h3>
          <h3 data-testid={ `${index}-horizontal-done-date` }>
            {mealObj.doneDate}
          </h3>
          <button
            type="button"
            data-testid={ `shareButton-${mealObj.id}` }
            onClick={ () => {
              handleClickShareButton(mealObj.type, mealObj.id);
            } }
            className="btn btn-warning"
          >
            <img
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
              alt="shareIcon"
            />
          </button>
          <h4
            key={ `${index}-${mealObj.tags[0]}` }
            data-testid={ `${index}-${mealObj.tags[0]}-horizontal-tag` }
          >
            {mealObj.tags[0]}
          </h4>
          <h4
            key={ `${index}-${mealObj.tags[1]}` }
            data-testid={ `${index}-${mealObj.tags[1]}-horizontal-tag` }
          >
            {mealObj.tags[1]}
          </h4>
        </div>
      </div>
    </div>
  );

  const generateDrinkCard = (drinkObj, index) => (
    <div key={ drinkObj.id } data-testid={ drinkObj.id }>
      <div className="card">
        <Link
          to={ `/drinks/${drinkObj.id}` }
          className="card"
          style={ { width: '18rem' } }
        >
          <img
            src={ drinkObj.image }
            alt={ drinkObj.image }
            data-testid={ `${index}-horizontal-image` }
          />
        </Link>
        <div className="card-body">
          <Link
            to={ `/drinks/${drinkObj.id}` }
          >
            <h3 data-testid={ `${index}-horizontal-name` }>
              {drinkObj.name}
            </h3>
          </Link>
          <h3 data-testid={ `${index}-horizontal-top-text` }>
            {drinkObj.alcoholicOrNot}
          </h3>
          <h3 data-testid={ `${index}-horizontal-done-date` }>
            {drinkObj.doneDate}
          </h3>
          <button
            type="button"
            data-testid={ `shareButton-${drinkObj.id}` }
            onClick={ () => {
              handleClickShareButton(drinkObj.type, drinkObj.id);
            } }
            className="btn btn-warning"
          >
            <img
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
              alt="shareIcon"
            />
          </button>
        </div>
      </div>
    </div>
  );
  const generateRecipesCards = () => (
    doneRecipes.map((recipe, index) => {
      if (recipe.type === 'meal') return generateMealCard(recipe, index);
      return generateDrinkCard(recipe, index);
    })
  );

  return (
    <div>
      <Header
        title="Done Recipes"
      />
      <button
        type="button"
        onClick={ handleClickFilterAll }
        className="btn btn-warning"
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        type="button"
        onClick={ handleClickFilterByMealsButton }
        className="btn btn-warning"
        data-testid="filter-by-meal-btn"
      >
        Meals
      </button>
      <button
        type="button"
        onClick={ handleClickFilterByDrinkButton }
        className="btn btn-warning"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
      {isLinkCopied && <div><h3>Link copied!</h3></div>}
      {generateRecipesCards()}
    </div>
  );
}
