import Grid from '@mui/material/Grid/Grid';
import Paper from '@mui/material/Paper/Paper';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { RecipeType } from '../../api/recipes-api';
import { useAppSelector } from '../../app/store';
import { Recipe } from './Recipe/Recipe';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

export const RecipesList: React.FC = () => {
  const recipes = useAppSelector<RecipeType[]>(state => state.recipes);

  return (
    <Grid container spacing={3} marginTop='16px'>
      {
        recipes.map(el => <Grid item key={el.id}>
          <Paper style={{ padding: '10px' }}>
            <Recipe recipe={el} />
          </Paper>
        </Grid>)
      }
      <Grid item display='flex' alignItems='center' justifyContent='center' width='350px'>
        <Link to='/create'>
          <IconButton color='primary'  size='large'>
            <AddIcon />
          </IconButton>
        </Link>
      </Grid>
    </Grid>
  );
};
