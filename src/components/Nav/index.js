/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { getURL } from 'src/utils/url';

/**
 * Local import
 */
import './nav.scss';

/**
 * Code
 */
const Nav = ({ list }) => (
  <nav className="nav">
    <NavLink
      exact
      to="/"
      className="nav-link"
      activeClassName="nav-link--active"
    >
      Home
    </NavLink>

    {list.map(recipe => (
      <NavLink
        to={getURL('/recipe', recipe.name)}
        key={recipe.name}
        exact
        className="nav-link"
        activeClassName="nav-link--active"
      >
        {recipe.name}
      </NavLink>
    ))}
  </nav>
);

Nav.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

/**
 * Export
 */
export default Nav;
