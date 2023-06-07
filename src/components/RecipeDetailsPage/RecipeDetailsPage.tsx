import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { RecipeType } from '../../api/recipes-api';
import Typography from '@mui/material/Typography/Typography';
import React from 'react';

export const RecipeDetailsPage = () => {
  const recipes = useAppSelector<RecipeType[]>(state => state.recipes);
  const userId  = useParams();
  // const recipe = recipes.filter(r => r.id === +!params.id)[0];
  console.log(userId)
  const dispatch = useAppDispatch();


  return (
    <div>
      <Typography>
        {/* {recipe.title} */}
      </Typography>
    </div>
  );

};