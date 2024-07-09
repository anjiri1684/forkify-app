import { API_URL } from './config';
import { getJSON } from './helpers';
import recipeView from './views/recipeView';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (err) {
    //temp error handling
    console.error(`${err}💥💥💥💥`);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  const data = await getJSON(`${API_URL}?search=${query}`);
  console.log(data);

  data.data.recipe.map(rec => {
    return {
      id: rec.id,
      title: rec.title,
      publisher: rec.publisher,
      image: rec.image_url,
    };
  });
  try {
  } catch (error) {
    console.error(`${err}💥💥💥💥`);
    throw err;
  }
};

loadSearchResults('pizza');
