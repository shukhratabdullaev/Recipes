import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from 'modules/store';
import Typography from '@mui/material/Typography/Typography';
import React from 'react';
import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';

export const RecipePage = () => {
  const { recipeId } = useParams();
  const recipes = useAppSelector(state => state.recipes);
  let recipe;
  if (recipeId) recipe = recipes.find(el => el.id === +recipeId);


  if (recipe) {
    return (
      <div style={{textAlign: 'center'}}>
          <Typography variant='h1'>{recipe.title}</Typography>
        <Box
          component="img"
          sx={{
            height: 500,
            width: 700,
            padding: '16px 0'
          }}
          alt={recipe.title}
          src={recipe.url}
        />
        <Typography variant='h5' marginBottom="8px">{recipe.description}</Typography>
        <Button size='large' component={Link} to={`/recipes/${recipe.id}/edit`} variant='contained' color='primary'>edit</Button>
      </div>
    );
  }
  return <h1>2</h1>;
};