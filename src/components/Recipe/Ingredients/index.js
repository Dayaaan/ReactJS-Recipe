/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */

/**
 * Code
 */
const Ingredients = ({ name, quantity }) => (
  <div className="ingredient">
    <div className="ingredient-quantity">{quantity}</div>
    <div className="ingredient-name">{name}</div>
  </div>
);

Ingredients.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default Ingredients;
