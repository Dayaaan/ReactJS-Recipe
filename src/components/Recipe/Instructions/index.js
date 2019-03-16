/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import './Instructions.scss';

/**
 * Code
 */
const Instructions = ({ steps }) => (
  <ol id="instructions">
    {steps.map(step => (
      <li key={step} className="instruction">{step}</li>
    ))}
  </ol>
);

Instructions.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

/**
 * Export
 */
export default Instructions;
