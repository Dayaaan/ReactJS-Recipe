import { getSlug } from 'src/utils/url';
/**
 * Initial State
 */
const initialState = {
  recipes: [],
  status: '',
};

/**
 * Types
 */
export const LOAD_RECIPES = 'LOAD_RECIPES';
export const RECEIVED_RECIPES = 'RECEIVED_RECIPES';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_RECIPES:
      return {
        ...state,
        status: 'loading',
      };
    case RECEIVED_RECIPES:
      return {
        ...state,
        recipes: action.data,
        status: 'loaded',
      };
    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const loadRecipes = () => ({
  type: LOAD_RECIPES,
});

export const receivedRecipes = data => ({
  type: RECEIVED_RECIPES,
  data,
});

/**
 * Selectors
 */

export const getCurrentRecipe = (recipes, slug) => (
  recipes.find(recipe => getSlug(recipe.name) === slug)
);

/**
 * Export
 */
export default reducer;
