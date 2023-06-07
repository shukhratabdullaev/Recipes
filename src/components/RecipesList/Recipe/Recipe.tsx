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
import TextField from '@mui/material/TextField/TextField';

type PropsType = {
  recipe: RecipeType
}


export const Recipe: React.FC<PropsType> = React.memo(({ recipe }) => {
  const [editableMode, setEditableMode] = useState(false);
  const dispatch = useAppDispatch();

  const removeRecipe = () => {
    dispatch(deleteRecipe(recipe.id));
  };

  if (!editableMode) {
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
          <Button component={Link} to={`/details/${recipe.id}`} size='medium'>Learn More</Button>
          <Button size='medium' onClick={() => setEditableMode(true)}>edit</Button>
          <Button size='medium' onClick={removeRecipe}>Delete</Button>
        </CardActions>
      </Card>
    );
  }
  return (
    <Card sx={{
      width: 345,
      maxWidth: 345,
      height: 350,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <TextField value={recipe.url} />
      <CardContent>
        <TextField value={recipe.title} />
        <TextField value={recipe.thumbnailUrl} />

      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>

        <Button size='medium' onClick={() => setEditableMode(false)}>cancel</Button>
        <Button size='medium' onClick={() => setEditableMode(false)}>save</Button>
      </CardActions>
    </Card>
  );

});