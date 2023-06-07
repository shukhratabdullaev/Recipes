import Grid from '@mui/material/Grid/Grid';
import Paper from '@mui/material/Paper/Paper';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { RecipeType } from '../../api/recipes-api';
import { useAppSelector } from '../../app/store';
import { Recipe } from './Recipe/Recipe';
import { AddBox } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';

export const RecipesList: React.FC = () => {
  const recipes = useAppSelector<RecipeType[]>(state => state.recipes);

  return (
    <Grid container spacing={3}>
      {
        recipes.map(el => <Grid item key={el.id}>
          <Paper style={{ padding: '10px' }}>
            <Recipe recipe={el} />
          </Paper>
        </Grid>)
      }
      <Grid />
      <Card sx={{
        width: 345,
        maxWidth: 345,
        height: 350,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <CardContent>
          <Link to='/create'>
            <IconButton color='primary'>
              <AddBox />
            </IconButton>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );
};
