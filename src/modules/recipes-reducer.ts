import { Dispatch } from 'redux';
import { recipesAPI, RecipeType } from 'api/recipes-api';


const initialState: RecipeType[] = [];

// eslint-disable-next-line @typescript-eslint/default-param-last
export const recipesReducer = (state: RecipeType[] = initialState, action: ActionsType): RecipeType[] => {
  switch (action.type) {
    case 'SET-RECIPES':
      return action.recipes;
    case 'REMOVE-RECIPE':
      return state.filter(recipe => recipe.id !== action.id);
    case 'ADD-RECIPE':
      return [...state, action.recipe];
    case 'UPDATE-RECIPE':
      return state.map(el => {
        if (el.id === action.id) {
          return {
            ...el,
            title: action.title,
            url: action.url,
            description: action.description
          };
        }
        return el;
      });
    default:
      return state;
  }
};

// actions
export const setRecipes = (recipes: RecipeType[]) => ({ type: 'SET-RECIPES', recipes } as const);
export const removeRecipe = (id: number) => ({ type: 'REMOVE-RECIPE', id } as const);
export const addRecipe = (recipe: RecipeType) => ({ type: 'ADD-RECIPE', recipe } as const);
export const updateRecipe = (id: number, title: string, url: string, description: string) => ({
  type: 'UPDATE-RECIPE',
  id,
  title,
  url,
  description
} as const);


// thunks
export const fetchRecipes = () => (dispatch: ThunkDispatch) => {
  recipesAPI.getRecipes()
    .then((res) => {
      dispatch(setRecipes(res));
    });
};

export const deleteRecipe = (recipeId: number) => (dispatch: ThunkDispatch) => {
  recipesAPI.deleteRecipe(recipeId)
    .then(() => {
      dispatch(removeRecipe(recipeId));
    });
};

export const createRecipe = (title: string, url: string, description: string) => (dispatch: ThunkDispatch) => {
  recipesAPI.createRecipe(title, url, description)
    .then((res) => {
      dispatch(addRecipe(res));
    });
};

export const editRecipe = (id: number, title: string, url: string, description: string) => (dispatch: ThunkDispatch) => {
  recipesAPI.updateRecipe(id, title, url, description)
    .then(() => {
      dispatch(updateRecipe(id, title, url, description));
    });
};

// types
export type SetRecipesType = ReturnType<typeof setRecipes>;
export type DeleteRecipeType = ReturnType<typeof removeRecipe>;
export type AddRecipeType = ReturnType<typeof addRecipe>;
export type UpdateRecipeType = ReturnType<typeof updateRecipe>;

type ActionsType =
  | SetRecipesType
  | DeleteRecipeType
  | AddRecipeType
  | UpdateRecipeType


type ThunkDispatch = Dispatch<ActionsType>
