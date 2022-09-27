import React from 'react';
import PropTypes from 'prop-types';
import mealsIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';

function Footer(props) {
  return (
    <footer data-testid="footer">
      <button
        type="button"
        onClick={ () => {
          const { history } = props;
          history.push('/drinks');
        } }
        className="btn btn-warning"
        src={ drinkIcon }
      >
        <img
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          alt="drinkIcon"
        />
      </button>

      <button
        type="button"
        onClick={ () => {
          const { history } = props;
          history.push('/meals');
        } }
        className="btn btn-warning"
      >
        <img
          data-testid="meals-bottom-btn"
          src={ mealsIcon }
          alt="mealsIcon"
        />
      </button>
    </footer>
  );
}

Footer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Footer;