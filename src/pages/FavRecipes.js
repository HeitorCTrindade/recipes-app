import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import favoriteIcon from '../images/blackHeartIcon.svg';
import { FAV_RECIPES_KEY } from '../services/localStorageFuncs';

const copy = require('clipboard-copy');

export default function FavRecipes(props) {
  const { history } = props;
  const location = useLocation();
  const { pathname } = location;
  const storageFavs = JSON.parse(localStorage.getItem(FAV_RECIPES_KEY));
  const [copied, setCopy] = useState(false);
  const [favoriteRecipes, setFavoriteRecipes] = useState(storageFavs);
  function handleClickShareButton(recipesId, recipesType) {
    const currentURL = window.location.host;
    setCopy(true);
    copy(`http://${currentURL}/${recipesType}s/${recipesId}`);
  }
  function mealFilter() {
    setFavoriteRecipes(favoriteRecipes.filter((recipe) => recipe.type === 'meal'));
  }
  function drinkFilter() {
    setFavoriteRecipes(favoriteRecipes.filter((recipe) => recipe.type === 'drink'));
  }
  function allFilter() {
    setFavoriteRecipes(storageFavs);
  }

  return (
    <div>
      <Header
        title="Favorite Recipes"
        search=""
        history={ history }
        path={ pathname }
      />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => allFilter() }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-meal-btn"
        onClick={ mealFilter }
      >
        Meals
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ drinkFilter }
      >
        Drinks
      </button>
      {favoriteRecipes !== null && favoriteRecipes.map((recipe, index) => (
        <div key={ index }>

          <Link
            to={ `/${recipe.type}s/${recipe.id}` }
            key={ index }
            className="card"
            style={ { width: '18rem' } }
            data-testid={ `${index}-recipe-card` }
          >
            <img
              src={ recipe.image }
              alt={ recipe.name }
              data-testid={ `${index}-horizontal-image` }
            />
            <p data-testid={ `${index}-horizontal-top-text` }>
              {recipe.type === 'meal'
                ? `${recipe.nationality} - ${recipe.category}`
                : recipe.alcoholicOrNot}
            </p>
            <p
              data-testid={ `${index}-horizontal-name` }
            >
              {recipe.name}
            </p>
          </Link>

          <button
            type="button"
            onClick={ () => handleClickShareButton(recipe.id, recipe.type) }
          >
            <img
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
              alt="shareIcon"
            />
          </button>
          {copied && <h3>Link copied!</h3> }
          <button
            type="button"
            onClick={ () => {
              setFavoriteRecipes(storageFavs.filter((item) => item.id !== recipe.id));
              localStorage.setItem(FAV_RECIPES_KEY, JSON
                .stringify(storageFavs.filter((item) => item.id !== recipe.id)));
            } }
          >
            <img
              data-testid={ `${index}-horizontal-favorite-btn` }
              src={ favoriteIcon }
              alt="favoriteIcon"
            />
          </button>

        </div>

      ))}
    </div>
  );
}
FavRecipes.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
