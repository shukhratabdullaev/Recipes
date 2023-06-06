import Grid from '@mui/material/Grid/Grid';
import Paper from '@mui/material/Paper/Paper';
import React, { useEffect } from 'react';
import { RecipeType } from '../../api/recipes-api';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { Recipe } from './Recipe/Recipe';
import { fetchRecipes, deleteRecipe, createRecipe } from './recipes-reducer';

export const RecipesList: React.FC = () => {
  const recipes = useAppSelector<RecipeType[]>(state => state.recipes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const thunk = fetchRecipes();
    dispatch(thunk);
  }, []);


  const removeRecipe = (id: number) => {
    dispatch(deleteRecipe(id));
  };

  const addRecipe = (title: string) => {
    dispatch(createRecipe(title))
  }

  return (
    <Grid container spacing={3}>
      {
        recipes.map(el => <Grid item key={el.id}>
          <Paper style={{ padding: '10px' }}>
            <Recipe recipe={el} removeRecipe={removeRecipe} addRecipe={addRecipe}  />
          </Paper>
        </Grid>)
      }
    </Grid>
  );
};
