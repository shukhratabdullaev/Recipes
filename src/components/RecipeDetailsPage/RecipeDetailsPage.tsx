import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/store';
import Typography from '@mui/material/Typography/Typography';
import React from 'react';

export const RecipeDetailsPage = () => {
  const { recipeId } = useParams();
  const recipes = useAppSelector(state => state.recipes);
  let recipe;
  if (recipeId) recipe = recipes.find(el => el.id === +recipeId);


  if (recipe) {
    return (
      <div>
        <Typography>
          {recipe.title}
        </Typography>
      </div>
    );
  }
  return <h1>2</h1>;
};