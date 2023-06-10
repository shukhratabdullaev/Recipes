import { useAppSelector } from 'modules/store';
import { RecipeType } from 'api/recipes-api';
import Grid from '@mui/material/Grid/Grid';
import Paper from '@mui/material/Paper/Paper';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import Recipe from 'components/Recipe';

export const MainPage = () => {
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
      <Grid item>
        <Link to='recipes/create'>
          <Paper style={{ padding: '10px' }}>
            <Card sx={{
              width: 345,
              maxWidth: 345,
              height: 350,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#e8e8e8',
              ':hover': {
                backgroundColor: '#afafaf'
              },
              ':hover > button':  {
                backgroundColor: 'black'
              }

            }}>
              <IconButton color='primary' size='large'>
                <AddIcon />
              </IconButton>
            </Card>
          </Paper>
        </Link>
      </Grid>
    </Grid>
  );
}