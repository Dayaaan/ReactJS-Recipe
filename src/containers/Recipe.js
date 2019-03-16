/**
 * NPM Import
 */
import { connect } from 'react-redux';

// Import
import Recipe from 'src/components/Recipe';
import { getCurrentRecipe } from 'src/store/reducer';

// State / Données

// const mapStateToProps = (state, ownProps) => {
//   console.log(ownProps);
//   const { slug } = ownProps.match.params;

//   const currentRecipe = state.recipes.find(recipe => getSlug(recipe.name) === slug);
//   return {
//     recipe: currentRecipe,
//   };
// };

const mapStateToProps = (state, { match: { params } }) => ({
  recipe: getCurrentRecipe(state.recipes, params.slug),
});
// Dispatch / Action

const mapDispatchToProps = {};

const RecipeContainer = connect(mapStateToProps, mapDispatchToProps)(Recipe);

export default RecipeContainer;
