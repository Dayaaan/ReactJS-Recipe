/**
 * NPM import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';

/**
 * Local import
 */
import Home from 'src/components/Home';
import Nav from 'src/containers/Nav';
import Recipe from 'src/containers/Recipe';
import NotFound from 'src/components/NotFound';

import './app.scss';

/**
 * Code
 */
const App = ({ loaded }) => (
  <div id="app">
    <div id="app-nav">
      {loaded && <Nav />}
      {!loaded && <ReactLoading color="black" type="Bubbles" height={667} width={450} />}
    </div>
    <main id="app-main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/recipe/:slug"
          component={Recipe}
        />
        <Route component={NotFound} />
      </Switch>
    </main>
  </div>
);

App.propTypes = {
  loaded: PropTypes.bool.isRequired,
};
/**
 * Export
 */
export default App;
