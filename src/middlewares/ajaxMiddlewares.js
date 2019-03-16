// Middleware ajax : traitement des récup de données
import { LOAD_RECIPES, receivedRecipes } from 'src/store/reducer';
import axios from 'axios';

const ajax = store => next => (action) => {
  const recipesURL = 'https://raw.githubusercontent.com/raywenderlich/recipes/master/Recipes.json';

  switch (action.type) {
    case LOAD_RECIPES:
      axios.get(recipesURL)
        .then(({ data }) => {
          store.dispatch(receivedRecipes(data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      break;
  }
  next(action);
};

export default ajax;
