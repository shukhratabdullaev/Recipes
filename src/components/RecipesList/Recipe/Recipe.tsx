import React from 'react';
import { RecipeType } from '../../../api/recipes-api';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

type PropsType = {
  recipe: RecipeType
  removeRecipe: (id: number) => void
  addRecipe: (title: string) => void
}


export const Recipe: React.FC<PropsType> = React.memo(({ recipe, removeRecipe, addRecipe }) => {
  const deleteRecipe = () => {
    removeRecipe(recipe.id);
  };

  const createRecipe = (title: string) => {
    addRecipe(title)
  }

  if (recipe) {
    return (
      <Card sx={{
        width: 345,
        maxWidth: 345,
        height: 350,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <CardMedia
          component='img'
          alt={recipe.title}
          height='140'
          image={recipe.url}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {recipe.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {recipe.thumbnailUrl}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Link to='/details' style={{ textDecoration: 'none' }}>
            <Button size='medium'>Learn More</Button>
          </Link>
          <Button size='medium' onClick={deleteRecipe}>Delete Recipe</Button>
        </CardActions>
      </Card>
    );
  }
  return null;
});