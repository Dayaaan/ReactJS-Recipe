import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local Import
 */
import './Presentation.scss';

const Presentation = ({
  name,
  img,
}) => (
  <div id="presentation">
    <img id="presentation-image" src={img} alt={name} />
    <div id="presentation-content">
      <h1 id="presentation-title">{name}</h1>
    </div>
  </div>
);

Presentation.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default Presentation;
