/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import Presentation from './Presentation';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
// import Presentation from '../Presentation';

// Styles
import './Recipe.scss';

/**
 * Code
 */
const Recipe = ({ recipe }) => (
  <div id="recipe">
    <Presentation
      name={recipe.name}
      img={recipe.imageURL}
    />
    <Ingredients ingredients={recipe.ingredients} />
    <Instructions steps={recipe.steps} />
  </div>
);

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    steps: PropTypes.string.isRequired,
  }).isRequired,
};
/**
 * Export
 */
export default Recipe;
