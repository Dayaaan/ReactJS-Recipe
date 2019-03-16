/**
 * NPM Import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Import
import Nav from 'src/components/Nav';

// State / Données

const mapStateToProps = state => ({
  list: state.recipes,
});
// Dispatch / Action

const mapDispatchToProps = {};

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

// WithRouter : permet de re rendre un composant quand on clique sur un lien ,
// sans redux on a pas besoin
// Ou utilisé directement dans le app.js <Route component={Nav}/> au lieu de juste <Nav />
export default withRouter(NavContainer);
