/**
 * NPM Import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Import
import App from 'src/components/App';

// State / Données

const mapStateToProps = state => ({
  loaded: state.status,
});
// Dispatch / Action

const mapDispatchToProps = {};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

// WithRouter : permet de re rendre un composant quand on clique sur un lien ,
// sans redux on a pas besoin
// Ou utilisé directement dans le app.js <Route component={Nav}/> au lieu de juste <Nav />
export default withRouter(AppContainer);
