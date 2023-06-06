import { Dispatch } from 'redux';
import { recipesAPI, RecipeType } from '../../api/recipes-api';


const initialState: RecipeType[] = [];

// eslint-disable-next-line @typescript-eslint/default-param-last
export const recipesReducer = (state: RecipeType[] = initialState, action: ActionsType): RecipeType[] => {
  switch (action.type) {
    case 'SET-RECIPES':
      return action.recipes.map(recipe => ({ ...recipe }));
    case 'REMOVE-RECIPE':
      return state.filter(recipe => recipe.id !== action.id);
    case 'ADD-RECIPE':
      return [...state, { ...action.recipe }];
    default:
      return state;
  }
};

// actions
export const setRecipes = (recipes: RecipeType[]) => ({ type: 'SET-RECIPES', recipes } as const);
export const removeRecipe = (id: number) => ({ type: 'REMOVE-RECIPE', id } as const);
export const addRecipe = (recipe: RecipeType) => ({ type: 'ADD-RECIPE', recipe } as const);


// thunks
export const fetchRecipes = () => (dispatch: ThunkDispatch) => {
  recipesAPI.getRecipes()
    .then((res) => {
      dispatch(setRecipes(res));
    });
};

export const deleteRecipe = (recipeId: number) => (dispatch: ThunkDispatch) => {
  recipesAPI.deleteRecipe(recipeId)
    .then((res) => {
      dispatch(removeRecipe(recipeId));
    });
};

export const createRecipe = (title: string) => (dispatch: ThunkDispatch) => {
  recipesAPI.createRecipe(title)
    .then((res) => {
      dispatch(addRecipe(res));
    });
};

// types
export type SetRecipesType = ReturnType<typeof setRecipes>;
export type DeleteRecipeType = ReturnType<typeof removeRecipe>;
export type AddRecipeType = ReturnType<typeof addRecipe>;

type ActionsType =
  | SetRecipesType
  | DeleteRecipeType
  | AddRecipeType
// | ReturnType<typeof changeTodolistTitleAC>
// | ReturnType<typeof changeTodolistFilterAC>
// | ReturnType<typeof changeTodolistEntityStatusAC>


type ThunkDispatch = Dispatch<ActionsType>
