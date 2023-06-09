import { useAppDispatch, useAppSelector } from '../../app/store';
import { createRecipe, editRecipe } from '../RecipesList/recipes-reducer';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button/Button';
import TextField from '@mui/material/TextField/TextField';
import { RecipeType } from '../../api/recipes-api';
import Textarea from '@mui/joy/Textarea/Textarea';

export const CreateRecipePage = React.memo(() => {
  const [titleText, setTitleText] = useState('');
  const [urlText, setUrlText] = useState('');
  const [descriptionText, setDescription] = useState('');
  const recipes = useAppSelector(state => state.recipes);
  const { recipeId } = useParams();
  let recipe: RecipeType | undefined;
  if (recipeId) recipe = recipes.find(el => el.id === +recipeId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (recipe) {
      const { title, url, description } = recipe;
      setTitleText(title);
      setUrlText(url);
      setDescription(description);
    }
  }, []);

  const [error, setError] = useState<string | null>(null);

  const addRecipe = () => {
    if (titleText !== '') {
      dispatch(createRecipe(titleText.trim(), urlText.trim(), descriptionText.trim()));
      setTitleText('');
      setUrlText('');
      setDescription('');
    } else {
      setError('Title is required');
    }
  };
  const updateRecipe = () => {
    if (recipe) {
      if (titleText !== '') {
        dispatch(editRecipe(recipe.id, titleText.trim(), urlText.trim(), descriptionText.trim()));
        setTitleText('');
        setUrlText('');
        setDescription('');
      } else {
        setError('Title is required');
      }
    }
  };


  return (
    <div style={{
      padding: '16px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

    }}>
      <TextField value={titleText}
                 onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setTitleText(e.currentTarget.value)}
                 label='Title'
                 margin='dense'
                 required
                 fullWidth
                 error={!!error}
                 helperText={error}
                 variant='outlined'

      />
      <TextField value={urlText}
                 onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setUrlText(e.currentTarget.value)}
                 label='Image URL'
                 fullWidth
                 variant='outlined'
                 margin='dense'
      />
      <Textarea value={descriptionText}
                name='Outlined'
                placeholder='Description...'
                variant='outlined'
                minRows='2'
                maxRows='7'
                onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setDescription(e.currentTarget.value)}
                sx={{ margin: '8px 0 16px', width: '100%', fontWeight: '500' }}
      />
      {
        recipe
          ? <div>
            <Button component={Link} to='/' variant='text' color='primary' sx={{ marginRight: 4 }}>cancel</Button>
            <Button component={Link} to='/' variant='contained' color='primary' disabled={!titleText} onClick={updateRecipe}>Edit Recipe</Button>
          </div>
          : <Button component={Link} to='/' variant='contained' color='primary' disabled={!titleText}
                    onClick={addRecipe}>Add Recipe</Button>
      }
    </div>
  );
});