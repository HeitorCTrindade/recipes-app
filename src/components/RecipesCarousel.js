import { act } from '@testing-library/react';
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import RecipesContext from '../context/RecipesContext';
import 'react-multi-carousel/lib/styles.css';

export default function RecipesCarousel({ pathname }) {
  const { recipes } = useContext(RecipesContext);
  const { meals, drinks } = recipes;
  const [sixRecipes, setSixRecipe] = useState([]);
  const FIRST_SIX = 6;

  useEffect(() => {
    const getFive = () => {
      if (pathname.includes('drinks')) {
        act(() => { setSixRecipe(meals.slice(0, FIRST_SIX)); });
      }
      if (pathname.includes('meals')) {
        act(() => { setSixRecipe(drinks.slice(0, FIRST_SIX)); });
      }
    };
    getFive();
  }, [drinks, meals, pathname]);

  return (
    <div>
      {pathname.includes('meals')
      && (
        <Carousel
          additionalTransfrom={ 0 }
          arrows
          autoPlaySpeed={ 3000 }
          centerMode={ false }
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={ false }
          infinite={ false }
          itemClass=""
          keyBoardControl
          minimumTouchDrag={ 80 }
          pauseOnHover
          renderArrowsWhenDisabled={ false }
          renderButtonGroupOutside={ false }
          renderDotsOutside={ false }
          responsive={ {
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          } }
          rewind={ false }
          rewindWithAnimation={ false }
          rtl={ false }
          shouldResetAutoplay
          showDots={ false }
          sliderClass=""
          slidesToSlide={ 1 }
          swipeable
        >
          {sixRecipes.map((e, index) => (
            <div
              key={ index }
              className="card"
              style={ { width: '180px' } }
              data-testid={ `${index}-recommendation-card` }
            >
              <img
                className="card-img-top"
                src={ e.strDrinkThumb }
                alt={ e.strDrink }
                style={ { height: '150px' } }
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  data-testid={ `${index}-recommendation-title` }
                >
                  { e.strDrink }

                </h5>
              </div>
            </div>
          ))}
        </Carousel>)}
      {pathname.includes('drinks')
      && (
        <Carousel
          additionalTransfrom={ 0 }
          arrows
          autoPlaySpeed={ 3000 }
          centerMode={ false }
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={ false }
          infinite={ false }
          itemClass=""
          keyBoardControl
          minimumTouchDrag={ 80 }
          pauseOnHover
          renderArrowsWhenDisabled={ false }
          renderButtonGroupOutside={ false }
          renderDotsOutside={ false }
          responsive={ {
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          } }
          rewind={ false }
          rewindWithAnimation={ false }
          rtl={ false }
          shouldResetAutoplay
          showDots={ false }
          sliderClass=""
          slidesToSlide={ 1 }
          swipeable
        >
          {sixRecipes.map((e, index) => (
            <div
              key={ index }
              className="card"
              style={ { width: '180px' } }
              data-testid={ `${index}-recommendation-card` }
            >
              <img
                className="card-img-top"
                src={ e.strMealThumb }
                alt={ e.strMeal }
                style={ { height: '150px' } }
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  data-testid={ `${index}-recommendation-title` }
                >
                  { e.strMeal }

                </h5>
              </div>
            </div>
          ))}
        </Carousel>)}
    </div>
  );
}

RecipesCarousel.propTypes = {
  pathname: PropTypes.string.isRequired,
};
