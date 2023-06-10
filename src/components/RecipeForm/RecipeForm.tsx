import { useAppDispatch, useAppSelector } from 'modules/store';
import { createRecipe, editRecipe } from 'modules/recipes-reducer';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button/Button';
import TextField from '@mui/material/TextField/TextField';
import { RecipeType } from 'api/recipes-api';
import Textarea from '@mui/joy/Textarea/Textarea';

type InitialRecipeType = Omit<RecipeType, 'id'>

export const RecipeForm = () => {
  const [recipe, setRecipe] = useState<InitialRecipeType | RecipeType>({title: '', url: '', description: ''});
  const [error, setError] = useState<string | null>(null);


  const dispatch = useAppDispatch();
  const { recipeId } = useParams();

  const recipes = useAppSelector(state => state.recipes);


  useEffect(() => {
    if (!recipeId) return;

    const recipe = recipes.find(el => el.id === +recipeId);
    if (recipe) {
      setRecipe(recipe);
    }
  }, [recipes, recipeId]);


  const addRecipe = () => {
    if (!recipe.title) return setError('Title is required');

    const { title, url, description } = recipe;
    dispatch(createRecipe(title.trim(), url.trim(), description.trim()));
  };

  const updateRecipe = () => {
    if (!recipeId) return;
    if (!recipe.title) return setError('Title is required');

    const { title, url, description } = recipe;

    dispatch(editRecipe(+recipeId, title.trim(), url.trim(), description.trim()));
  };

  const changeRecipe = (property: string) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!recipe) return;
    const updatedRecipe: RecipeType | InitialRecipeType = {
      ...recipe,
      [property]: e.currentTarget.value
    };
    setRecipe(updatedRecipe);
  };


  return (
    <div style={{
      padding: '16px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'

    }}>
      <TextField value={recipe.title}
                 onChange={changeRecipe('title')}
                 label='Title'
                 margin='dense'
                 required
                 fullWidth
                 error={!!error}
                 helperText={error}
                 variant='outlined'
      />
      <TextField value={recipe.url}
                 onChange={changeRecipe('url')}
                 label='Image URL'
                 fullWidth
                 variant='outlined'
                 margin='dense'
      />
      <Textarea value={recipe.description}
                name='Outlined'
                placeholder='Description...'
                variant='outlined'
                minRows='2'
                maxRows='7'
                onChange={changeRecipe('description')}
                sx={{ margin: '8px 0 16px', width: '100%', fontWeight: '500' }}
      />
      {
        recipeId
          ? <div>
            <Button component={Link} to='/' variant='text' color='primary' sx={{ marginRight: 4 }}>cancel</Button>
            <Button component={Link} to={recipe.title && '/'} variant='contained' color='primary'
                    onClick={updateRecipe}>Submit</Button>
          </div>
          : <Button component={Link} to={recipe.title && '/'} variant='contained' color='primary'
                    onClick={addRecipe}>Submit</Button>
      }
    </div>
  );
};