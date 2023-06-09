import React, { useState } from 'react';
import { RecipeType } from '../../../api/recipes-api';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button/Button';
import { deleteRecipe } from '../recipes-reducer';
import { useAppDispatch } from '../../../app/store';

type PropsType = {
  recipe: RecipeType
}


export const Recipe: React.FC<PropsType> = React.memo(({ recipe }) => {
  const dispatch = useAppDispatch();

  const removeRecipe = () => {
    dispatch(deleteRecipe(recipe.id));
  };

    return (
      <Card sx={{
        width: 345,
        maxWidth: 345,
        height: 350,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <Link to={`/details/${recipe.id}`}>
          <CardMedia
            component='img'
            alt={recipe.title}
            height='140'
            image={recipe.url}
          />
        </Link>

        <CardContent>
          <Typography gutterBottom variant='h5' component='div' style={{
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {recipe.title}
          </Typography>
          <Typography variant='body2' color='text.secondary' style={{
            display: '-webkit-box',
            WebkitLineClamp: 5,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',

          }}>
            {recipe.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Button size='small' onClick={removeRecipe}>Delete</Button>
          <Button size='small' component={Link} to={`/edit/${recipe.id}`}>Edit</Button>
          <Button component={Link} to={`/details/${recipe.id}`} size='small'>Learn More</Button>
        </CardActions>
      </Card>
    );
});